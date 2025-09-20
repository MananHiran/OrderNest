import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanup() {
  console.log('🧹 Starting database cleanup...');
  console.log('⚠️  This will delete ALL data except users!');

  try {
    // Delete in order to respect foreign key constraints
    console.log('🗑️  Deleting audit logs...');
    await prisma.auditLog.deleteMany({});

    console.log('🗑️  Deleting reports...');
    await prisma.report.deleteMany({});

    console.log('🗑️  Deleting stock ledger entries...');
    await prisma.stockLedger.deleteMany({});

    console.log('🗑️  Deleting work orders...');
    await prisma.workOrder.deleteMany({});

    console.log('🗑️  Deleting manufacturing orders...');
    await prisma.manufacturingOrder.deleteMany({});

    console.log('🗑️  Deleting BOM entries...');
    await prisma.bOM.deleteMany({});

    console.log('🗑️  Deleting work centers...');
    await prisma.workCenter.deleteMany({});

    console.log('🗑️  Deleting ALL products (including empty ones)...');
    await prisma.product.deleteMany({});

    // Get count of remaining users
    const userCount = await prisma.user.count();
    
    console.log('✅ Database cleanup completed successfully!');
    console.log('📊 Remaining data:');
    console.log(`   - Users: ${userCount} (preserved)`);
    console.log('   - All other tables: 0 records');

  } catch (error) {
    console.error('❌ Error during cleanup:', error);
    throw error;
  }
}

async function main() {
  try {
    await cleanup();
  } catch (error) {
    console.error('❌ Cleanup failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the cleanup
main();
