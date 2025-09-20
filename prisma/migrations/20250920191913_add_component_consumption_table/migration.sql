-- CreateTable
CREATE TABLE "component_consumption" (
    "consumption_id" TEXT NOT NULL PRIMARY KEY,
    "mo_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "consumption_quantity" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "component_consumption_mo_id_fkey" FOREIGN KEY ("mo_id") REFERENCES "manufacturing_orders" ("mo_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "component_consumption_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_work_orders" (
    "wo_id" TEXT NOT NULL PRIMARY KEY,
    "mo_id" TEXT NOT NULL,
    "operation_name" TEXT NOT NULL,
    "work_center_id" TEXT NOT NULL,
    "assigned_to" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NOT_STARTED',
    "comments" TEXT,
    "planned_time" INTEGER,
    "actual_time" INTEGER,
    "started_at" DATETIME,
    "completed_at" DATETIME,
    CONSTRAINT "work_orders_mo_id_fkey" FOREIGN KEY ("mo_id") REFERENCES "manufacturing_orders" ("mo_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "work_orders_work_center_id_fkey" FOREIGN KEY ("work_center_id") REFERENCES "work_centers" ("work_center_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "work_orders_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "users" ("user_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_work_orders" ("actual_time", "assigned_to", "comments", "completed_at", "mo_id", "operation_name", "planned_time", "started_at", "status", "wo_id", "work_center_id") SELECT "actual_time", "assigned_to", "comments", "completed_at", "mo_id", "operation_name", "planned_time", "started_at", "status", "wo_id", "work_center_id" FROM "work_orders";
DROP TABLE "work_orders";
ALTER TABLE "new_work_orders" RENAME TO "work_orders";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
