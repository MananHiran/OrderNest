import { PrismaClient, ProductType, UnitType, ComponentState, ManufacturingOrderStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting manufacturing orders seeding...');

  try {
    // Get existing users
    const users = await prisma.user.findMany();
    if (users.length === 0) {
      console.log('❌ No users found. Please create users first.');
      return;
    }

    const adminUser = users.find(u => u.role === 'ADMIN') || users[0];
    const managerUser = users.find(u => u.role === 'MANUFACTURER_MANAGER') || users[0];

    // Create work centers
    console.log('🏭 Creating work centers...');
    const assemblyLine = await prisma.workCenter.create({
      data: {
        name: 'Assembly Line A1',
        cost_per_hour: 50.0
      }
    });

    // Create products (only finished goods)
    console.log('📦 Creating finished products...');
    const steelBolt = await prisma.product.create({
      data: {
        product_name: 'Steel Bolt M8x40',
        type: ProductType.FINISHED_GOOD,
        unit_of_measure: UnitType.PCS,
        current_stock: 1500,
        cost_per_unit: 2.50
      }
    });

    const aluminumPlate = await prisma.product.create({
      data: {
        product_name: 'Aluminum Plate 200x300mm',
        type: ProductType.FINISHED_GOOD,
        unit_of_measure: UnitType.PCS,
        current_stock: 250,
        cost_per_unit: 25.00
      }
    });

    const motorAssembly = await prisma.product.create({
      data: {
        product_name: 'Electric Motor Assembly 5HP',
        type: ProductType.FINISHED_GOOD,
        unit_of_measure: UnitType.PCS,
        current_stock: 75,
        cost_per_unit: 450.00
      }
    });

    const widgetProduct = await prisma.product.create({
      data: {
        product_name: 'Industrial Widget Pro',
        type: ProductType.FINISHED_GOOD,
        unit_of_measure: UnitType.PCS,
        current_stock: 0,
        cost_per_unit: 125.00
      }
    });

    const gearComponent = await prisma.product.create({
      data: {
        product_name: 'Precision Gear Component',
        type: ProductType.FINISHED_GOOD,
        unit_of_measure: UnitType.PCS,
        current_stock: 200,
        cost_per_unit: 85.00
      }
    });

    // Create Manufacturing Orders
    console.log('🏭 Creating manufacturing orders...');
    const mo1 = await prisma.manufacturingOrder.create({
      data: {
        product_id: steelBolt.product_id,
        quantity: 1000,
        status: ManufacturingOrderStatus.IN_PROGRESS,
        state: ComponentState.Avaliable,
        scheduled_start: new Date('2024-01-15'),
        scheduled_end: new Date('2024-01-20'),
        actual_start: new Date('2024-01-15'),
        created_by: managerUser.user_id,
        assigned_to: adminUser.user_id
      }
    });

    const mo2 = await prisma.manufacturingOrder.create({
      data: {
        product_id: aluminumPlate.product_id,
        quantity: 500,
        status: ManufacturingOrderStatus.CONFIRMED,
        state: ComponentState.Avaliable,
        scheduled_start: new Date('2024-01-18'),
        scheduled_end: new Date('2024-01-25'),
        created_by: managerUser.user_id,
        assigned_to: adminUser.user_id
      }
    });

    const mo3 = await prisma.manufacturingOrder.create({
      data: {
        product_id: motorAssembly.product_id,
        quantity: 50,
        status: ManufacturingOrderStatus.DONE,
        state: ComponentState.Avaliable,
        scheduled_start: new Date('2024-01-10'),
        scheduled_end: new Date('2024-01-14'),
        actual_start: new Date('2024-01-10'),
        actual_end: new Date('2024-01-13'),
        created_by: adminUser.user_id,
        assigned_to: managerUser.user_id
      }
    });

    const mo4 = await prisma.manufacturingOrder.create({
      data: {
        product_id: widgetProduct.product_id,
        quantity: 2000,
        status: ManufacturingOrderStatus.DRAFT,
        state: ComponentState.Not_Avaliable,
        scheduled_start: new Date('2024-01-25'),
        scheduled_end: new Date('2024-01-30'),
        created_by: managerUser.user_id
      }
    });

    const mo5 = await prisma.manufacturingOrder.create({
      data: {
        product_id: gearComponent.product_id,
        quantity: 300,
        status: ManufacturingOrderStatus.TO_CLOSE,
        state: ComponentState.Avaliable,
        scheduled_start: new Date('2024-01-12'),
        scheduled_end: new Date('2024-01-17'),
        actual_start: new Date('2024-01-12'),
        created_by: adminUser.user_id,
        assigned_to: managerUser.user_id
      }
    });

    console.log('✅ Manufacturing orders seeding completed successfully!');
    console.log(`📊 Created:`);
    console.log(`   - 1 work center`);
    console.log(`   - 5 finished products`);
    console.log(`   - 5 manufacturing orders`);

  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
