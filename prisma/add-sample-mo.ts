import { PrismaClient, ProductType, UnitType, ComponentState, ManufacturingOrderStatus } from '../lib/generated/prisma';

const prisma = new PrismaClient();

async function addSampleData() {
  console.log('🌱 Adding sample manufacturing orders...');

  try {
    // Get existing users
    const users = await prisma.user.findMany();
    if (users.length === 0) {
      console.log('❌ No users found. Please create users first.');
      return;
    }

    const adminUser = users.find(u => u.role === 'ADMIN') || users[0];
    const managerUser = users.find(u => u.role === 'MANUFACTURER_MANAGER') || users[0];

    // Create work center
    const workCenter = await prisma.workCenter.create({
      data: {
        name: 'Assembly Line A1',
        cost_per_hour: 50.0
      }
    });

    // Create finished products
    const products = await Promise.all([
      prisma.product.create({
        data: {
          product_name: 'Steel Bolt M8x40',
          type: ProductType.FINISHED_GOOD,
          unit_of_measure: UnitType.PCS,
          current_stock: 1500,
          cost_per_unit: 2.50
        }
      }),
      prisma.product.create({
        data: {
          product_name: 'Aluminum Plate 200x300mm',
          type: ProductType.FINISHED_GOOD,
          unit_of_measure: UnitType.PCS,
          current_stock: 250,
          cost_per_unit: 25.00
        }
      }),
      prisma.product.create({
        data: {
          product_name: 'Electric Motor Assembly 5HP',
          type: ProductType.FINISHED_GOOD,
          unit_of_measure: UnitType.PCS,
          current_stock: 75,
          cost_per_unit: 450.00
        }
      }),
      prisma.product.create({
        data: {
          product_name: 'Industrial Widget Pro',
          type: ProductType.FINISHED_GOOD,
          unit_of_measure: UnitType.PCS,
          current_stock: 0,
          cost_per_unit: 125.00
        }
      }),
      prisma.product.create({
        data: {
          product_name: 'Precision Gear Component',
          type: ProductType.FINISHED_GOOD,
          unit_of_measure: UnitType.PCS,
          current_stock: 200,
          cost_per_unit: 85.00
        }
      })
    ]);

    // Create manufacturing orders one by one to avoid ID conflicts
    const orders = [];
    
    const mo1 = await prisma.manufacturingOrder.create({
      data: {
        mo_id: `mo_${Date.now()}_1`,
        product_id: products[0].product_id,
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
    orders.push(mo1);

    const mo2 = await prisma.manufacturingOrder.create({
      data: {
        mo_id: `mo_${Date.now()}_2`,
        product_id: products[1].product_id,
        quantity: 500,
        status: ManufacturingOrderStatus.CONFIRMED,
        state: ComponentState.Avaliable,
        scheduled_start: new Date('2024-01-18'),
        scheduled_end: new Date('2024-01-25'),
        created_by: managerUser.user_id,
        assigned_to: adminUser.user_id
      }
    });
    orders.push(mo2);

    const mo3 = await prisma.manufacturingOrder.create({
      data: {
        mo_id: `mo_${Date.now()}_3`,
        product_id: products[2].product_id,
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
    orders.push(mo3);

    const mo4 = await prisma.manufacturingOrder.create({
      data: {
        mo_id: `mo_${Date.now()}_4`,
        product_id: products[3].product_id,
        quantity: 2000,
        status: ManufacturingOrderStatus.DRAFT,
        state: ComponentState.Not_Avaliable,
        scheduled_start: new Date('2024-01-25'),
        scheduled_end: new Date('2024-01-30'),
        created_by: managerUser.user_id
      }
    });
    orders.push(mo4);

    const mo5 = await prisma.manufacturingOrder.create({
      data: {
        mo_id: `mo_${Date.now()}_5`,
        product_id: products[4].product_id,
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
    orders.push(mo5);

    console.log('✅ Sample data added successfully!');
    console.log(`📊 Created:`);
    console.log(`   - 1 work center`);
    console.log(`   - ${products.length} finished products`);
    console.log(`   - ${orders.length} manufacturing orders`);

  } catch (error) {
    console.error('❌ Error adding sample data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

addSampleData();
