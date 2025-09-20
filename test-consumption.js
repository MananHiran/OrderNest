const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testComponentConsumption() {
  try {
    console.log('🔍 Testing Component Consumption functionality...\n');

    // Check component consumption records
    const consumptionRecords = await prisma.componentConsumption.findMany({
      orderBy: { created_at: 'desc' }
    });

    console.log(`📊 Found ${consumptionRecords.length} component consumption records:`);
    
    if (consumptionRecords.length > 0) {
      consumptionRecords.forEach((record, index) => {
        console.log(`   ${index + 1}. MO ID: ${record.mo_id}, Product: ${record.product_name}`);
        console.log(`      Consumption Qty: ${record.consumption_quantity}, Flag: ${record.flag ? 'Available' : 'Restock'}`);
        console.log(`      Created: ${record.created_at}`);
        console.log('');
      });

      // Summary statistics
      const availableCount = consumptionRecords.filter(r => r.flag === true).length;
      const restockCount = consumptionRecords.filter(r => r.flag === false).length;
      
      console.log(`📈 Summary:`);
      console.log(`   - Available components: ${availableCount}`);
      console.log(`   - Components needing restock: ${restockCount}`);
    } else {
      console.log('ℹ️  No component consumption records found yet.');
      console.log('   Create a manufacturing order through the UI to test the functionality.\n');
      
      // Show manufacturing orders for context
      const manufacturingOrders = await prisma.manufacturingOrder.findMany({
        include: {
          product: {
            select: {
              product_name: true
            }
          }
        },
        orderBy: { created_at: 'desc' }
      });
      
      console.log(`📋 Found ${manufacturingOrders.length} manufacturing orders in the database:`);
      manufacturingOrders.forEach((order, index) => {
        console.log(`   ${index + 1}. ${order.product.product_name} - Quantity: ${order.quantity}`);
      });
    }

  } catch (error) {
    console.error('❌ Error testing component consumption:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testComponentConsumption();