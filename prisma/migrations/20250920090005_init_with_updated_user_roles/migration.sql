-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "phone" TEXT,
    "profile_picture" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" TEXT NOT NULL PRIMARY KEY,
    "product_name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "unit_of_measure" TEXT NOT NULL,
    "current_stock" REAL NOT NULL DEFAULT 0,
    "cost_per_unit" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "bom" (
    "bom_id" TEXT NOT NULL PRIMARY KEY,
    "product_id" TEXT NOT NULL,
    "component_id" TEXT NOT NULL,
    "quantity_required" REAL NOT NULL,
    "operation_sequence" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "bom_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "bom_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "products" ("product_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "manufacturing_orders" (
    "mo_id" TEXT NOT NULL PRIMARY KEY DEFAULT 'mo_',
    "product_id" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "scheduled_start" DATETIME,
    "scheduled_end" DATETIME,
    "actual_start" DATETIME,
    "actual_end" DATETIME,
    "created_by" TEXT NOT NULL,
    "assigned_to" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "manufacturing_orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "manufacturing_orders_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "manufacturing_orders_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "users" ("user_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "work_orders" (
    "wo_id" TEXT NOT NULL PRIMARY KEY DEFAULT 'wo_',
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

-- CreateTable
CREATE TABLE "work_centers" (
    "work_center_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cost_per_hour" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "stock_ledger" (
    "ledger_id" TEXT NOT NULL PRIMARY KEY,
    "product_id" TEXT NOT NULL,
    "movement_type" TEXT NOT NULL,
    "quantity" REAL NOT NULL,
    "reference_type" TEXT NOT NULL,
    "reference_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    CONSTRAINT "stock_ledger_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("product_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "stock_ledger_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "stock_ledger_reference_id_fkey" FOREIGN KEY ("reference_id") REFERENCES "manufacturing_orders" ("mo_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "stock_ledger_reference_id_fkey" FOREIGN KEY ("reference_id") REFERENCES "work_orders" ("wo_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reports" (
    "report_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "report_type" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "generated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "log_id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "details" JSONB,
    CONSTRAINT "audit_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("user_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
