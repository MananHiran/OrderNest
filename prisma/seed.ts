import { PrismaClient, UserRole, ProductType, UnitType, ComponentState, ManufacturingOrderStatus } from '../lib/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create sample users
  console.log('👥 Creating sample users...');
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@ordernest.com',
      password_hash: await bcrypt.hash('admin123', 12),
      role: UserRole.ADMIN,
      phone: '+1234567890'
    }
  });

  const manufacturerManager = await prisma.user.create({
    data: {
      name: 'John Manufacturing',
      email: 'john@ordernest.com',
      password_hash: await bcrypt.hash('john123', 12),
      role: UserRole.MANUFACTURER_MANAGER,
      phone: '+1234567891'
    }
  });

  const operator = await prisma.user.create({
    data: {
      name: 'Mike Operator',
      email: 'mike@ordernest.com',
      password_hash: await bcrypt.hash('mike123', 12),
      role: UserRole.OPERATOR_MANAGER,
      phone: '+1234567892'
    }
  });

  // Create work centers
  console.log('🏭 Creating work centers...');
  const assemblyLine = await prisma.workCenter.create({
    data: {
      name: 'Assembly Line A1',
      cost_per_hour: 50.0
    }
  });

  const paintingStation = await prisma.workCenter.create({
    data: {
      name: 'Painting Station P1',
      cost_per_hour: 35.0
    }
  });

  // Create products
  console.log('📦 Creating sample products...');
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

  const steelRod = await prisma.product.create({
    data: {
      product_name: 'Steel Rod 10mm',
      type: ProductType.RAW_MATERIAL,
      unit_of_measure: UnitType.MT,
      current_stock: 500,
      cost_per_unit: 15.75
    }
  });

  const paintCoating = await prisma.product.create({
    data: {
      product_name: 'Anti-Rust Paint Coating',
      type: ProductType.RAW_MATERIAL,
      unit_of_measure: UnitType.LTR,
      current_stock: 100,
      cost_per_unit: 45.00
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
      created_by: manufacturerManager.user_id,
      assigned_to: operator.user_id
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
      created_by: manufacturerManager.user_id,
      assigned_to: operator.user_id
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
      assigned_to: operator.user_id
    }
  });

  const mo4 = await prisma.manufacturingOrder.create({
    data: {
      product_id: steelBolt.product_id,
      quantity: 2000,
      status: ManufacturingOrderStatus.DRAFT,
      state: ComponentState.Not_Avaliable,
      scheduled_start: new Date('2024-01-25'),
      scheduled_end: new Date('2024-01-30'),
      created_by: manufacturerManager.user_id
    }
  });

  const mo5 = await prisma.manufacturingOrder.create({
    data: {
      product_id: aluminumPlate.product_id,
      quantity: 300,
      status: ManufacturingOrderStatus.TO_CLOSE,
      state: ComponentState.Avaliable,
      scheduled_start: new Date('2024-01-12'),
      scheduled_end: new Date('2024-01-17'),
      actual_start: new Date('2024-01-12'),
      created_by: adminUser.user_id,
      assigned_to: operator.user_id
    }
  });

  // Create BOM entries
  console.log('📋 Creating BOM entries...');
  await prisma.bOM.create({
    data: {
      product_id: steelBolt.product_id,
      component_id: steelRod.product_id,
      quantity_required: 0.1,
      operation_sequence: JSON.stringify([1, 2, 3])
    }
  });

  await prisma.bOM.create({
    data: {
      product_id: aluminumPlate.product_id,
      component_id: paintCoating.product_id,
      quantity_required: 0.05,
      operation_sequence: JSON.stringify([1, 2])
    }
  });

  // Create Work Orders
  console.log('🔧 Creating work orders...');
  await prisma.workOrder.create({
    data: {
      mo_id: mo1.mo_id,
      operation_name: 'Steel Cutting',
      work_center_id: assemblyLine.work_center_id,
      assigned_to: operator.user_id,
      status: 'STARTED',
      planned_time: 480, // 8 hours
      started_at: new Date('2024-01-15T08:00:00')
    }
  });

  await prisma.workOrder.create({
    data: {
      mo_id: mo2.mo_id,
      operation_name: 'Aluminum Machining',
      work_center_id: assemblyLine.work_center_id,
      assigned_to: operator.user_id,
      status: 'NOT_STARTED',
      planned_time: 360 // 6 hours
    }
  });

  await prisma.workOrder.create({
    data: {
      mo_id: mo3.mo_id,
      operation_name: 'Motor Assembly',
      work_center_id: assemblyLine.work_center_id,
      assigned_to: operator.user_id,
      status: 'COMPLETED',
      planned_time: 600, // 10 hours
      actual_time: 580,
      started_at: new Date('2024-01-10T08:00:00'),
      completed_at: new Date('2024-01-13T16:00:00')
    }
  });

  console.log('✅ Database seeding completed successfully!');
  console.log(`📊 Created:`);
  console.log(`   - 3 users (Admin, Manager, Operator)`);
  console.log(`   - 2 work centers`);
  console.log(`   - 5 products (3 finished goods, 2 raw materials)`);
  console.log(`   - 5 manufacturing orders`);
  console.log(`   - 2 BOM entries`);
  console.log(`   - 3 work orders`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
