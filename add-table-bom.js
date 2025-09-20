const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addTableBOM() {
  try {
    console.log('🔧 Adding BOM data to Table product...\n');

    // Get the Table product
    const tableProduct = await prisma.product.findFirst({
      where: { product_name: 'Table', type: 'FINISHED_GOOD' }
    });

    if (!tableProduct) {
      console.log('❌ Table product not found');
      return;
    }

    console.log('📦 Found Table product:', tableProduct.product_name);

    // Check if BOM already exists
    const existingBOM = await prisma.bOM.findFirst({
      where: { product_id: tableProduct.product_id },
      include: { components: true }
    });

    if (existingBOM) {
      console.log('ℹ️  BOM already exists for Table product');
      console.log('📋 Existing BOM components:');
      existingBOM.components.forEach((comp, index) => {
        console.log(`   ${index + 1}. Component ID: ${comp.component_id}, Quantity: ${comp.quantity_required}`);
      });
      return;
    }

    // Get raw materials for BOM
    const woodenTop = await prisma.product.findFirst({
      where: { product_name: 'Wooden Top', type: 'RAW_MATERIAL' }
    });

    const woodenLeg = await prisma.product.findFirst({
      where: { product_name: 'Wooden Leg', type: 'RAW_MATERIAL' }
    });

    const screws = await prisma.product.findFirst({
      where: { product_name: 'Screws', type: 'RAW_MATERIAL' }
    });

    const varnish = await prisma.product.findFirst({
      where: { product_name: 'Varnish Bottle', type: 'RAW_MATERIAL' }
    });

    if (!woodenTop || !woodenLeg || !screws || !varnish) {
      console.log('❌ Some raw materials not found');
      console.log('   Wooden Top:', !!woodenTop);
      console.log('   Wooden Leg:', !!woodenLeg);
      console.log('   Screws:', !!screws);
      console.log('   Varnish:', !!varnish);
      return;
    }

    console.log('✅ All raw materials found');

    // Create BOM and components in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the BOM
      const newBOM = await tx.bOM.create({
        data: {
          product_id: tableProduct.product_id
        }
      });

      console.log('📋 Created BOM with ID:', newBOM.bom_id);

      // Create BOM components
      const bomComponents = [
        {
          bom_id: newBOM.bom_id,
          component_id: woodenTop.product_id,
          quantity_required: 1 // 1 wooden top per table
        },
        {
          bom_id: newBOM.bom_id,
          component_id: woodenLeg.product_id,
          quantity_required: 4 // 4 wooden legs per table
        },
        {
          bom_id: newBOM.bom_id,
          component_id: screws.product_id,
          quantity_required: 16 // 16 screws per table
        },
        {
          bom_id: newBOM.bom_id,
          component_id: varnish.product_id,
          quantity_required: 1 // 1 varnish bottle per table
        }
      ];

      const createdComponents = await tx.bOMComponent.createMany({
        data: bomComponents
      });

      console.log('🔧 Created', createdComponents.count, 'BOM components');

      return { bom: newBOM, componentsCount: createdComponents.count };
    });

    console.log('✅ Table product BOM created successfully!');
    console.log('📊 BOM components:');
    console.log(`   - 1x Wooden Top (${woodenTop.product_name})`);
    console.log(`   - 4x Wooden Leg (${woodenLeg.product_name})`);
    console.log(`   - 16x Screws (${screws.product_name})`);
    console.log(`   - 1x Varnish Bottle (${varnish.product_name})`);

  } catch (error) {
    console.error('❌ Error adding BOM data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addTableBOM();