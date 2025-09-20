import { PrismaClient } from '../lib/generated/prisma';

const prisma = new PrismaClient();

async function verifyCleanup() {
  console.log('🔍 Verifying database cleanup...');
  
  try {
    // Count records in each table
    const counts = {
      users: await prisma.user.count(),
      products: await prisma.product.count(),
      manufacturingOrders: await prisma.manufacturingOrder.count(),
      workOrders: await prisma.workOrder.count(),
      workCenters: await prisma.workCenter.count(),
      bom: await prisma.bOM.count(),
      stockLedger: await prisma.stockLedger.count(),
      reports: await prisma.report.count(),
      auditLogs: await prisma.auditLog.count()
    };

    console.log('📊 Current database state:');
    console.log('─'.repeat(40));
    console.log(`👥 Users: ${counts.users}`);
    console.log(`📦 Products: ${counts.products}`);
    console.log(`🏭 Manufacturing Orders: ${counts.manufacturingOrders}`);
    console.log(`🔧 Work Orders: ${counts.workOrders}`);
    console.log(`🏭 Work Centers: ${counts.workCenters}`);
    console.log(`📋 BOM Entries: ${counts.bom}`);
    console.log(`📊 Stock Ledger: ${counts.stockLedger}`);
    console.log(`📈 Reports: ${counts.reports}`);
    console.log(`📝 Audit Logs: ${counts.auditLogs}`);
    console.log('─'.repeat(40));

    // Show user details
    if (counts.users > 0) {
      console.log('👥 Preserved users:');
      const users = await prisma.user.findMany({
        select: {
          user_id: true,
          name: true,
          email: true,
          role: true,
          created_at: true
        }
      });
      
      users.forEach((user, index) => {
        console.log(`   ${index + 1}. ${user.name} (${user.email}) - ${user.role}`);
      });
    }

    console.log('✅ Verification completed!');
    
  } catch (error) {
    console.error('❌ Error during verification:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

verifyCleanup();
