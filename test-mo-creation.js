const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testManufacturingOrderCreation() {
  try {
    console.log('🧪 Testing Manufacturing Order Creation with Component Consumption...\n');

    // Get the Table product with BOM data
    const tableProduct = await prisma.product.findFirst({
      where: { product_name: 'Table', type: 'FINISHED_GOOD' },
      include: {
        boms_as_product: {
          include: {
            components: {
              include: {
                component: true
              }
            }
          }
        }
      }
    });

    if (!tableProduct) {
      console.log('❌ Table product not found');
      return;
    }

    console.log('📦 Found Table product:', tableProduct.product_name);
    console.log('📋 BOM data:', tableProduct.boms_as_product.length > 0 ? 'Available' : 'Not Available');

    if (tableProduct.boms_as_product.length > 0) {
      const bom = tableProduct.boms_as_product[0];
      console.log('🔧 BOM Components:');
      bom.components.forEach((comp, index) => {
        console.log(`   ${index + 1}. ${comp.component.product_name}: ${comp.quantity_required} ${comp.component.unit_of_measure}`);
      });
    }

    // Get a user for the manufacturing order
    const user = await prisma.user.findFirst();
    if (!user) {
      console.log('❌ No user found');
      return;
    }

    console.log('\n🏭 Creating Manufacturing Order...');

    // Calculate component consumptions
    const componentConsumptions = [];
    const quantity = 5; // Making 5 tables

    if (tableProduct.boms_as_product.length > 0) {
      const bom = tableProduct.boms_as_product[0];
      bom.components.forEach(bomComponent => {
        const totalRequired = bomComponent.quantity_required * quantity;
        componentConsumptions.push({
          product_id: bomComponent.component_id,
          product_name: bomComponent.component.product_name,
          consumption_quantity: totalRequired,
          unit_of_measure: bomComponent.component.unit_of_measure
        });
      });
    }

    console.log('📊 Component Consumptions to create:');
    componentConsumptions.forEach((comp, index) => {
      console.log(`   ${index + 1}. ${comp.product_name}: ${comp.consumption_quantity} ${comp.unit_of_measure}`);
    });

    // Create the manufacturing order with component consumptions
    const result = await prisma.$transaction(async (tx) => {
      // Create the manufacturing order
      const mo = await tx.manufacturingOrder.create({
        data: {
          product_id: tableProduct.product_id,
          quantity: quantity,
          status: 'CONFIRMED',
          created_by: user.user_id,
          assigned_to: user.user_id,
          scheduled_start: new Date(),
          scheduled_end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
        }
      });

      console.log('✅ Manufacturing Order created with ID:', mo.mo_id);

      // Create component consumptions
      if (componentConsumptions.length > 0) {
        const consumptionData = componentConsumptions.map(comp => ({
          mo_id: mo.mo_id,
          product_id: comp.product_id,
          product_name: comp.product_name,
          consumption_quantity: comp.consumption_quantity
        }));

        const createdConsumptions = await tx.componentConsumption.createMany({
          data: consumptionData
        });

        console.log('🔧 Created', createdConsumptions.count, 'component consumption records');
      }

      return { mo, consumptionsCount: componentConsumptions.length };
    });

    console.log('\n✅ Manufacturing Order created successfully!');
    console.log('📈 Summary:');
    console.log(`   - MO ID: ${result.mo.mo_id}`);
    console.log(`   - Product: ${tableProduct.product_name}`);
    console.log(`   - Quantity: ${quantity}`);
    console.log(`   - Component Consumptions: ${result.consumptionsCount}`);

    // Verify the component consumptions were created
    console.log('\n🔍 Verifying component consumptions...');
    const consumptions = await prisma.componentConsumption.findMany({
      where: { mo_id: result.mo.mo_id }
    });

    console.log(`📊 Found ${consumptions.length} component consumption records:`);
    consumptions.forEach((consumption, index) => {
      console.log(`   ${index + 1}. ${consumption.product_name}: ${consumption.consumption_quantity}`);
    });

  } catch (error) {
    console.error('❌ Error testing manufacturing order creation:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testManufacturingOrderCreation();