-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_component_consumption" (
    "consumption_id" TEXT NOT NULL PRIMARY KEY,
    "mo_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "consumption_quantity" REAL NOT NULL,
    "flag" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "component_consumption_mo_id_fkey" FOREIGN KEY ("mo_id") REFERENCES "manufacturing_orders" ("mo_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "component_consumption_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_component_consumption" ("consumption_id", "consumption_quantity", "created_at", "mo_id", "product_id", "product_name", "updated_at") SELECT "consumption_id", "consumption_quantity", "created_at", "mo_id", "product_id", "product_name", "updated_at" FROM "component_consumption";
DROP TABLE "component_consumption";
ALTER TABLE "new_component_consumption" RENAME TO "component_consumption";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
