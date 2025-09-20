import { PrismaClient } from '../lib/generated/prisma';

const prisma = new PrismaClient();

async function deleteUser() {
  const usernameToDelete = 'diksha puitandi';
  
  console.log(`🔍 Searching for user: "${usernameToDelete}"`);
  
  try {
    // First, check if the user exists
    const user = await prisma.user.findFirst({
      where: {
        name: {
          contains: usernameToDelete
        }
      }
    });

    if (!user) {
      console.log(`❌ User "${usernameToDelete}" not found in database`);
      
      // Show all existing users for reference
      const allUsers = await prisma.user.findMany({
        select: {
          user_id: true,
          name: true,
          email: true,
          role: true
        }
      });
      
      console.log('📋 Current users in database:');
      allUsers.forEach((u, index) => {
        console.log(`   ${index + 1}. ${u.name} (${u.email}) - ${u.role}`);
      });
      
      return;
    }

    console.log(`✅ Found user: ${user.name} (${user.email}) - ${user.role}`);
    console.log(`🗑️  Deleting user with ID: ${user.user_id}`);

    // Delete the user
    await prisma.user.delete({
      where: {
        user_id: user.user_id
      }
    });

    console.log(`✅ Successfully deleted user: "${user.name}"`);
    
    // Show remaining users
    const remainingUsers = await prisma.user.findMany({
      select: {
        user_id: true,
        name: true,
        email: true,
        role: true
      }
    });
    
    console.log('📋 Remaining users:');
    remainingUsers.forEach((u, index) => {
      console.log(`   ${index + 1}. ${u.name} (${u.email}) - ${u.role}`);
    });

  } catch (error) {
    console.error('❌ Error deleting user:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

deleteUser();
