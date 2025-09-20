const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function debugProducts() {
  try {
    console.log('🔍 Debugging Products and BOM data...\n');

    // Check all products
    const products = await prisma.product.findMany({
      orderBy: { product_name: 'asc' }
    });

    console.log(`📦 Found ${products.length} products:`);
    products.forEach((product, index) => {
      console.log(`   ${index + 1}. ${product.product_name} (ID: ${product.product_id})`);
      console.log(`      Type: ${product.type}, Stock: ${product.current_stock}, Unit: ${product.unit_of_measure}`);
      console.log(`      BOM: ${product.bill_of_materials || 'None'}`);
      console.log('');
    });

    // Check finished goods specifically
    const finishedGoods = products.filter(p => p.type === 'FINISHED_GOOD');
    console.log(`🏭 Finished goods with BOM data:`);
    
    finishedGoods.forEach((product, index) => {
      console.log(`   ${index + 1}. ${product.product_name}`);
      if (product.bill_of_materials) {
        try {
          const bom = JSON.parse(product.bill_of_materials);
          console.log(`      BOM Components: ${JSON.stringify(bom, null, 6)}`);
        } catch (e) {
          console.log(`      BOM Parse Error: ${e.message}`);
        }
      } else {
        console.log(`      No BOM data`);
      }
      console.log('');
    });

    // Check raw materials
    const rawMaterials = products.filter(p => p.type === 'RAW_MATERIAL');
    console.log(`🔧 Raw materials available:`);
    rawMaterials.forEach((material, index) => {
      console.log(`   ${index + 1}. ${material.product_name} (ID: ${material.product_id})`);
      console.log(`      Stock: ${material.current_stock}, Unit: ${material.unit_of_measure}`);
    });

  } catch (error) {
    console.error('❌ Error debugging products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugProducts();