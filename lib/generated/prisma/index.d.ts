
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model BOM
 * 
 */
export type BOM = $Result.DefaultSelection<Prisma.$BOMPayload>
/**
 * Model ManufacturingOrder
 * 
 */
export type ManufacturingOrder = $Result.DefaultSelection<Prisma.$ManufacturingOrderPayload>
/**
 * Model WorkOrder
 * 
 */
export type WorkOrder = $Result.DefaultSelection<Prisma.$WorkOrderPayload>
/**
 * Model WorkCenter
 * 
 */
export type WorkCenter = $Result.DefaultSelection<Prisma.$WorkCenterPayload>
/**
 * Model StockLedger
 * 
 */
export type StockLedger = $Result.DefaultSelection<Prisma.$StockLedgerPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  INVENTORY_MANAGER: 'INVENTORY_MANAGER',
  OPERATOR_MANAGER: 'OPERATOR_MANAGER',
  MANUFACTURER_MANAGER: 'MANUFACTURER_MANAGER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ProductType: {
  RAW_MATERIAL: 'RAW_MATERIAL',
  FINISHED_GOOD: 'FINISHED_GOOD',
  SEMI_FINISHED: 'SEMI_FINISHED'
};

export type ProductType = (typeof ProductType)[keyof typeof ProductType]


export const ManufacturingOrderStatus: {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  TO_CLOSE: 'TO_CLOSE',
  DONE: 'DONE'
};

export type ManufacturingOrderStatus = (typeof ManufacturingOrderStatus)[keyof typeof ManufacturingOrderStatus]


export const WorkOrderStatus: {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED'
};

export type WorkOrderStatus = (typeof WorkOrderStatus)[keyof typeof WorkOrderStatus]


export const MovementType: {
  IN: 'IN',
  OUT: 'OUT'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const ReferenceType: {
  MO: 'MO',
  WO: 'WO',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT'
};

export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType]


export const ReportType: {
  USER_ACTIVITY: 'USER_ACTIVITY',
  PRODUCTION_SUMMARY: 'PRODUCTION_SUMMARY',
  INVENTORY_SUMMARY: 'INVENTORY_SUMMARY'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]


export const UnitType: {
  PCS: 'PCS',
  KG: 'KG',
  LTR: 'LTR',
  MT: 'MT'
};

export type UnitType = (typeof UnitType)[keyof typeof UnitType]


export const ComponentState: {
  Avaliable: 'Avaliable',
  Not_Avaliable: 'Not_Avaliable'
};

export type ComponentState = (typeof ComponentState)[keyof typeof ComponentState]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ProductType = $Enums.ProductType

export const ProductType: typeof $Enums.ProductType

export type ManufacturingOrderStatus = $Enums.ManufacturingOrderStatus

export const ManufacturingOrderStatus: typeof $Enums.ManufacturingOrderStatus

export type WorkOrderStatus = $Enums.WorkOrderStatus

export const WorkOrderStatus: typeof $Enums.WorkOrderStatus

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type ReferenceType = $Enums.ReferenceType

export const ReferenceType: typeof $Enums.ReferenceType

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

export type UnitType = $Enums.UnitType

export const UnitType: typeof $Enums.UnitType

export type ComponentState = $Enums.ComponentState

export const ComponentState: typeof $Enums.ComponentState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bOM`: Exposes CRUD operations for the **BOM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BOMS
    * const bOMS = await prisma.bOM.findMany()
    * ```
    */
  get bOM(): Prisma.BOMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manufacturingOrder`: Exposes CRUD operations for the **ManufacturingOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManufacturingOrders
    * const manufacturingOrders = await prisma.manufacturingOrder.findMany()
    * ```
    */
  get manufacturingOrder(): Prisma.ManufacturingOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workOrder`: Exposes CRUD operations for the **WorkOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOrders
    * const workOrders = await prisma.workOrder.findMany()
    * ```
    */
  get workOrder(): Prisma.WorkOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workCenter`: Exposes CRUD operations for the **WorkCenter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkCenters
    * const workCenters = await prisma.workCenter.findMany()
    * ```
    */
  get workCenter(): Prisma.WorkCenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockLedger`: Exposes CRUD operations for the **StockLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockLedgers
    * const stockLedgers = await prisma.stockLedger.findMany()
    * ```
    */
  get stockLedger(): Prisma.StockLedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    BOM: 'BOM',
    ManufacturingOrder: 'ManufacturingOrder',
    WorkOrder: 'WorkOrder',
    WorkCenter: 'WorkCenter',
    StockLedger: 'StockLedger',
    Report: 'Report',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "bOM" | "manufacturingOrder" | "workOrder" | "workCenter" | "stockLedger" | "report" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      BOM: {
        payload: Prisma.$BOMPayload<ExtArgs>
        fields: Prisma.BOMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BOMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BOMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>
          }
          findFirst: {
            args: Prisma.BOMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BOMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>
          }
          findMany: {
            args: Prisma.BOMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>[]
          }
          create: {
            args: Prisma.BOMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>
          }
          createMany: {
            args: Prisma.BOMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BOMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>[]
          }
          delete: {
            args: Prisma.BOMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>
          }
          update: {
            args: Prisma.BOMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>
          }
          deleteMany: {
            args: Prisma.BOMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BOMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BOMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>[]
          }
          upsert: {
            args: Prisma.BOMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMPayload>
          }
          aggregate: {
            args: Prisma.BOMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBOM>
          }
          groupBy: {
            args: Prisma.BOMGroupByArgs<ExtArgs>
            result: $Utils.Optional<BOMGroupByOutputType>[]
          }
          count: {
            args: Prisma.BOMCountArgs<ExtArgs>
            result: $Utils.Optional<BOMCountAggregateOutputType> | number
          }
        }
      }
      ManufacturingOrder: {
        payload: Prisma.$ManufacturingOrderPayload<ExtArgs>
        fields: Prisma.ManufacturingOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturingOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturingOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>
          }
          findFirst: {
            args: Prisma.ManufacturingOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturingOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>
          }
          findMany: {
            args: Prisma.ManufacturingOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>[]
          }
          create: {
            args: Prisma.ManufacturingOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>
          }
          createMany: {
            args: Prisma.ManufacturingOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManufacturingOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>[]
          }
          delete: {
            args: Prisma.ManufacturingOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>
          }
          update: {
            args: Prisma.ManufacturingOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturingOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturingOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManufacturingOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>[]
          }
          upsert: {
            args: Prisma.ManufacturingOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturingOrderPayload>
          }
          aggregate: {
            args: Prisma.ManufacturingOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacturingOrder>
          }
          groupBy: {
            args: Prisma.ManufacturingOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacturingOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturingOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacturingOrderCountAggregateOutputType> | number
          }
        }
      }
      WorkOrder: {
        payload: Prisma.$WorkOrderPayload<ExtArgs>
        fields: Prisma.WorkOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findFirst: {
            args: Prisma.WorkOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findMany: {
            args: Prisma.WorkOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          create: {
            args: Prisma.WorkOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          createMany: {
            args: Prisma.WorkOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          delete: {
            args: Prisma.WorkOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          update: {
            args: Prisma.WorkOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          deleteMany: {
            args: Prisma.WorkOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          upsert: {
            args: Prisma.WorkOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          aggregate: {
            args: Prisma.WorkOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkOrder>
          }
          groupBy: {
            args: Prisma.WorkOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkOrderCountArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderCountAggregateOutputType> | number
          }
        }
      }
      WorkCenter: {
        payload: Prisma.$WorkCenterPayload<ExtArgs>
        fields: Prisma.WorkCenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkCenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkCenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>
          }
          findFirst: {
            args: Prisma.WorkCenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkCenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>
          }
          findMany: {
            args: Prisma.WorkCenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>[]
          }
          create: {
            args: Prisma.WorkCenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>
          }
          createMany: {
            args: Prisma.WorkCenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>[]
          }
          delete: {
            args: Prisma.WorkCenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>
          }
          update: {
            args: Prisma.WorkCenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>
          }
          deleteMany: {
            args: Prisma.WorkCenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkCenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkCenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>[]
          }
          upsert: {
            args: Prisma.WorkCenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkCenterPayload>
          }
          aggregate: {
            args: Prisma.WorkCenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkCenter>
          }
          groupBy: {
            args: Prisma.WorkCenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkCenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCenterCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCenterCountAggregateOutputType> | number
          }
        }
      }
      StockLedger: {
        payload: Prisma.$StockLedgerPayload<ExtArgs>
        fields: Prisma.StockLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>
          }
          findFirst: {
            args: Prisma.StockLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>
          }
          findMany: {
            args: Prisma.StockLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>[]
          }
          create: {
            args: Prisma.StockLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>
          }
          createMany: {
            args: Prisma.StockLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>[]
          }
          delete: {
            args: Prisma.StockLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>
          }
          update: {
            args: Prisma.StockLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>
          }
          deleteMany: {
            args: Prisma.StockLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockLedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>[]
          }
          upsert: {
            args: Prisma.StockLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockLedgerPayload>
          }
          aggregate: {
            args: Prisma.StockLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockLedger>
          }
          groupBy: {
            args: Prisma.StockLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<StockLedgerCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    bOM?: BOMOmit
    manufacturingOrder?: ManufacturingOrderOmit
    workOrder?: WorkOrderOmit
    workCenter?: WorkCenterOmit
    stockLedger?: StockLedgerOmit
    report?: ReportOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    created_mos: number
    assigned_mos: number
    assigned_wos: number
    stock_ledgers: number
    reports: number
    audit_logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_mos?: boolean | UserCountOutputTypeCountCreated_mosArgs
    assigned_mos?: boolean | UserCountOutputTypeCountAssigned_mosArgs
    assigned_wos?: boolean | UserCountOutputTypeCountAssigned_wosArgs
    stock_ledgers?: boolean | UserCountOutputTypeCountStock_ledgersArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
    audit_logs?: boolean | UserCountOutputTypeCountAudit_logsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_mosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturingOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssigned_mosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturingOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssigned_wosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLedgerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    boms_as_product: number
    boms_as_component: number
    manufacturing_orders: number
    stock_ledgers: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boms_as_product?: boolean | ProductCountOutputTypeCountBoms_as_productArgs
    boms_as_component?: boolean | ProductCountOutputTypeCountBoms_as_componentArgs
    manufacturing_orders?: boolean | ProductCountOutputTypeCountManufacturing_ordersArgs
    stock_ledgers?: boolean | ProductCountOutputTypeCountStock_ledgersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBoms_as_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BOMWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountBoms_as_componentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BOMWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountManufacturing_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturingOrderWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLedgerWhereInput
  }


  /**
   * Count Type ManufacturingOrderCountOutputType
   */

  export type ManufacturingOrderCountOutputType = {
    work_orders: number
    stock_ledgers: number
  }

  export type ManufacturingOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_orders?: boolean | ManufacturingOrderCountOutputTypeCountWork_ordersArgs
    stock_ledgers?: boolean | ManufacturingOrderCountOutputTypeCountStock_ledgersArgs
  }

  // Custom InputTypes
  /**
   * ManufacturingOrderCountOutputType without action
   */
  export type ManufacturingOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrderCountOutputType
     */
    select?: ManufacturingOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManufacturingOrderCountOutputType without action
   */
  export type ManufacturingOrderCountOutputTypeCountWork_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
  }

  /**
   * ManufacturingOrderCountOutputType without action
   */
  export type ManufacturingOrderCountOutputTypeCountStock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLedgerWhereInput
  }


  /**
   * Count Type WorkOrderCountOutputType
   */

  export type WorkOrderCountOutputType = {
    stock_ledgers: number
  }

  export type WorkOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_ledgers?: boolean | WorkOrderCountOutputTypeCountStock_ledgersArgs
  }

  // Custom InputTypes
  /**
   * WorkOrderCountOutputType without action
   */
  export type WorkOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrderCountOutputType
     */
    select?: WorkOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkOrderCountOutputType without action
   */
  export type WorkOrderCountOutputTypeCountStock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLedgerWhereInput
  }


  /**
   * Count Type WorkCenterCountOutputType
   */

  export type WorkCenterCountOutputType = {
    work_orders: number
  }

  export type WorkCenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_orders?: boolean | WorkCenterCountOutputTypeCountWork_ordersArgs
  }

  // Custom InputTypes
  /**
   * WorkCenterCountOutputType without action
   */
  export type WorkCenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenterCountOutputType
     */
    select?: WorkCenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkCenterCountOutputType without action
   */
  export type WorkCenterCountOutputTypeCountWork_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.UserRole | null
    phone: string | null
    profile_picture: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.UserRole | null
    phone: string | null
    profile_picture: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password_hash: number
    role: number
    phone: number
    profile_picture: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    phone?: true
    profile_picture?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    phone?: true
    profile_picture?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    phone?: true
    profile_picture?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    name: string
    email: string
    password_hash: string
    role: $Enums.UserRole
    phone: string | null
    profile_picture: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    phone?: boolean
    profile_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_mos?: boolean | User$created_mosArgs<ExtArgs>
    assigned_mos?: boolean | User$assigned_mosArgs<ExtArgs>
    assigned_wos?: boolean | User$assigned_wosArgs<ExtArgs>
    stock_ledgers?: boolean | User$stock_ledgersArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    audit_logs?: boolean | User$audit_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    phone?: boolean
    profile_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    phone?: boolean
    profile_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    phone?: boolean
    profile_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password_hash" | "role" | "phone" | "profile_picture" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_mos?: boolean | User$created_mosArgs<ExtArgs>
    assigned_mos?: boolean | User$assigned_mosArgs<ExtArgs>
    assigned_wos?: boolean | User$assigned_wosArgs<ExtArgs>
    stock_ledgers?: boolean | User$stock_ledgersArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    audit_logs?: boolean | User$audit_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      created_mos: Prisma.$ManufacturingOrderPayload<ExtArgs>[]
      assigned_mos: Prisma.$ManufacturingOrderPayload<ExtArgs>[]
      assigned_wos: Prisma.$WorkOrderPayload<ExtArgs>[]
      stock_ledgers: Prisma.$StockLedgerPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      audit_logs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      email: string
      password_hash: string
      role: $Enums.UserRole
      phone: string | null
      profile_picture: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_mos<T extends User$created_mosArgs<ExtArgs> = {}>(args?: Subset<T, User$created_mosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_mos<T extends User$assigned_mosArgs<ExtArgs> = {}>(args?: Subset<T, User$assigned_mosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_wos<T extends User$assigned_wosArgs<ExtArgs> = {}>(args?: Subset<T, User$assigned_wosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock_ledgers<T extends User$stock_ledgersArgs<ExtArgs> = {}>(args?: Subset<T, User$stock_ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_logs<T extends User$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly phone: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.created_mos
   */
  export type User$created_mosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    where?: ManufacturingOrderWhereInput
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    cursor?: ManufacturingOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManufacturingOrderScalarFieldEnum | ManufacturingOrderScalarFieldEnum[]
  }

  /**
   * User.assigned_mos
   */
  export type User$assigned_mosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    where?: ManufacturingOrderWhereInput
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    cursor?: ManufacturingOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManufacturingOrderScalarFieldEnum | ManufacturingOrderScalarFieldEnum[]
  }

  /**
   * User.assigned_wos
   */
  export type User$assigned_wosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    cursor?: WorkOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * User.stock_ledgers
   */
  export type User$stock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    where?: StockLedgerWhereInput
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    cursor?: StockLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.audit_logs
   */
  export type User$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    current_stock: number | null
    cost_per_unit: number | null
  }

  export type ProductSumAggregateOutputType = {
    current_stock: number | null
    cost_per_unit: number | null
  }

  export type ProductMinAggregateOutputType = {
    product_id: string | null
    product_name: string | null
    type: $Enums.ProductType | null
    unit_of_measure: $Enums.UnitType | null
    current_stock: number | null
    cost_per_unit: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    product_id: string | null
    product_name: string | null
    type: $Enums.ProductType | null
    unit_of_measure: $Enums.UnitType | null
    current_stock: number | null
    cost_per_unit: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    product_id: number
    product_name: number
    type: number
    unit_of_measure: number
    current_stock: number
    cost_per_unit: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    current_stock?: true
    cost_per_unit?: true
  }

  export type ProductSumAggregateInputType = {
    current_stock?: true
    cost_per_unit?: true
  }

  export type ProductMinAggregateInputType = {
    product_id?: true
    product_name?: true
    type?: true
    unit_of_measure?: true
    current_stock?: true
    cost_per_unit?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    product_id?: true
    product_name?: true
    type?: true
    unit_of_measure?: true
    current_stock?: true
    cost_per_unit?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    product_id?: true
    product_name?: true
    type?: true
    unit_of_measure?: true
    current_stock?: true
    cost_per_unit?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    product_id: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock: number
    cost_per_unit: number
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    type?: boolean
    unit_of_measure?: boolean
    current_stock?: boolean
    cost_per_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
    boms_as_product?: boolean | Product$boms_as_productArgs<ExtArgs>
    boms_as_component?: boolean | Product$boms_as_componentArgs<ExtArgs>
    manufacturing_orders?: boolean | Product$manufacturing_ordersArgs<ExtArgs>
    stock_ledgers?: boolean | Product$stock_ledgersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    type?: boolean
    unit_of_measure?: boolean
    current_stock?: boolean
    cost_per_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    type?: boolean
    unit_of_measure?: boolean
    current_stock?: boolean
    cost_per_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    product_id?: boolean
    product_name?: boolean
    type?: boolean
    unit_of_measure?: boolean
    current_stock?: boolean
    cost_per_unit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_name" | "type" | "unit_of_measure" | "current_stock" | "cost_per_unit" | "created_at" | "updated_at", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boms_as_product?: boolean | Product$boms_as_productArgs<ExtArgs>
    boms_as_component?: boolean | Product$boms_as_componentArgs<ExtArgs>
    manufacturing_orders?: boolean | Product$manufacturing_ordersArgs<ExtArgs>
    stock_ledgers?: boolean | Product$stock_ledgersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      boms_as_product: Prisma.$BOMPayload<ExtArgs>[]
      boms_as_component: Prisma.$BOMPayload<ExtArgs>[]
      manufacturing_orders: Prisma.$ManufacturingOrderPayload<ExtArgs>[]
      stock_ledgers: Prisma.$StockLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: string
      product_name: string
      type: $Enums.ProductType
      unit_of_measure: $Enums.UnitType
      current_stock: number
      cost_per_unit: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boms_as_product<T extends Product$boms_as_productArgs<ExtArgs> = {}>(args?: Subset<T, Product$boms_as_productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boms_as_component<T extends Product$boms_as_componentArgs<ExtArgs> = {}>(args?: Subset<T, Product$boms_as_componentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manufacturing_orders<T extends Product$manufacturing_ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$manufacturing_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock_ledgers<T extends Product$stock_ledgersArgs<ExtArgs> = {}>(args?: Subset<T, Product$stock_ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly product_id: FieldRef<"Product", 'String'>
    readonly product_name: FieldRef<"Product", 'String'>
    readonly type: FieldRef<"Product", 'ProductType'>
    readonly unit_of_measure: FieldRef<"Product", 'UnitType'>
    readonly current_stock: FieldRef<"Product", 'Float'>
    readonly cost_per_unit: FieldRef<"Product", 'Float'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.boms_as_product
   */
  export type Product$boms_as_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    where?: BOMWhereInput
    orderBy?: BOMOrderByWithRelationInput | BOMOrderByWithRelationInput[]
    cursor?: BOMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BOMScalarFieldEnum | BOMScalarFieldEnum[]
  }

  /**
   * Product.boms_as_component
   */
  export type Product$boms_as_componentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    where?: BOMWhereInput
    orderBy?: BOMOrderByWithRelationInput | BOMOrderByWithRelationInput[]
    cursor?: BOMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BOMScalarFieldEnum | BOMScalarFieldEnum[]
  }

  /**
   * Product.manufacturing_orders
   */
  export type Product$manufacturing_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    where?: ManufacturingOrderWhereInput
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    cursor?: ManufacturingOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManufacturingOrderScalarFieldEnum | ManufacturingOrderScalarFieldEnum[]
  }

  /**
   * Product.stock_ledgers
   */
  export type Product$stock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    where?: StockLedgerWhereInput
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    cursor?: StockLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model BOM
   */

  export type AggregateBOM = {
    _count: BOMCountAggregateOutputType | null
    _avg: BOMAvgAggregateOutputType | null
    _sum: BOMSumAggregateOutputType | null
    _min: BOMMinAggregateOutputType | null
    _max: BOMMaxAggregateOutputType | null
  }

  export type BOMAvgAggregateOutputType = {
    quantity_required: number | null
  }

  export type BOMSumAggregateOutputType = {
    quantity_required: number | null
  }

  export type BOMMinAggregateOutputType = {
    bom_id: string | null
    product_id: string | null
    component_id: string | null
    quantity_required: number | null
    operation_sequence: string | null
    created_at: Date | null
  }

  export type BOMMaxAggregateOutputType = {
    bom_id: string | null
    product_id: string | null
    component_id: string | null
    quantity_required: number | null
    operation_sequence: string | null
    created_at: Date | null
  }

  export type BOMCountAggregateOutputType = {
    bom_id: number
    product_id: number
    component_id: number
    quantity_required: number
    operation_sequence: number
    created_at: number
    _all: number
  }


  export type BOMAvgAggregateInputType = {
    quantity_required?: true
  }

  export type BOMSumAggregateInputType = {
    quantity_required?: true
  }

  export type BOMMinAggregateInputType = {
    bom_id?: true
    product_id?: true
    component_id?: true
    quantity_required?: true
    operation_sequence?: true
    created_at?: true
  }

  export type BOMMaxAggregateInputType = {
    bom_id?: true
    product_id?: true
    component_id?: true
    quantity_required?: true
    operation_sequence?: true
    created_at?: true
  }

  export type BOMCountAggregateInputType = {
    bom_id?: true
    product_id?: true
    component_id?: true
    quantity_required?: true
    operation_sequence?: true
    created_at?: true
    _all?: true
  }

  export type BOMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BOM to aggregate.
     */
    where?: BOMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMS to fetch.
     */
    orderBy?: BOMOrderByWithRelationInput | BOMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BOMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BOMS
    **/
    _count?: true | BOMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BOMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BOMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BOMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BOMMaxAggregateInputType
  }

  export type GetBOMAggregateType<T extends BOMAggregateArgs> = {
        [P in keyof T & keyof AggregateBOM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBOM[P]>
      : GetScalarType<T[P], AggregateBOM[P]>
  }




  export type BOMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BOMWhereInput
    orderBy?: BOMOrderByWithAggregationInput | BOMOrderByWithAggregationInput[]
    by: BOMScalarFieldEnum[] | BOMScalarFieldEnum
    having?: BOMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BOMCountAggregateInputType | true
    _avg?: BOMAvgAggregateInputType
    _sum?: BOMSumAggregateInputType
    _min?: BOMMinAggregateInputType
    _max?: BOMMaxAggregateInputType
  }

  export type BOMGroupByOutputType = {
    bom_id: string
    product_id: string
    component_id: string
    quantity_required: number
    operation_sequence: string
    created_at: Date
    _count: BOMCountAggregateOutputType | null
    _avg: BOMAvgAggregateOutputType | null
    _sum: BOMSumAggregateOutputType | null
    _min: BOMMinAggregateOutputType | null
    _max: BOMMaxAggregateOutputType | null
  }

  type GetBOMGroupByPayload<T extends BOMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BOMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BOMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BOMGroupByOutputType[P]>
            : GetScalarType<T[P], BOMGroupByOutputType[P]>
        }
      >
    >


  export type BOMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bom_id?: boolean
    product_id?: boolean
    component_id?: boolean
    quantity_required?: boolean
    operation_sequence?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    component?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bOM"]>

  export type BOMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bom_id?: boolean
    product_id?: boolean
    component_id?: boolean
    quantity_required?: boolean
    operation_sequence?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    component?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bOM"]>

  export type BOMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bom_id?: boolean
    product_id?: boolean
    component_id?: boolean
    quantity_required?: boolean
    operation_sequence?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    component?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bOM"]>

  export type BOMSelectScalar = {
    bom_id?: boolean
    product_id?: boolean
    component_id?: boolean
    quantity_required?: boolean
    operation_sequence?: boolean
    created_at?: boolean
  }

  export type BOMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bom_id" | "product_id" | "component_id" | "quantity_required" | "operation_sequence" | "created_at", ExtArgs["result"]["bOM"]>
  export type BOMInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    component?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BOMIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    component?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type BOMIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    component?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $BOMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BOM"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      component: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bom_id: string
      product_id: string
      component_id: string
      quantity_required: number
      operation_sequence: string
      created_at: Date
    }, ExtArgs["result"]["bOM"]>
    composites: {}
  }

  type BOMGetPayload<S extends boolean | null | undefined | BOMDefaultArgs> = $Result.GetResult<Prisma.$BOMPayload, S>

  type BOMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BOMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BOMCountAggregateInputType | true
    }

  export interface BOMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BOM'], meta: { name: 'BOM' } }
    /**
     * Find zero or one BOM that matches the filter.
     * @param {BOMFindUniqueArgs} args - Arguments to find a BOM
     * @example
     * // Get one BOM
     * const bOM = await prisma.bOM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BOMFindUniqueArgs>(args: SelectSubset<T, BOMFindUniqueArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BOM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BOMFindUniqueOrThrowArgs} args - Arguments to find a BOM
     * @example
     * // Get one BOM
     * const bOM = await prisma.bOM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BOMFindUniqueOrThrowArgs>(args: SelectSubset<T, BOMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BOM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMFindFirstArgs} args - Arguments to find a BOM
     * @example
     * // Get one BOM
     * const bOM = await prisma.bOM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BOMFindFirstArgs>(args?: SelectSubset<T, BOMFindFirstArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BOM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMFindFirstOrThrowArgs} args - Arguments to find a BOM
     * @example
     * // Get one BOM
     * const bOM = await prisma.bOM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BOMFindFirstOrThrowArgs>(args?: SelectSubset<T, BOMFindFirstOrThrowArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BOMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BOMS
     * const bOMS = await prisma.bOM.findMany()
     * 
     * // Get first 10 BOMS
     * const bOMS = await prisma.bOM.findMany({ take: 10 })
     * 
     * // Only select the `bom_id`
     * const bOMWithBom_idOnly = await prisma.bOM.findMany({ select: { bom_id: true } })
     * 
     */
    findMany<T extends BOMFindManyArgs>(args?: SelectSubset<T, BOMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BOM.
     * @param {BOMCreateArgs} args - Arguments to create a BOM.
     * @example
     * // Create one BOM
     * const BOM = await prisma.bOM.create({
     *   data: {
     *     // ... data to create a BOM
     *   }
     * })
     * 
     */
    create<T extends BOMCreateArgs>(args: SelectSubset<T, BOMCreateArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BOMS.
     * @param {BOMCreateManyArgs} args - Arguments to create many BOMS.
     * @example
     * // Create many BOMS
     * const bOM = await prisma.bOM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BOMCreateManyArgs>(args?: SelectSubset<T, BOMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BOMS and returns the data saved in the database.
     * @param {BOMCreateManyAndReturnArgs} args - Arguments to create many BOMS.
     * @example
     * // Create many BOMS
     * const bOM = await prisma.bOM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BOMS and only return the `bom_id`
     * const bOMWithBom_idOnly = await prisma.bOM.createManyAndReturn({
     *   select: { bom_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BOMCreateManyAndReturnArgs>(args?: SelectSubset<T, BOMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BOM.
     * @param {BOMDeleteArgs} args - Arguments to delete one BOM.
     * @example
     * // Delete one BOM
     * const BOM = await prisma.bOM.delete({
     *   where: {
     *     // ... filter to delete one BOM
     *   }
     * })
     * 
     */
    delete<T extends BOMDeleteArgs>(args: SelectSubset<T, BOMDeleteArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BOM.
     * @param {BOMUpdateArgs} args - Arguments to update one BOM.
     * @example
     * // Update one BOM
     * const bOM = await prisma.bOM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BOMUpdateArgs>(args: SelectSubset<T, BOMUpdateArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BOMS.
     * @param {BOMDeleteManyArgs} args - Arguments to filter BOMS to delete.
     * @example
     * // Delete a few BOMS
     * const { count } = await prisma.bOM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BOMDeleteManyArgs>(args?: SelectSubset<T, BOMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BOMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BOMS
     * const bOM = await prisma.bOM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BOMUpdateManyArgs>(args: SelectSubset<T, BOMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BOMS and returns the data updated in the database.
     * @param {BOMUpdateManyAndReturnArgs} args - Arguments to update many BOMS.
     * @example
     * // Update many BOMS
     * const bOM = await prisma.bOM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BOMS and only return the `bom_id`
     * const bOMWithBom_idOnly = await prisma.bOM.updateManyAndReturn({
     *   select: { bom_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BOMUpdateManyAndReturnArgs>(args: SelectSubset<T, BOMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BOM.
     * @param {BOMUpsertArgs} args - Arguments to update or create a BOM.
     * @example
     * // Update or create a BOM
     * const bOM = await prisma.bOM.upsert({
     *   create: {
     *     // ... data to create a BOM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BOM we want to update
     *   }
     * })
     */
    upsert<T extends BOMUpsertArgs>(args: SelectSubset<T, BOMUpsertArgs<ExtArgs>>): Prisma__BOMClient<$Result.GetResult<Prisma.$BOMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BOMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMCountArgs} args - Arguments to filter BOMS to count.
     * @example
     * // Count the number of BOMS
     * const count = await prisma.bOM.count({
     *   where: {
     *     // ... the filter for the BOMS we want to count
     *   }
     * })
    **/
    count<T extends BOMCountArgs>(
      args?: Subset<T, BOMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BOMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BOM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BOMAggregateArgs>(args: Subset<T, BOMAggregateArgs>): Prisma.PrismaPromise<GetBOMAggregateType<T>>

    /**
     * Group by BOM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BOMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BOMGroupByArgs['orderBy'] }
        : { orderBy?: BOMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BOMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBOMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BOM model
   */
  readonly fields: BOMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BOM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BOMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    component<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BOM model
   */
  interface BOMFieldRefs {
    readonly bom_id: FieldRef<"BOM", 'String'>
    readonly product_id: FieldRef<"BOM", 'String'>
    readonly component_id: FieldRef<"BOM", 'String'>
    readonly quantity_required: FieldRef<"BOM", 'Float'>
    readonly operation_sequence: FieldRef<"BOM", 'String'>
    readonly created_at: FieldRef<"BOM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BOM findUnique
   */
  export type BOMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * Filter, which BOM to fetch.
     */
    where: BOMWhereUniqueInput
  }

  /**
   * BOM findUniqueOrThrow
   */
  export type BOMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * Filter, which BOM to fetch.
     */
    where: BOMWhereUniqueInput
  }

  /**
   * BOM findFirst
   */
  export type BOMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * Filter, which BOM to fetch.
     */
    where?: BOMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMS to fetch.
     */
    orderBy?: BOMOrderByWithRelationInput | BOMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BOMS.
     */
    cursor?: BOMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BOMS.
     */
    distinct?: BOMScalarFieldEnum | BOMScalarFieldEnum[]
  }

  /**
   * BOM findFirstOrThrow
   */
  export type BOMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * Filter, which BOM to fetch.
     */
    where?: BOMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMS to fetch.
     */
    orderBy?: BOMOrderByWithRelationInput | BOMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BOMS.
     */
    cursor?: BOMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BOMS.
     */
    distinct?: BOMScalarFieldEnum | BOMScalarFieldEnum[]
  }

  /**
   * BOM findMany
   */
  export type BOMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * Filter, which BOMS to fetch.
     */
    where?: BOMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMS to fetch.
     */
    orderBy?: BOMOrderByWithRelationInput | BOMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BOMS.
     */
    cursor?: BOMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMS.
     */
    skip?: number
    distinct?: BOMScalarFieldEnum | BOMScalarFieldEnum[]
  }

  /**
   * BOM create
   */
  export type BOMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * The data needed to create a BOM.
     */
    data: XOR<BOMCreateInput, BOMUncheckedCreateInput>
  }

  /**
   * BOM createMany
   */
  export type BOMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BOMS.
     */
    data: BOMCreateManyInput | BOMCreateManyInput[]
  }

  /**
   * BOM createManyAndReturn
   */
  export type BOMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * The data used to create many BOMS.
     */
    data: BOMCreateManyInput | BOMCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BOM update
   */
  export type BOMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * The data needed to update a BOM.
     */
    data: XOR<BOMUpdateInput, BOMUncheckedUpdateInput>
    /**
     * Choose, which BOM to update.
     */
    where: BOMWhereUniqueInput
  }

  /**
   * BOM updateMany
   */
  export type BOMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BOMS.
     */
    data: XOR<BOMUpdateManyMutationInput, BOMUncheckedUpdateManyInput>
    /**
     * Filter which BOMS to update
     */
    where?: BOMWhereInput
    /**
     * Limit how many BOMS to update.
     */
    limit?: number
  }

  /**
   * BOM updateManyAndReturn
   */
  export type BOMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * The data used to update BOMS.
     */
    data: XOR<BOMUpdateManyMutationInput, BOMUncheckedUpdateManyInput>
    /**
     * Filter which BOMS to update
     */
    where?: BOMWhereInput
    /**
     * Limit how many BOMS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BOM upsert
   */
  export type BOMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * The filter to search for the BOM to update in case it exists.
     */
    where: BOMWhereUniqueInput
    /**
     * In case the BOM found by the `where` argument doesn't exist, create a new BOM with this data.
     */
    create: XOR<BOMCreateInput, BOMUncheckedCreateInput>
    /**
     * In case the BOM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BOMUpdateInput, BOMUncheckedUpdateInput>
  }

  /**
   * BOM delete
   */
  export type BOMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
    /**
     * Filter which BOM to delete.
     */
    where: BOMWhereUniqueInput
  }

  /**
   * BOM deleteMany
   */
  export type BOMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BOMS to delete
     */
    where?: BOMWhereInput
    /**
     * Limit how many BOMS to delete.
     */
    limit?: number
  }

  /**
   * BOM without action
   */
  export type BOMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOM
     */
    select?: BOMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOM
     */
    omit?: BOMOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMInclude<ExtArgs> | null
  }


  /**
   * Model ManufacturingOrder
   */

  export type AggregateManufacturingOrder = {
    _count: ManufacturingOrderCountAggregateOutputType | null
    _avg: ManufacturingOrderAvgAggregateOutputType | null
    _sum: ManufacturingOrderSumAggregateOutputType | null
    _min: ManufacturingOrderMinAggregateOutputType | null
    _max: ManufacturingOrderMaxAggregateOutputType | null
  }

  export type ManufacturingOrderAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ManufacturingOrderSumAggregateOutputType = {
    quantity: number | null
  }

  export type ManufacturingOrderMinAggregateOutputType = {
    mo_id: string | null
    product_id: string | null
    quantity: number | null
    state: $Enums.ComponentState | null
    status: $Enums.ManufacturingOrderStatus | null
    scheduled_start: Date | null
    scheduled_end: Date | null
    actual_start: Date | null
    actual_end: Date | null
    created_by: string | null
    assigned_to: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ManufacturingOrderMaxAggregateOutputType = {
    mo_id: string | null
    product_id: string | null
    quantity: number | null
    state: $Enums.ComponentState | null
    status: $Enums.ManufacturingOrderStatus | null
    scheduled_start: Date | null
    scheduled_end: Date | null
    actual_start: Date | null
    actual_end: Date | null
    created_by: string | null
    assigned_to: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ManufacturingOrderCountAggregateOutputType = {
    mo_id: number
    product_id: number
    quantity: number
    state: number
    status: number
    scheduled_start: number
    scheduled_end: number
    actual_start: number
    actual_end: number
    created_by: number
    assigned_to: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ManufacturingOrderAvgAggregateInputType = {
    quantity?: true
  }

  export type ManufacturingOrderSumAggregateInputType = {
    quantity?: true
  }

  export type ManufacturingOrderMinAggregateInputType = {
    mo_id?: true
    product_id?: true
    quantity?: true
    state?: true
    status?: true
    scheduled_start?: true
    scheduled_end?: true
    actual_start?: true
    actual_end?: true
    created_by?: true
    assigned_to?: true
    created_at?: true
    updated_at?: true
  }

  export type ManufacturingOrderMaxAggregateInputType = {
    mo_id?: true
    product_id?: true
    quantity?: true
    state?: true
    status?: true
    scheduled_start?: true
    scheduled_end?: true
    actual_start?: true
    actual_end?: true
    created_by?: true
    assigned_to?: true
    created_at?: true
    updated_at?: true
  }

  export type ManufacturingOrderCountAggregateInputType = {
    mo_id?: true
    product_id?: true
    quantity?: true
    state?: true
    status?: true
    scheduled_start?: true
    scheduled_end?: true
    actual_start?: true
    actual_end?: true
    created_by?: true
    assigned_to?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ManufacturingOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturingOrder to aggregate.
     */
    where?: ManufacturingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingOrders to fetch.
     */
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManufacturingOrders
    **/
    _count?: true | ManufacturingOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManufacturingOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManufacturingOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturingOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturingOrderMaxAggregateInputType
  }

  export type GetManufacturingOrderAggregateType<T extends ManufacturingOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturingOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturingOrder[P]>
      : GetScalarType<T[P], AggregateManufacturingOrder[P]>
  }




  export type ManufacturingOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturingOrderWhereInput
    orderBy?: ManufacturingOrderOrderByWithAggregationInput | ManufacturingOrderOrderByWithAggregationInput[]
    by: ManufacturingOrderScalarFieldEnum[] | ManufacturingOrderScalarFieldEnum
    having?: ManufacturingOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturingOrderCountAggregateInputType | true
    _avg?: ManufacturingOrderAvgAggregateInputType
    _sum?: ManufacturingOrderSumAggregateInputType
    _min?: ManufacturingOrderMinAggregateInputType
    _max?: ManufacturingOrderMaxAggregateInputType
  }

  export type ManufacturingOrderGroupByOutputType = {
    mo_id: string
    product_id: string
    quantity: number
    state: $Enums.ComponentState
    status: $Enums.ManufacturingOrderStatus
    scheduled_start: Date | null
    scheduled_end: Date | null
    actual_start: Date | null
    actual_end: Date | null
    created_by: string
    assigned_to: string | null
    created_at: Date
    updated_at: Date
    _count: ManufacturingOrderCountAggregateOutputType | null
    _avg: ManufacturingOrderAvgAggregateOutputType | null
    _sum: ManufacturingOrderSumAggregateOutputType | null
    _min: ManufacturingOrderMinAggregateOutputType | null
    _max: ManufacturingOrderMaxAggregateOutputType | null
  }

  type GetManufacturingOrderGroupByPayload<T extends ManufacturingOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturingOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturingOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturingOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturingOrderGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturingOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mo_id?: boolean
    product_id?: boolean
    quantity?: boolean
    state?: boolean
    status?: boolean
    scheduled_start?: boolean
    scheduled_end?: boolean
    actual_start?: boolean
    actual_end?: boolean
    created_by?: boolean
    assigned_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | ManufacturingOrder$assigneeArgs<ExtArgs>
    work_orders?: boolean | ManufacturingOrder$work_ordersArgs<ExtArgs>
    stock_ledgers?: boolean | ManufacturingOrder$stock_ledgersArgs<ExtArgs>
    _count?: boolean | ManufacturingOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturingOrder"]>

  export type ManufacturingOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mo_id?: boolean
    product_id?: boolean
    quantity?: boolean
    state?: boolean
    status?: boolean
    scheduled_start?: boolean
    scheduled_end?: boolean
    actual_start?: boolean
    actual_end?: boolean
    created_by?: boolean
    assigned_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | ManufacturingOrder$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturingOrder"]>

  export type ManufacturingOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mo_id?: boolean
    product_id?: boolean
    quantity?: boolean
    state?: boolean
    status?: boolean
    scheduled_start?: boolean
    scheduled_end?: boolean
    actual_start?: boolean
    actual_end?: boolean
    created_by?: boolean
    assigned_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | ManufacturingOrder$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturingOrder"]>

  export type ManufacturingOrderSelectScalar = {
    mo_id?: boolean
    product_id?: boolean
    quantity?: boolean
    state?: boolean
    status?: boolean
    scheduled_start?: boolean
    scheduled_end?: boolean
    actual_start?: boolean
    actual_end?: boolean
    created_by?: boolean
    assigned_to?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ManufacturingOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mo_id" | "product_id" | "quantity" | "state" | "status" | "scheduled_start" | "scheduled_end" | "actual_start" | "actual_end" | "created_by" | "assigned_to" | "created_at" | "updated_at", ExtArgs["result"]["manufacturingOrder"]>
  export type ManufacturingOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | ManufacturingOrder$assigneeArgs<ExtArgs>
    work_orders?: boolean | ManufacturingOrder$work_ordersArgs<ExtArgs>
    stock_ledgers?: boolean | ManufacturingOrder$stock_ledgersArgs<ExtArgs>
    _count?: boolean | ManufacturingOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManufacturingOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | ManufacturingOrder$assigneeArgs<ExtArgs>
  }
  export type ManufacturingOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | ManufacturingOrder$assigneeArgs<ExtArgs>
  }

  export type $ManufacturingOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManufacturingOrder"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
      work_orders: Prisma.$WorkOrderPayload<ExtArgs>[]
      stock_ledgers: Prisma.$StockLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mo_id: string
      product_id: string
      quantity: number
      state: $Enums.ComponentState
      status: $Enums.ManufacturingOrderStatus
      scheduled_start: Date | null
      scheduled_end: Date | null
      actual_start: Date | null
      actual_end: Date | null
      created_by: string
      assigned_to: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["manufacturingOrder"]>
    composites: {}
  }

  type ManufacturingOrderGetPayload<S extends boolean | null | undefined | ManufacturingOrderDefaultArgs> = $Result.GetResult<Prisma.$ManufacturingOrderPayload, S>

  type ManufacturingOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManufacturingOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManufacturingOrderCountAggregateInputType | true
    }

  export interface ManufacturingOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManufacturingOrder'], meta: { name: 'ManufacturingOrder' } }
    /**
     * Find zero or one ManufacturingOrder that matches the filter.
     * @param {ManufacturingOrderFindUniqueArgs} args - Arguments to find a ManufacturingOrder
     * @example
     * // Get one ManufacturingOrder
     * const manufacturingOrder = await prisma.manufacturingOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturingOrderFindUniqueArgs>(args: SelectSubset<T, ManufacturingOrderFindUniqueArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManufacturingOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManufacturingOrderFindUniqueOrThrowArgs} args - Arguments to find a ManufacturingOrder
     * @example
     * // Get one ManufacturingOrder
     * const manufacturingOrder = await prisma.manufacturingOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturingOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ManufacturingOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManufacturingOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderFindFirstArgs} args - Arguments to find a ManufacturingOrder
     * @example
     * // Get one ManufacturingOrder
     * const manufacturingOrder = await prisma.manufacturingOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturingOrderFindFirstArgs>(args?: SelectSubset<T, ManufacturingOrderFindFirstArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManufacturingOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderFindFirstOrThrowArgs} args - Arguments to find a ManufacturingOrder
     * @example
     * // Get one ManufacturingOrder
     * const manufacturingOrder = await prisma.manufacturingOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturingOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ManufacturingOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManufacturingOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManufacturingOrders
     * const manufacturingOrders = await prisma.manufacturingOrder.findMany()
     * 
     * // Get first 10 ManufacturingOrders
     * const manufacturingOrders = await prisma.manufacturingOrder.findMany({ take: 10 })
     * 
     * // Only select the `mo_id`
     * const manufacturingOrderWithMo_idOnly = await prisma.manufacturingOrder.findMany({ select: { mo_id: true } })
     * 
     */
    findMany<T extends ManufacturingOrderFindManyArgs>(args?: SelectSubset<T, ManufacturingOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManufacturingOrder.
     * @param {ManufacturingOrderCreateArgs} args - Arguments to create a ManufacturingOrder.
     * @example
     * // Create one ManufacturingOrder
     * const ManufacturingOrder = await prisma.manufacturingOrder.create({
     *   data: {
     *     // ... data to create a ManufacturingOrder
     *   }
     * })
     * 
     */
    create<T extends ManufacturingOrderCreateArgs>(args: SelectSubset<T, ManufacturingOrderCreateArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManufacturingOrders.
     * @param {ManufacturingOrderCreateManyArgs} args - Arguments to create many ManufacturingOrders.
     * @example
     * // Create many ManufacturingOrders
     * const manufacturingOrder = await prisma.manufacturingOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManufacturingOrderCreateManyArgs>(args?: SelectSubset<T, ManufacturingOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManufacturingOrders and returns the data saved in the database.
     * @param {ManufacturingOrderCreateManyAndReturnArgs} args - Arguments to create many ManufacturingOrders.
     * @example
     * // Create many ManufacturingOrders
     * const manufacturingOrder = await prisma.manufacturingOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManufacturingOrders and only return the `mo_id`
     * const manufacturingOrderWithMo_idOnly = await prisma.manufacturingOrder.createManyAndReturn({
     *   select: { mo_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManufacturingOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ManufacturingOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManufacturingOrder.
     * @param {ManufacturingOrderDeleteArgs} args - Arguments to delete one ManufacturingOrder.
     * @example
     * // Delete one ManufacturingOrder
     * const ManufacturingOrder = await prisma.manufacturingOrder.delete({
     *   where: {
     *     // ... filter to delete one ManufacturingOrder
     *   }
     * })
     * 
     */
    delete<T extends ManufacturingOrderDeleteArgs>(args: SelectSubset<T, ManufacturingOrderDeleteArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManufacturingOrder.
     * @param {ManufacturingOrderUpdateArgs} args - Arguments to update one ManufacturingOrder.
     * @example
     * // Update one ManufacturingOrder
     * const manufacturingOrder = await prisma.manufacturingOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManufacturingOrderUpdateArgs>(args: SelectSubset<T, ManufacturingOrderUpdateArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManufacturingOrders.
     * @param {ManufacturingOrderDeleteManyArgs} args - Arguments to filter ManufacturingOrders to delete.
     * @example
     * // Delete a few ManufacturingOrders
     * const { count } = await prisma.manufacturingOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManufacturingOrderDeleteManyArgs>(args?: SelectSubset<T, ManufacturingOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManufacturingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManufacturingOrders
     * const manufacturingOrder = await prisma.manufacturingOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManufacturingOrderUpdateManyArgs>(args: SelectSubset<T, ManufacturingOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManufacturingOrders and returns the data updated in the database.
     * @param {ManufacturingOrderUpdateManyAndReturnArgs} args - Arguments to update many ManufacturingOrders.
     * @example
     * // Update many ManufacturingOrders
     * const manufacturingOrder = await prisma.manufacturingOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManufacturingOrders and only return the `mo_id`
     * const manufacturingOrderWithMo_idOnly = await prisma.manufacturingOrder.updateManyAndReturn({
     *   select: { mo_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManufacturingOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ManufacturingOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManufacturingOrder.
     * @param {ManufacturingOrderUpsertArgs} args - Arguments to update or create a ManufacturingOrder.
     * @example
     * // Update or create a ManufacturingOrder
     * const manufacturingOrder = await prisma.manufacturingOrder.upsert({
     *   create: {
     *     // ... data to create a ManufacturingOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManufacturingOrder we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturingOrderUpsertArgs>(args: SelectSubset<T, ManufacturingOrderUpsertArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManufacturingOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderCountArgs} args - Arguments to filter ManufacturingOrders to count.
     * @example
     * // Count the number of ManufacturingOrders
     * const count = await prisma.manufacturingOrder.count({
     *   where: {
     *     // ... the filter for the ManufacturingOrders we want to count
     *   }
     * })
    **/
    count<T extends ManufacturingOrderCountArgs>(
      args?: Subset<T, ManufacturingOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturingOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManufacturingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManufacturingOrderAggregateArgs>(args: Subset<T, ManufacturingOrderAggregateArgs>): Prisma.PrismaPromise<GetManufacturingOrderAggregateType<T>>

    /**
     * Group by ManufacturingOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturingOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManufacturingOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturingOrderGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturingOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManufacturingOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturingOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManufacturingOrder model
   */
  readonly fields: ManufacturingOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManufacturingOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturingOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends ManufacturingOrder$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturingOrder$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    work_orders<T extends ManufacturingOrder$work_ordersArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturingOrder$work_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock_ledgers<T extends ManufacturingOrder$stock_ledgersArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturingOrder$stock_ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManufacturingOrder model
   */
  interface ManufacturingOrderFieldRefs {
    readonly mo_id: FieldRef<"ManufacturingOrder", 'String'>
    readonly product_id: FieldRef<"ManufacturingOrder", 'String'>
    readonly quantity: FieldRef<"ManufacturingOrder", 'Float'>
    readonly state: FieldRef<"ManufacturingOrder", 'ComponentState'>
    readonly status: FieldRef<"ManufacturingOrder", 'ManufacturingOrderStatus'>
    readonly scheduled_start: FieldRef<"ManufacturingOrder", 'DateTime'>
    readonly scheduled_end: FieldRef<"ManufacturingOrder", 'DateTime'>
    readonly actual_start: FieldRef<"ManufacturingOrder", 'DateTime'>
    readonly actual_end: FieldRef<"ManufacturingOrder", 'DateTime'>
    readonly created_by: FieldRef<"ManufacturingOrder", 'String'>
    readonly assigned_to: FieldRef<"ManufacturingOrder", 'String'>
    readonly created_at: FieldRef<"ManufacturingOrder", 'DateTime'>
    readonly updated_at: FieldRef<"ManufacturingOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManufacturingOrder findUnique
   */
  export type ManufacturingOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturingOrder to fetch.
     */
    where: ManufacturingOrderWhereUniqueInput
  }

  /**
   * ManufacturingOrder findUniqueOrThrow
   */
  export type ManufacturingOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturingOrder to fetch.
     */
    where: ManufacturingOrderWhereUniqueInput
  }

  /**
   * ManufacturingOrder findFirst
   */
  export type ManufacturingOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturingOrder to fetch.
     */
    where?: ManufacturingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingOrders to fetch.
     */
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManufacturingOrders.
     */
    cursor?: ManufacturingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManufacturingOrders.
     */
    distinct?: ManufacturingOrderScalarFieldEnum | ManufacturingOrderScalarFieldEnum[]
  }

  /**
   * ManufacturingOrder findFirstOrThrow
   */
  export type ManufacturingOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturingOrder to fetch.
     */
    where?: ManufacturingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingOrders to fetch.
     */
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManufacturingOrders.
     */
    cursor?: ManufacturingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManufacturingOrders.
     */
    distinct?: ManufacturingOrderScalarFieldEnum | ManufacturingOrderScalarFieldEnum[]
  }

  /**
   * ManufacturingOrder findMany
   */
  export type ManufacturingOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * Filter, which ManufacturingOrders to fetch.
     */
    where?: ManufacturingOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManufacturingOrders to fetch.
     */
    orderBy?: ManufacturingOrderOrderByWithRelationInput | ManufacturingOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManufacturingOrders.
     */
    cursor?: ManufacturingOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManufacturingOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManufacturingOrders.
     */
    skip?: number
    distinct?: ManufacturingOrderScalarFieldEnum | ManufacturingOrderScalarFieldEnum[]
  }

  /**
   * ManufacturingOrder create
   */
  export type ManufacturingOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ManufacturingOrder.
     */
    data: XOR<ManufacturingOrderCreateInput, ManufacturingOrderUncheckedCreateInput>
  }

  /**
   * ManufacturingOrder createMany
   */
  export type ManufacturingOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManufacturingOrders.
     */
    data: ManufacturingOrderCreateManyInput | ManufacturingOrderCreateManyInput[]
  }

  /**
   * ManufacturingOrder createManyAndReturn
   */
  export type ManufacturingOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ManufacturingOrders.
     */
    data: ManufacturingOrderCreateManyInput | ManufacturingOrderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManufacturingOrder update
   */
  export type ManufacturingOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ManufacturingOrder.
     */
    data: XOR<ManufacturingOrderUpdateInput, ManufacturingOrderUncheckedUpdateInput>
    /**
     * Choose, which ManufacturingOrder to update.
     */
    where: ManufacturingOrderWhereUniqueInput
  }

  /**
   * ManufacturingOrder updateMany
   */
  export type ManufacturingOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManufacturingOrders.
     */
    data: XOR<ManufacturingOrderUpdateManyMutationInput, ManufacturingOrderUncheckedUpdateManyInput>
    /**
     * Filter which ManufacturingOrders to update
     */
    where?: ManufacturingOrderWhereInput
    /**
     * Limit how many ManufacturingOrders to update.
     */
    limit?: number
  }

  /**
   * ManufacturingOrder updateManyAndReturn
   */
  export type ManufacturingOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * The data used to update ManufacturingOrders.
     */
    data: XOR<ManufacturingOrderUpdateManyMutationInput, ManufacturingOrderUncheckedUpdateManyInput>
    /**
     * Filter which ManufacturingOrders to update
     */
    where?: ManufacturingOrderWhereInput
    /**
     * Limit how many ManufacturingOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManufacturingOrder upsert
   */
  export type ManufacturingOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ManufacturingOrder to update in case it exists.
     */
    where: ManufacturingOrderWhereUniqueInput
    /**
     * In case the ManufacturingOrder found by the `where` argument doesn't exist, create a new ManufacturingOrder with this data.
     */
    create: XOR<ManufacturingOrderCreateInput, ManufacturingOrderUncheckedCreateInput>
    /**
     * In case the ManufacturingOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturingOrderUpdateInput, ManufacturingOrderUncheckedUpdateInput>
  }

  /**
   * ManufacturingOrder delete
   */
  export type ManufacturingOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    /**
     * Filter which ManufacturingOrder to delete.
     */
    where: ManufacturingOrderWhereUniqueInput
  }

  /**
   * ManufacturingOrder deleteMany
   */
  export type ManufacturingOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManufacturingOrders to delete
     */
    where?: ManufacturingOrderWhereInput
    /**
     * Limit how many ManufacturingOrders to delete.
     */
    limit?: number
  }

  /**
   * ManufacturingOrder.assignee
   */
  export type ManufacturingOrder$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ManufacturingOrder.work_orders
   */
  export type ManufacturingOrder$work_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    cursor?: WorkOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * ManufacturingOrder.stock_ledgers
   */
  export type ManufacturingOrder$stock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    where?: StockLedgerWhereInput
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    cursor?: StockLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * ManufacturingOrder without action
   */
  export type ManufacturingOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
  }


  /**
   * Model WorkOrder
   */

  export type AggregateWorkOrder = {
    _count: WorkOrderCountAggregateOutputType | null
    _avg: WorkOrderAvgAggregateOutputType | null
    _sum: WorkOrderSumAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  export type WorkOrderAvgAggregateOutputType = {
    planned_time: number | null
    actual_time: number | null
  }

  export type WorkOrderSumAggregateOutputType = {
    planned_time: number | null
    actual_time: number | null
  }

  export type WorkOrderMinAggregateOutputType = {
    wo_id: string | null
    mo_id: string | null
    operation_name: string | null
    work_center_id: string | null
    assigned_to: string | null
    status: $Enums.WorkOrderStatus | null
    comments: string | null
    planned_time: number | null
    actual_time: number | null
    started_at: Date | null
    completed_at: Date | null
  }

  export type WorkOrderMaxAggregateOutputType = {
    wo_id: string | null
    mo_id: string | null
    operation_name: string | null
    work_center_id: string | null
    assigned_to: string | null
    status: $Enums.WorkOrderStatus | null
    comments: string | null
    planned_time: number | null
    actual_time: number | null
    started_at: Date | null
    completed_at: Date | null
  }

  export type WorkOrderCountAggregateOutputType = {
    wo_id: number
    mo_id: number
    operation_name: number
    work_center_id: number
    assigned_to: number
    status: number
    comments: number
    planned_time: number
    actual_time: number
    started_at: number
    completed_at: number
    _all: number
  }


  export type WorkOrderAvgAggregateInputType = {
    planned_time?: true
    actual_time?: true
  }

  export type WorkOrderSumAggregateInputType = {
    planned_time?: true
    actual_time?: true
  }

  export type WorkOrderMinAggregateInputType = {
    wo_id?: true
    mo_id?: true
    operation_name?: true
    work_center_id?: true
    assigned_to?: true
    status?: true
    comments?: true
    planned_time?: true
    actual_time?: true
    started_at?: true
    completed_at?: true
  }

  export type WorkOrderMaxAggregateInputType = {
    wo_id?: true
    mo_id?: true
    operation_name?: true
    work_center_id?: true
    assigned_to?: true
    status?: true
    comments?: true
    planned_time?: true
    actual_time?: true
    started_at?: true
    completed_at?: true
  }

  export type WorkOrderCountAggregateInputType = {
    wo_id?: true
    mo_id?: true
    operation_name?: true
    work_center_id?: true
    assigned_to?: true
    status?: true
    comments?: true
    planned_time?: true
    actual_time?: true
    started_at?: true
    completed_at?: true
    _all?: true
  }

  export type WorkOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrder to aggregate.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkOrders
    **/
    _count?: true | WorkOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOrderMaxAggregateInputType
  }

  export type GetWorkOrderAggregateType<T extends WorkOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOrder[P]>
      : GetScalarType<T[P], AggregateWorkOrder[P]>
  }




  export type WorkOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithAggregationInput | WorkOrderOrderByWithAggregationInput[]
    by: WorkOrderScalarFieldEnum[] | WorkOrderScalarFieldEnum
    having?: WorkOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOrderCountAggregateInputType | true
    _avg?: WorkOrderAvgAggregateInputType
    _sum?: WorkOrderSumAggregateInputType
    _min?: WorkOrderMinAggregateInputType
    _max?: WorkOrderMaxAggregateInputType
  }

  export type WorkOrderGroupByOutputType = {
    wo_id: string
    mo_id: string
    operation_name: string
    work_center_id: string
    assigned_to: string | null
    status: $Enums.WorkOrderStatus
    comments: string | null
    planned_time: number | null
    actual_time: number | null
    started_at: Date | null
    completed_at: Date | null
    _count: WorkOrderCountAggregateOutputType | null
    _avg: WorkOrderAvgAggregateOutputType | null
    _sum: WorkOrderSumAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  type GetWorkOrderGroupByPayload<T extends WorkOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
        }
      >
    >


  export type WorkOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wo_id?: boolean
    mo_id?: boolean
    operation_name?: boolean
    work_center_id?: boolean
    assigned_to?: boolean
    status?: boolean
    comments?: boolean
    planned_time?: boolean
    actual_time?: boolean
    started_at?: boolean
    completed_at?: boolean
    manufacturing_order?: boolean | ManufacturingOrderDefaultArgs<ExtArgs>
    work_center?: boolean | WorkCenterDefaultArgs<ExtArgs>
    assignee?: boolean | WorkOrder$assigneeArgs<ExtArgs>
    stock_ledgers?: boolean | WorkOrder$stock_ledgersArgs<ExtArgs>
    _count?: boolean | WorkOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workOrder"]>

  export type WorkOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wo_id?: boolean
    mo_id?: boolean
    operation_name?: boolean
    work_center_id?: boolean
    assigned_to?: boolean
    status?: boolean
    comments?: boolean
    planned_time?: boolean
    actual_time?: boolean
    started_at?: boolean
    completed_at?: boolean
    manufacturing_order?: boolean | ManufacturingOrderDefaultArgs<ExtArgs>
    work_center?: boolean | WorkCenterDefaultArgs<ExtArgs>
    assignee?: boolean | WorkOrder$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["workOrder"]>

  export type WorkOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wo_id?: boolean
    mo_id?: boolean
    operation_name?: boolean
    work_center_id?: boolean
    assigned_to?: boolean
    status?: boolean
    comments?: boolean
    planned_time?: boolean
    actual_time?: boolean
    started_at?: boolean
    completed_at?: boolean
    manufacturing_order?: boolean | ManufacturingOrderDefaultArgs<ExtArgs>
    work_center?: boolean | WorkCenterDefaultArgs<ExtArgs>
    assignee?: boolean | WorkOrder$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["workOrder"]>

  export type WorkOrderSelectScalar = {
    wo_id?: boolean
    mo_id?: boolean
    operation_name?: boolean
    work_center_id?: boolean
    assigned_to?: boolean
    status?: boolean
    comments?: boolean
    planned_time?: boolean
    actual_time?: boolean
    started_at?: boolean
    completed_at?: boolean
  }

  export type WorkOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wo_id" | "mo_id" | "operation_name" | "work_center_id" | "assigned_to" | "status" | "comments" | "planned_time" | "actual_time" | "started_at" | "completed_at", ExtArgs["result"]["workOrder"]>
  export type WorkOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturing_order?: boolean | ManufacturingOrderDefaultArgs<ExtArgs>
    work_center?: boolean | WorkCenterDefaultArgs<ExtArgs>
    assignee?: boolean | WorkOrder$assigneeArgs<ExtArgs>
    stock_ledgers?: boolean | WorkOrder$stock_ledgersArgs<ExtArgs>
    _count?: boolean | WorkOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturing_order?: boolean | ManufacturingOrderDefaultArgs<ExtArgs>
    work_center?: boolean | WorkCenterDefaultArgs<ExtArgs>
    assignee?: boolean | WorkOrder$assigneeArgs<ExtArgs>
  }
  export type WorkOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manufacturing_order?: boolean | ManufacturingOrderDefaultArgs<ExtArgs>
    work_center?: boolean | WorkCenterDefaultArgs<ExtArgs>
    assignee?: boolean | WorkOrder$assigneeArgs<ExtArgs>
  }

  export type $WorkOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkOrder"
    objects: {
      manufacturing_order: Prisma.$ManufacturingOrderPayload<ExtArgs>
      work_center: Prisma.$WorkCenterPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
      stock_ledgers: Prisma.$StockLedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      wo_id: string
      mo_id: string
      operation_name: string
      work_center_id: string
      assigned_to: string | null
      status: $Enums.WorkOrderStatus
      comments: string | null
      planned_time: number | null
      actual_time: number | null
      started_at: Date | null
      completed_at: Date | null
    }, ExtArgs["result"]["workOrder"]>
    composites: {}
  }

  type WorkOrderGetPayload<S extends boolean | null | undefined | WorkOrderDefaultArgs> = $Result.GetResult<Prisma.$WorkOrderPayload, S>

  type WorkOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkOrderCountAggregateInputType | true
    }

  export interface WorkOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkOrder'], meta: { name: 'WorkOrder' } }
    /**
     * Find zero or one WorkOrder that matches the filter.
     * @param {WorkOrderFindUniqueArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkOrderFindUniqueArgs>(args: SelectSubset<T, WorkOrderFindUniqueArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkOrderFindUniqueOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkOrderFindFirstArgs>(args?: SelectSubset<T, WorkOrderFindFirstArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOrders
     * const workOrders = await prisma.workOrder.findMany()
     * 
     * // Get first 10 WorkOrders
     * const workOrders = await prisma.workOrder.findMany({ take: 10 })
     * 
     * // Only select the `wo_id`
     * const workOrderWithWo_idOnly = await prisma.workOrder.findMany({ select: { wo_id: true } })
     * 
     */
    findMany<T extends WorkOrderFindManyArgs>(args?: SelectSubset<T, WorkOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkOrder.
     * @param {WorkOrderCreateArgs} args - Arguments to create a WorkOrder.
     * @example
     * // Create one WorkOrder
     * const WorkOrder = await prisma.workOrder.create({
     *   data: {
     *     // ... data to create a WorkOrder
     *   }
     * })
     * 
     */
    create<T extends WorkOrderCreateArgs>(args: SelectSubset<T, WorkOrderCreateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkOrders.
     * @param {WorkOrderCreateManyArgs} args - Arguments to create many WorkOrders.
     * @example
     * // Create many WorkOrders
     * const workOrder = await prisma.workOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkOrderCreateManyArgs>(args?: SelectSubset<T, WorkOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkOrders and returns the data saved in the database.
     * @param {WorkOrderCreateManyAndReturnArgs} args - Arguments to create many WorkOrders.
     * @example
     * // Create many WorkOrders
     * const workOrder = await prisma.workOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkOrders and only return the `wo_id`
     * const workOrderWithWo_idOnly = await prisma.workOrder.createManyAndReturn({
     *   select: { wo_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkOrder.
     * @param {WorkOrderDeleteArgs} args - Arguments to delete one WorkOrder.
     * @example
     * // Delete one WorkOrder
     * const WorkOrder = await prisma.workOrder.delete({
     *   where: {
     *     // ... filter to delete one WorkOrder
     *   }
     * })
     * 
     */
    delete<T extends WorkOrderDeleteArgs>(args: SelectSubset<T, WorkOrderDeleteArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkOrder.
     * @param {WorkOrderUpdateArgs} args - Arguments to update one WorkOrder.
     * @example
     * // Update one WorkOrder
     * const workOrder = await prisma.workOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkOrderUpdateArgs>(args: SelectSubset<T, WorkOrderUpdateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkOrders.
     * @param {WorkOrderDeleteManyArgs} args - Arguments to filter WorkOrders to delete.
     * @example
     * // Delete a few WorkOrders
     * const { count } = await prisma.workOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkOrderDeleteManyArgs>(args?: SelectSubset<T, WorkOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOrders
     * const workOrder = await prisma.workOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkOrderUpdateManyArgs>(args: SelectSubset<T, WorkOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrders and returns the data updated in the database.
     * @param {WorkOrderUpdateManyAndReturnArgs} args - Arguments to update many WorkOrders.
     * @example
     * // Update many WorkOrders
     * const workOrder = await prisma.workOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkOrders and only return the `wo_id`
     * const workOrderWithWo_idOnly = await prisma.workOrder.updateManyAndReturn({
     *   select: { wo_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkOrder.
     * @param {WorkOrderUpsertArgs} args - Arguments to update or create a WorkOrder.
     * @example
     * // Update or create a WorkOrder
     * const workOrder = await prisma.workOrder.upsert({
     *   create: {
     *     // ... data to create a WorkOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOrder we want to update
     *   }
     * })
     */
    upsert<T extends WorkOrderUpsertArgs>(args: SelectSubset<T, WorkOrderUpsertArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderCountArgs} args - Arguments to filter WorkOrders to count.
     * @example
     * // Count the number of WorkOrders
     * const count = await prisma.workOrder.count({
     *   where: {
     *     // ... the filter for the WorkOrders we want to count
     *   }
     * })
    **/
    count<T extends WorkOrderCountArgs>(
      args?: Subset<T, WorkOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkOrderAggregateArgs>(args: Subset<T, WorkOrderAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderAggregateType<T>>

    /**
     * Group by WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkOrderGroupByArgs['orderBy'] }
        : { orderBy?: WorkOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkOrder model
   */
  readonly fields: WorkOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manufacturing_order<T extends ManufacturingOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturingOrderDefaultArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    work_center<T extends WorkCenterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkCenterDefaultArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends WorkOrder$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stock_ledgers<T extends WorkOrder$stock_ledgersArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$stock_ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkOrder model
   */
  interface WorkOrderFieldRefs {
    readonly wo_id: FieldRef<"WorkOrder", 'String'>
    readonly mo_id: FieldRef<"WorkOrder", 'String'>
    readonly operation_name: FieldRef<"WorkOrder", 'String'>
    readonly work_center_id: FieldRef<"WorkOrder", 'String'>
    readonly assigned_to: FieldRef<"WorkOrder", 'String'>
    readonly status: FieldRef<"WorkOrder", 'WorkOrderStatus'>
    readonly comments: FieldRef<"WorkOrder", 'String'>
    readonly planned_time: FieldRef<"WorkOrder", 'Int'>
    readonly actual_time: FieldRef<"WorkOrder", 'Int'>
    readonly started_at: FieldRef<"WorkOrder", 'DateTime'>
    readonly completed_at: FieldRef<"WorkOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkOrder findUnique
   */
  export type WorkOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findUniqueOrThrow
   */
  export type WorkOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findFirst
   */
  export type WorkOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findFirstOrThrow
   */
  export type WorkOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findMany
   */
  export type WorkOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrders to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder create
   */
  export type WorkOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkOrder.
     */
    data: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
  }

  /**
   * WorkOrder createMany
   */
  export type WorkOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkOrders.
     */
    data: WorkOrderCreateManyInput | WorkOrderCreateManyInput[]
  }

  /**
   * WorkOrder createManyAndReturn
   */
  export type WorkOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The data used to create many WorkOrders.
     */
    data: WorkOrderCreateManyInput | WorkOrderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkOrder update
   */
  export type WorkOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkOrder.
     */
    data: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
    /**
     * Choose, which WorkOrder to update.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder updateMany
   */
  export type WorkOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkOrders.
     */
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrders to update
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to update.
     */
    limit?: number
  }

  /**
   * WorkOrder updateManyAndReturn
   */
  export type WorkOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * The data used to update WorkOrders.
     */
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrders to update
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkOrder upsert
   */
  export type WorkOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkOrder to update in case it exists.
     */
    where: WorkOrderWhereUniqueInput
    /**
     * In case the WorkOrder found by the `where` argument doesn't exist, create a new WorkOrder with this data.
     */
    create: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
    /**
     * In case the WorkOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
  }

  /**
   * WorkOrder delete
   */
  export type WorkOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter which WorkOrder to delete.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder deleteMany
   */
  export type WorkOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrders to delete
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to delete.
     */
    limit?: number
  }

  /**
   * WorkOrder.assignee
   */
  export type WorkOrder$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WorkOrder.stock_ledgers
   */
  export type WorkOrder$stock_ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    where?: StockLedgerWhereInput
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    cursor?: StockLedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * WorkOrder without action
   */
  export type WorkOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
  }


  /**
   * Model WorkCenter
   */

  export type AggregateWorkCenter = {
    _count: WorkCenterCountAggregateOutputType | null
    _avg: WorkCenterAvgAggregateOutputType | null
    _sum: WorkCenterSumAggregateOutputType | null
    _min: WorkCenterMinAggregateOutputType | null
    _max: WorkCenterMaxAggregateOutputType | null
  }

  export type WorkCenterAvgAggregateOutputType = {
    cost_per_hour: number | null
  }

  export type WorkCenterSumAggregateOutputType = {
    cost_per_hour: number | null
  }

  export type WorkCenterMinAggregateOutputType = {
    work_center_id: string | null
    name: string | null
    cost_per_hour: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkCenterMaxAggregateOutputType = {
    work_center_id: string | null
    name: string | null
    cost_per_hour: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkCenterCountAggregateOutputType = {
    work_center_id: number
    name: number
    cost_per_hour: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WorkCenterAvgAggregateInputType = {
    cost_per_hour?: true
  }

  export type WorkCenterSumAggregateInputType = {
    cost_per_hour?: true
  }

  export type WorkCenterMinAggregateInputType = {
    work_center_id?: true
    name?: true
    cost_per_hour?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkCenterMaxAggregateInputType = {
    work_center_id?: true
    name?: true
    cost_per_hour?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkCenterCountAggregateInputType = {
    work_center_id?: true
    name?: true
    cost_per_hour?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WorkCenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkCenter to aggregate.
     */
    where?: WorkCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCenters to fetch.
     */
    orderBy?: WorkCenterOrderByWithRelationInput | WorkCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkCenters
    **/
    _count?: true | WorkCenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkCenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkCenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkCenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkCenterMaxAggregateInputType
  }

  export type GetWorkCenterAggregateType<T extends WorkCenterAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkCenter[P]>
      : GetScalarType<T[P], AggregateWorkCenter[P]>
  }




  export type WorkCenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkCenterWhereInput
    orderBy?: WorkCenterOrderByWithAggregationInput | WorkCenterOrderByWithAggregationInput[]
    by: WorkCenterScalarFieldEnum[] | WorkCenterScalarFieldEnum
    having?: WorkCenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCenterCountAggregateInputType | true
    _avg?: WorkCenterAvgAggregateInputType
    _sum?: WorkCenterSumAggregateInputType
    _min?: WorkCenterMinAggregateInputType
    _max?: WorkCenterMaxAggregateInputType
  }

  export type WorkCenterGroupByOutputType = {
    work_center_id: string
    name: string
    cost_per_hour: number
    created_at: Date
    updated_at: Date
    _count: WorkCenterCountAggregateOutputType | null
    _avg: WorkCenterAvgAggregateOutputType | null
    _sum: WorkCenterSumAggregateOutputType | null
    _min: WorkCenterMinAggregateOutputType | null
    _max: WorkCenterMaxAggregateOutputType | null
  }

  type GetWorkCenterGroupByPayload<T extends WorkCenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkCenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkCenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkCenterGroupByOutputType[P]>
            : GetScalarType<T[P], WorkCenterGroupByOutputType[P]>
        }
      >
    >


  export type WorkCenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    work_center_id?: boolean
    name?: boolean
    cost_per_hour?: boolean
    created_at?: boolean
    updated_at?: boolean
    work_orders?: boolean | WorkCenter$work_ordersArgs<ExtArgs>
    _count?: boolean | WorkCenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workCenter"]>

  export type WorkCenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    work_center_id?: boolean
    name?: boolean
    cost_per_hour?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["workCenter"]>

  export type WorkCenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    work_center_id?: boolean
    name?: boolean
    cost_per_hour?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["workCenter"]>

  export type WorkCenterSelectScalar = {
    work_center_id?: boolean
    name?: boolean
    cost_per_hour?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WorkCenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"work_center_id" | "name" | "cost_per_hour" | "created_at" | "updated_at", ExtArgs["result"]["workCenter"]>
  export type WorkCenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_orders?: boolean | WorkCenter$work_ordersArgs<ExtArgs>
    _count?: boolean | WorkCenterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkCenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkCenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkCenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkCenter"
    objects: {
      work_orders: Prisma.$WorkOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      work_center_id: string
      name: string
      cost_per_hour: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["workCenter"]>
    composites: {}
  }

  type WorkCenterGetPayload<S extends boolean | null | undefined | WorkCenterDefaultArgs> = $Result.GetResult<Prisma.$WorkCenterPayload, S>

  type WorkCenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkCenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCenterCountAggregateInputType | true
    }

  export interface WorkCenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkCenter'], meta: { name: 'WorkCenter' } }
    /**
     * Find zero or one WorkCenter that matches the filter.
     * @param {WorkCenterFindUniqueArgs} args - Arguments to find a WorkCenter
     * @example
     * // Get one WorkCenter
     * const workCenter = await prisma.workCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkCenterFindUniqueArgs>(args: SelectSubset<T, WorkCenterFindUniqueArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkCenter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkCenterFindUniqueOrThrowArgs} args - Arguments to find a WorkCenter
     * @example
     * // Get one WorkCenter
     * const workCenter = await prisma.workCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkCenterFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkCenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterFindFirstArgs} args - Arguments to find a WorkCenter
     * @example
     * // Get one WorkCenter
     * const workCenter = await prisma.workCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkCenterFindFirstArgs>(args?: SelectSubset<T, WorkCenterFindFirstArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterFindFirstOrThrowArgs} args - Arguments to find a WorkCenter
     * @example
     * // Get one WorkCenter
     * const workCenter = await prisma.workCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkCenterFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkCenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkCenters
     * const workCenters = await prisma.workCenter.findMany()
     * 
     * // Get first 10 WorkCenters
     * const workCenters = await prisma.workCenter.findMany({ take: 10 })
     * 
     * // Only select the `work_center_id`
     * const workCenterWithWork_center_idOnly = await prisma.workCenter.findMany({ select: { work_center_id: true } })
     * 
     */
    findMany<T extends WorkCenterFindManyArgs>(args?: SelectSubset<T, WorkCenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkCenter.
     * @param {WorkCenterCreateArgs} args - Arguments to create a WorkCenter.
     * @example
     * // Create one WorkCenter
     * const WorkCenter = await prisma.workCenter.create({
     *   data: {
     *     // ... data to create a WorkCenter
     *   }
     * })
     * 
     */
    create<T extends WorkCenterCreateArgs>(args: SelectSubset<T, WorkCenterCreateArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkCenters.
     * @param {WorkCenterCreateManyArgs} args - Arguments to create many WorkCenters.
     * @example
     * // Create many WorkCenters
     * const workCenter = await prisma.workCenter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCenterCreateManyArgs>(args?: SelectSubset<T, WorkCenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkCenters and returns the data saved in the database.
     * @param {WorkCenterCreateManyAndReturnArgs} args - Arguments to create many WorkCenters.
     * @example
     * // Create many WorkCenters
     * const workCenter = await prisma.workCenter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkCenters and only return the `work_center_id`
     * const workCenterWithWork_center_idOnly = await prisma.workCenter.createManyAndReturn({
     *   select: { work_center_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCenterCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkCenter.
     * @param {WorkCenterDeleteArgs} args - Arguments to delete one WorkCenter.
     * @example
     * // Delete one WorkCenter
     * const WorkCenter = await prisma.workCenter.delete({
     *   where: {
     *     // ... filter to delete one WorkCenter
     *   }
     * })
     * 
     */
    delete<T extends WorkCenterDeleteArgs>(args: SelectSubset<T, WorkCenterDeleteArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkCenter.
     * @param {WorkCenterUpdateArgs} args - Arguments to update one WorkCenter.
     * @example
     * // Update one WorkCenter
     * const workCenter = await prisma.workCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkCenterUpdateArgs>(args: SelectSubset<T, WorkCenterUpdateArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkCenters.
     * @param {WorkCenterDeleteManyArgs} args - Arguments to filter WorkCenters to delete.
     * @example
     * // Delete a few WorkCenters
     * const { count } = await prisma.workCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkCenterDeleteManyArgs>(args?: SelectSubset<T, WorkCenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkCenters
     * const workCenter = await prisma.workCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkCenterUpdateManyArgs>(args: SelectSubset<T, WorkCenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkCenters and returns the data updated in the database.
     * @param {WorkCenterUpdateManyAndReturnArgs} args - Arguments to update many WorkCenters.
     * @example
     * // Update many WorkCenters
     * const workCenter = await prisma.workCenter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkCenters and only return the `work_center_id`
     * const workCenterWithWork_center_idOnly = await prisma.workCenter.updateManyAndReturn({
     *   select: { work_center_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkCenterUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkCenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkCenter.
     * @param {WorkCenterUpsertArgs} args - Arguments to update or create a WorkCenter.
     * @example
     * // Update or create a WorkCenter
     * const workCenter = await prisma.workCenter.upsert({
     *   create: {
     *     // ... data to create a WorkCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkCenter we want to update
     *   }
     * })
     */
    upsert<T extends WorkCenterUpsertArgs>(args: SelectSubset<T, WorkCenterUpsertArgs<ExtArgs>>): Prisma__WorkCenterClient<$Result.GetResult<Prisma.$WorkCenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterCountArgs} args - Arguments to filter WorkCenters to count.
     * @example
     * // Count the number of WorkCenters
     * const count = await prisma.workCenter.count({
     *   where: {
     *     // ... the filter for the WorkCenters we want to count
     *   }
     * })
    **/
    count<T extends WorkCenterCountArgs>(
      args?: Subset<T, WorkCenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkCenterAggregateArgs>(args: Subset<T, WorkCenterAggregateArgs>): Prisma.PrismaPromise<GetWorkCenterAggregateType<T>>

    /**
     * Group by WorkCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCenterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkCenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkCenterGroupByArgs['orderBy'] }
        : { orderBy?: WorkCenterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkCenter model
   */
  readonly fields: WorkCenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkCenter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkCenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work_orders<T extends WorkCenter$work_ordersArgs<ExtArgs> = {}>(args?: Subset<T, WorkCenter$work_ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkCenter model
   */
  interface WorkCenterFieldRefs {
    readonly work_center_id: FieldRef<"WorkCenter", 'String'>
    readonly name: FieldRef<"WorkCenter", 'String'>
    readonly cost_per_hour: FieldRef<"WorkCenter", 'Float'>
    readonly created_at: FieldRef<"WorkCenter", 'DateTime'>
    readonly updated_at: FieldRef<"WorkCenter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkCenter findUnique
   */
  export type WorkCenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCenter to fetch.
     */
    where: WorkCenterWhereUniqueInput
  }

  /**
   * WorkCenter findUniqueOrThrow
   */
  export type WorkCenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCenter to fetch.
     */
    where: WorkCenterWhereUniqueInput
  }

  /**
   * WorkCenter findFirst
   */
  export type WorkCenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCenter to fetch.
     */
    where?: WorkCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCenters to fetch.
     */
    orderBy?: WorkCenterOrderByWithRelationInput | WorkCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkCenters.
     */
    cursor?: WorkCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkCenters.
     */
    distinct?: WorkCenterScalarFieldEnum | WorkCenterScalarFieldEnum[]
  }

  /**
   * WorkCenter findFirstOrThrow
   */
  export type WorkCenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCenter to fetch.
     */
    where?: WorkCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCenters to fetch.
     */
    orderBy?: WorkCenterOrderByWithRelationInput | WorkCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkCenters.
     */
    cursor?: WorkCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCenters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkCenters.
     */
    distinct?: WorkCenterScalarFieldEnum | WorkCenterScalarFieldEnum[]
  }

  /**
   * WorkCenter findMany
   */
  export type WorkCenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * Filter, which WorkCenters to fetch.
     */
    where?: WorkCenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkCenters to fetch.
     */
    orderBy?: WorkCenterOrderByWithRelationInput | WorkCenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkCenters.
     */
    cursor?: WorkCenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkCenters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkCenters.
     */
    skip?: number
    distinct?: WorkCenterScalarFieldEnum | WorkCenterScalarFieldEnum[]
  }

  /**
   * WorkCenter create
   */
  export type WorkCenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkCenter.
     */
    data: XOR<WorkCenterCreateInput, WorkCenterUncheckedCreateInput>
  }

  /**
   * WorkCenter createMany
   */
  export type WorkCenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkCenters.
     */
    data: WorkCenterCreateManyInput | WorkCenterCreateManyInput[]
  }

  /**
   * WorkCenter createManyAndReturn
   */
  export type WorkCenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * The data used to create many WorkCenters.
     */
    data: WorkCenterCreateManyInput | WorkCenterCreateManyInput[]
  }

  /**
   * WorkCenter update
   */
  export type WorkCenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkCenter.
     */
    data: XOR<WorkCenterUpdateInput, WorkCenterUncheckedUpdateInput>
    /**
     * Choose, which WorkCenter to update.
     */
    where: WorkCenterWhereUniqueInput
  }

  /**
   * WorkCenter updateMany
   */
  export type WorkCenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkCenters.
     */
    data: XOR<WorkCenterUpdateManyMutationInput, WorkCenterUncheckedUpdateManyInput>
    /**
     * Filter which WorkCenters to update
     */
    where?: WorkCenterWhereInput
    /**
     * Limit how many WorkCenters to update.
     */
    limit?: number
  }

  /**
   * WorkCenter updateManyAndReturn
   */
  export type WorkCenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * The data used to update WorkCenters.
     */
    data: XOR<WorkCenterUpdateManyMutationInput, WorkCenterUncheckedUpdateManyInput>
    /**
     * Filter which WorkCenters to update
     */
    where?: WorkCenterWhereInput
    /**
     * Limit how many WorkCenters to update.
     */
    limit?: number
  }

  /**
   * WorkCenter upsert
   */
  export type WorkCenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkCenter to update in case it exists.
     */
    where: WorkCenterWhereUniqueInput
    /**
     * In case the WorkCenter found by the `where` argument doesn't exist, create a new WorkCenter with this data.
     */
    create: XOR<WorkCenterCreateInput, WorkCenterUncheckedCreateInput>
    /**
     * In case the WorkCenter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkCenterUpdateInput, WorkCenterUncheckedUpdateInput>
  }

  /**
   * WorkCenter delete
   */
  export type WorkCenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
    /**
     * Filter which WorkCenter to delete.
     */
    where: WorkCenterWhereUniqueInput
  }

  /**
   * WorkCenter deleteMany
   */
  export type WorkCenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkCenters to delete
     */
    where?: WorkCenterWhereInput
    /**
     * Limit how many WorkCenters to delete.
     */
    limit?: number
  }

  /**
   * WorkCenter.work_orders
   */
  export type WorkCenter$work_ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    cursor?: WorkOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkCenter without action
   */
  export type WorkCenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkCenter
     */
    select?: WorkCenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkCenter
     */
    omit?: WorkCenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkCenterInclude<ExtArgs> | null
  }


  /**
   * Model StockLedger
   */

  export type AggregateStockLedger = {
    _count: StockLedgerCountAggregateOutputType | null
    _avg: StockLedgerAvgAggregateOutputType | null
    _sum: StockLedgerSumAggregateOutputType | null
    _min: StockLedgerMinAggregateOutputType | null
    _max: StockLedgerMaxAggregateOutputType | null
  }

  export type StockLedgerAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockLedgerSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockLedgerMinAggregateOutputType = {
    ledger_id: string | null
    product_id: string | null
    movement_type: $Enums.MovementType | null
    quantity: number | null
    reference_type: $Enums.ReferenceType | null
    reference_id: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type StockLedgerMaxAggregateOutputType = {
    ledger_id: string | null
    product_id: string | null
    movement_type: $Enums.MovementType | null
    quantity: number | null
    reference_type: $Enums.ReferenceType | null
    reference_id: string | null
    created_at: Date | null
    created_by: string | null
  }

  export type StockLedgerCountAggregateOutputType = {
    ledger_id: number
    product_id: number
    movement_type: number
    quantity: number
    reference_type: number
    reference_id: number
    created_at: number
    created_by: number
    _all: number
  }


  export type StockLedgerAvgAggregateInputType = {
    quantity?: true
  }

  export type StockLedgerSumAggregateInputType = {
    quantity?: true
  }

  export type StockLedgerMinAggregateInputType = {
    ledger_id?: true
    product_id?: true
    movement_type?: true
    quantity?: true
    reference_type?: true
    reference_id?: true
    created_at?: true
    created_by?: true
  }

  export type StockLedgerMaxAggregateInputType = {
    ledger_id?: true
    product_id?: true
    movement_type?: true
    quantity?: true
    reference_type?: true
    reference_id?: true
    created_at?: true
    created_by?: true
  }

  export type StockLedgerCountAggregateInputType = {
    ledger_id?: true
    product_id?: true
    movement_type?: true
    quantity?: true
    reference_type?: true
    reference_id?: true
    created_at?: true
    created_by?: true
    _all?: true
  }

  export type StockLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockLedger to aggregate.
     */
    where?: StockLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLedgers to fetch.
     */
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockLedgers
    **/
    _count?: true | StockLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockLedgerMaxAggregateInputType
  }

  export type GetStockLedgerAggregateType<T extends StockLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateStockLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockLedger[P]>
      : GetScalarType<T[P], AggregateStockLedger[P]>
  }




  export type StockLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockLedgerWhereInput
    orderBy?: StockLedgerOrderByWithAggregationInput | StockLedgerOrderByWithAggregationInput[]
    by: StockLedgerScalarFieldEnum[] | StockLedgerScalarFieldEnum
    having?: StockLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockLedgerCountAggregateInputType | true
    _avg?: StockLedgerAvgAggregateInputType
    _sum?: StockLedgerSumAggregateInputType
    _min?: StockLedgerMinAggregateInputType
    _max?: StockLedgerMaxAggregateInputType
  }

  export type StockLedgerGroupByOutputType = {
    ledger_id: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at: Date
    created_by: string
    _count: StockLedgerCountAggregateOutputType | null
    _avg: StockLedgerAvgAggregateOutputType | null
    _sum: StockLedgerSumAggregateOutputType | null
    _min: StockLedgerMinAggregateOutputType | null
    _max: StockLedgerMaxAggregateOutputType | null
  }

  type GetStockLedgerGroupByPayload<T extends StockLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], StockLedgerGroupByOutputType[P]>
        }
      >
    >


  export type StockLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledger_id?: boolean
    product_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    created_by?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    manufacturing_order?: boolean | StockLedger$manufacturing_orderArgs<ExtArgs>
    work_order?: boolean | StockLedger$work_orderArgs<ExtArgs>
  }, ExtArgs["result"]["stockLedger"]>

  export type StockLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledger_id?: boolean
    product_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    created_by?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    manufacturing_order?: boolean | StockLedger$manufacturing_orderArgs<ExtArgs>
    work_order?: boolean | StockLedger$work_orderArgs<ExtArgs>
  }, ExtArgs["result"]["stockLedger"]>

  export type StockLedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledger_id?: boolean
    product_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    created_by?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    manufacturing_order?: boolean | StockLedger$manufacturing_orderArgs<ExtArgs>
    work_order?: boolean | StockLedger$work_orderArgs<ExtArgs>
  }, ExtArgs["result"]["stockLedger"]>

  export type StockLedgerSelectScalar = {
    ledger_id?: boolean
    product_id?: boolean
    movement_type?: boolean
    quantity?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    created_by?: boolean
  }

  export type StockLedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ledger_id" | "product_id" | "movement_type" | "quantity" | "reference_type" | "reference_id" | "created_at" | "created_by", ExtArgs["result"]["stockLedger"]>
  export type StockLedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    manufacturing_order?: boolean | StockLedger$manufacturing_orderArgs<ExtArgs>
    work_order?: boolean | StockLedger$work_orderArgs<ExtArgs>
  }
  export type StockLedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    manufacturing_order?: boolean | StockLedger$manufacturing_orderArgs<ExtArgs>
    work_order?: boolean | StockLedger$work_orderArgs<ExtArgs>
  }
  export type StockLedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    manufacturing_order?: boolean | StockLedger$manufacturing_orderArgs<ExtArgs>
    work_order?: boolean | StockLedger$work_orderArgs<ExtArgs>
  }

  export type $StockLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockLedger"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      manufacturing_order: Prisma.$ManufacturingOrderPayload<ExtArgs> | null
      work_order: Prisma.$WorkOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ledger_id: string
      product_id: string
      movement_type: $Enums.MovementType
      quantity: number
      reference_type: $Enums.ReferenceType
      reference_id: string
      created_at: Date
      created_by: string
    }, ExtArgs["result"]["stockLedger"]>
    composites: {}
  }

  type StockLedgerGetPayload<S extends boolean | null | undefined | StockLedgerDefaultArgs> = $Result.GetResult<Prisma.$StockLedgerPayload, S>

  type StockLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockLedgerCountAggregateInputType | true
    }

  export interface StockLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockLedger'], meta: { name: 'StockLedger' } }
    /**
     * Find zero or one StockLedger that matches the filter.
     * @param {StockLedgerFindUniqueArgs} args - Arguments to find a StockLedger
     * @example
     * // Get one StockLedger
     * const stockLedger = await prisma.stockLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockLedgerFindUniqueArgs>(args: SelectSubset<T, StockLedgerFindUniqueArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockLedger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockLedgerFindUniqueOrThrowArgs} args - Arguments to find a StockLedger
     * @example
     * // Get one StockLedger
     * const stockLedger = await prisma.stockLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, StockLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerFindFirstArgs} args - Arguments to find a StockLedger
     * @example
     * // Get one StockLedger
     * const stockLedger = await prisma.stockLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockLedgerFindFirstArgs>(args?: SelectSubset<T, StockLedgerFindFirstArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerFindFirstOrThrowArgs} args - Arguments to find a StockLedger
     * @example
     * // Get one StockLedger
     * const stockLedger = await prisma.stockLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, StockLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockLedgers
     * const stockLedgers = await prisma.stockLedger.findMany()
     * 
     * // Get first 10 StockLedgers
     * const stockLedgers = await prisma.stockLedger.findMany({ take: 10 })
     * 
     * // Only select the `ledger_id`
     * const stockLedgerWithLedger_idOnly = await prisma.stockLedger.findMany({ select: { ledger_id: true } })
     * 
     */
    findMany<T extends StockLedgerFindManyArgs>(args?: SelectSubset<T, StockLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockLedger.
     * @param {StockLedgerCreateArgs} args - Arguments to create a StockLedger.
     * @example
     * // Create one StockLedger
     * const StockLedger = await prisma.stockLedger.create({
     *   data: {
     *     // ... data to create a StockLedger
     *   }
     * })
     * 
     */
    create<T extends StockLedgerCreateArgs>(args: SelectSubset<T, StockLedgerCreateArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockLedgers.
     * @param {StockLedgerCreateManyArgs} args - Arguments to create many StockLedgers.
     * @example
     * // Create many StockLedgers
     * const stockLedger = await prisma.stockLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockLedgerCreateManyArgs>(args?: SelectSubset<T, StockLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockLedgers and returns the data saved in the database.
     * @param {StockLedgerCreateManyAndReturnArgs} args - Arguments to create many StockLedgers.
     * @example
     * // Create many StockLedgers
     * const stockLedger = await prisma.stockLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockLedgers and only return the `ledger_id`
     * const stockLedgerWithLedger_idOnly = await prisma.stockLedger.createManyAndReturn({
     *   select: { ledger_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, StockLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockLedger.
     * @param {StockLedgerDeleteArgs} args - Arguments to delete one StockLedger.
     * @example
     * // Delete one StockLedger
     * const StockLedger = await prisma.stockLedger.delete({
     *   where: {
     *     // ... filter to delete one StockLedger
     *   }
     * })
     * 
     */
    delete<T extends StockLedgerDeleteArgs>(args: SelectSubset<T, StockLedgerDeleteArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockLedger.
     * @param {StockLedgerUpdateArgs} args - Arguments to update one StockLedger.
     * @example
     * // Update one StockLedger
     * const stockLedger = await prisma.stockLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockLedgerUpdateArgs>(args: SelectSubset<T, StockLedgerUpdateArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockLedgers.
     * @param {StockLedgerDeleteManyArgs} args - Arguments to filter StockLedgers to delete.
     * @example
     * // Delete a few StockLedgers
     * const { count } = await prisma.stockLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockLedgerDeleteManyArgs>(args?: SelectSubset<T, StockLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockLedgers
     * const stockLedger = await prisma.stockLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockLedgerUpdateManyArgs>(args: SelectSubset<T, StockLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockLedgers and returns the data updated in the database.
     * @param {StockLedgerUpdateManyAndReturnArgs} args - Arguments to update many StockLedgers.
     * @example
     * // Update many StockLedgers
     * const stockLedger = await prisma.stockLedger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockLedgers and only return the `ledger_id`
     * const stockLedgerWithLedger_idOnly = await prisma.stockLedger.updateManyAndReturn({
     *   select: { ledger_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockLedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, StockLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockLedger.
     * @param {StockLedgerUpsertArgs} args - Arguments to update or create a StockLedger.
     * @example
     * // Update or create a StockLedger
     * const stockLedger = await prisma.stockLedger.upsert({
     *   create: {
     *     // ... data to create a StockLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockLedger we want to update
     *   }
     * })
     */
    upsert<T extends StockLedgerUpsertArgs>(args: SelectSubset<T, StockLedgerUpsertArgs<ExtArgs>>): Prisma__StockLedgerClient<$Result.GetResult<Prisma.$StockLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerCountArgs} args - Arguments to filter StockLedgers to count.
     * @example
     * // Count the number of StockLedgers
     * const count = await prisma.stockLedger.count({
     *   where: {
     *     // ... the filter for the StockLedgers we want to count
     *   }
     * })
    **/
    count<T extends StockLedgerCountArgs>(
      args?: Subset<T, StockLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockLedgerAggregateArgs>(args: Subset<T, StockLedgerAggregateArgs>): Prisma.PrismaPromise<GetStockLedgerAggregateType<T>>

    /**
     * Group by StockLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockLedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockLedgerGroupByArgs['orderBy'] }
        : { orderBy?: StockLedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockLedger model
   */
  readonly fields: StockLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manufacturing_order<T extends StockLedger$manufacturing_orderArgs<ExtArgs> = {}>(args?: Subset<T, StockLedger$manufacturing_orderArgs<ExtArgs>>): Prisma__ManufacturingOrderClient<$Result.GetResult<Prisma.$ManufacturingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    work_order<T extends StockLedger$work_orderArgs<ExtArgs> = {}>(args?: Subset<T, StockLedger$work_orderArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockLedger model
   */
  interface StockLedgerFieldRefs {
    readonly ledger_id: FieldRef<"StockLedger", 'String'>
    readonly product_id: FieldRef<"StockLedger", 'String'>
    readonly movement_type: FieldRef<"StockLedger", 'MovementType'>
    readonly quantity: FieldRef<"StockLedger", 'Float'>
    readonly reference_type: FieldRef<"StockLedger", 'ReferenceType'>
    readonly reference_id: FieldRef<"StockLedger", 'String'>
    readonly created_at: FieldRef<"StockLedger", 'DateTime'>
    readonly created_by: FieldRef<"StockLedger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockLedger findUnique
   */
  export type StockLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * Filter, which StockLedger to fetch.
     */
    where: StockLedgerWhereUniqueInput
  }

  /**
   * StockLedger findUniqueOrThrow
   */
  export type StockLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * Filter, which StockLedger to fetch.
     */
    where: StockLedgerWhereUniqueInput
  }

  /**
   * StockLedger findFirst
   */
  export type StockLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * Filter, which StockLedger to fetch.
     */
    where?: StockLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLedgers to fetch.
     */
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockLedgers.
     */
    cursor?: StockLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockLedgers.
     */
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * StockLedger findFirstOrThrow
   */
  export type StockLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * Filter, which StockLedger to fetch.
     */
    where?: StockLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLedgers to fetch.
     */
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockLedgers.
     */
    cursor?: StockLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockLedgers.
     */
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * StockLedger findMany
   */
  export type StockLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * Filter, which StockLedgers to fetch.
     */
    where?: StockLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockLedgers to fetch.
     */
    orderBy?: StockLedgerOrderByWithRelationInput | StockLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockLedgers.
     */
    cursor?: StockLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockLedgers.
     */
    skip?: number
    distinct?: StockLedgerScalarFieldEnum | StockLedgerScalarFieldEnum[]
  }

  /**
   * StockLedger create
   */
  export type StockLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a StockLedger.
     */
    data: XOR<StockLedgerCreateInput, StockLedgerUncheckedCreateInput>
  }

  /**
   * StockLedger createMany
   */
  export type StockLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockLedgers.
     */
    data: StockLedgerCreateManyInput | StockLedgerCreateManyInput[]
  }

  /**
   * StockLedger createManyAndReturn
   */
  export type StockLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * The data used to create many StockLedgers.
     */
    data: StockLedgerCreateManyInput | StockLedgerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockLedger update
   */
  export type StockLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a StockLedger.
     */
    data: XOR<StockLedgerUpdateInput, StockLedgerUncheckedUpdateInput>
    /**
     * Choose, which StockLedger to update.
     */
    where: StockLedgerWhereUniqueInput
  }

  /**
   * StockLedger updateMany
   */
  export type StockLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockLedgers.
     */
    data: XOR<StockLedgerUpdateManyMutationInput, StockLedgerUncheckedUpdateManyInput>
    /**
     * Filter which StockLedgers to update
     */
    where?: StockLedgerWhereInput
    /**
     * Limit how many StockLedgers to update.
     */
    limit?: number
  }

  /**
   * StockLedger updateManyAndReturn
   */
  export type StockLedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * The data used to update StockLedgers.
     */
    data: XOR<StockLedgerUpdateManyMutationInput, StockLedgerUncheckedUpdateManyInput>
    /**
     * Filter which StockLedgers to update
     */
    where?: StockLedgerWhereInput
    /**
     * Limit how many StockLedgers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockLedger upsert
   */
  export type StockLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the StockLedger to update in case it exists.
     */
    where: StockLedgerWhereUniqueInput
    /**
     * In case the StockLedger found by the `where` argument doesn't exist, create a new StockLedger with this data.
     */
    create: XOR<StockLedgerCreateInput, StockLedgerUncheckedCreateInput>
    /**
     * In case the StockLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockLedgerUpdateInput, StockLedgerUncheckedUpdateInput>
  }

  /**
   * StockLedger delete
   */
  export type StockLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
    /**
     * Filter which StockLedger to delete.
     */
    where: StockLedgerWhereUniqueInput
  }

  /**
   * StockLedger deleteMany
   */
  export type StockLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockLedgers to delete
     */
    where?: StockLedgerWhereInput
    /**
     * Limit how many StockLedgers to delete.
     */
    limit?: number
  }

  /**
   * StockLedger.manufacturing_order
   */
  export type StockLedger$manufacturing_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturingOrder
     */
    select?: ManufacturingOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManufacturingOrder
     */
    omit?: ManufacturingOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturingOrderInclude<ExtArgs> | null
    where?: ManufacturingOrderWhereInput
  }

  /**
   * StockLedger.work_order
   */
  export type StockLedger$work_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
  }

  /**
   * StockLedger without action
   */
  export type StockLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockLedger
     */
    select?: StockLedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockLedger
     */
    omit?: StockLedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockLedgerInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    report_id: string | null
    user_id: string | null
    report_type: $Enums.ReportType | null
    generated_at: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    report_id: string | null
    user_id: string | null
    report_type: $Enums.ReportType | null
    generated_at: Date | null
  }

  export type ReportCountAggregateOutputType = {
    report_id: number
    user_id: number
    report_type: number
    data: number
    generated_at: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    report_id?: true
    user_id?: true
    report_type?: true
    generated_at?: true
  }

  export type ReportMaxAggregateInputType = {
    report_id?: true
    user_id?: true
    report_type?: true
    generated_at?: true
  }

  export type ReportCountAggregateInputType = {
    report_id?: true
    user_id?: true
    report_type?: true
    data?: true
    generated_at?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    report_id: string
    user_id: string
    report_type: $Enums.ReportType
    data: JsonValue
    generated_at: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    user_id?: boolean
    report_type?: boolean
    data?: boolean
    generated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    user_id?: boolean
    report_type?: boolean
    data?: boolean
    generated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    user_id?: boolean
    report_type?: boolean
    data?: boolean
    generated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    report_id?: boolean
    user_id?: boolean
    report_type?: boolean
    data?: boolean
    generated_at?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"report_id" | "user_id" | "report_type" | "data" | "generated_at", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      report_id: string
      user_id: string
      report_type: $Enums.ReportType
      data: Prisma.JsonValue
      generated_at: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `report_id`
     * const reportWithReport_idOnly = await prisma.report.findMany({ select: { report_id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `report_id`
     * const reportWithReport_idOnly = await prisma.report.createManyAndReturn({
     *   select: { report_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `report_id`
     * const reportWithReport_idOnly = await prisma.report.updateManyAndReturn({
     *   select: { report_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly report_id: FieldRef<"Report", 'String'>
    readonly user_id: FieldRef<"Report", 'String'>
    readonly report_type: FieldRef<"Report", 'ReportType'>
    readonly data: FieldRef<"Report", 'Json'>
    readonly generated_at: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    log_id: string | null
    user_id: string | null
    action: string | null
    timestamp: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    log_id: string | null
    user_id: string | null
    action: string | null
    timestamp: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    log_id: number
    user_id: number
    action: number
    timestamp: number
    details: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    log_id?: true
    user_id?: true
    action?: true
    timestamp?: true
  }

  export type AuditLogMaxAggregateInputType = {
    log_id?: true
    user_id?: true
    action?: true
    timestamp?: true
  }

  export type AuditLogCountAggregateInputType = {
    log_id?: true
    user_id?: true
    action?: true
    timestamp?: true
    details?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    log_id: string
    user_id: string
    action: string
    timestamp: Date
    details: JsonValue | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    timestamp?: boolean
    details?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    timestamp?: boolean
    details?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    timestamp?: boolean
    details?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    log_id?: boolean
    user_id?: boolean
    action?: boolean
    timestamp?: boolean
    details?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "user_id" | "action" | "timestamp" | "details", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: string
      user_id: string
      action: string
      timestamp: Date
      details: Prisma.JsonValue | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const auditLogWithLog_idOnly = await prisma.auditLog.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `log_id`
     * const auditLogWithLog_idOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `log_id`
     * const auditLogWithLog_idOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly log_id: FieldRef<"AuditLog", 'String'>
    readonly user_id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
    readonly details: FieldRef<"AuditLog", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    phone: 'phone',
    profile_picture: 'profile_picture',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    product_id: 'product_id',
    product_name: 'product_name',
    type: 'type',
    unit_of_measure: 'unit_of_measure',
    current_stock: 'current_stock',
    cost_per_unit: 'cost_per_unit',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BOMScalarFieldEnum: {
    bom_id: 'bom_id',
    product_id: 'product_id',
    component_id: 'component_id',
    quantity_required: 'quantity_required',
    operation_sequence: 'operation_sequence',
    created_at: 'created_at'
  };

  export type BOMScalarFieldEnum = (typeof BOMScalarFieldEnum)[keyof typeof BOMScalarFieldEnum]


  export const ManufacturingOrderScalarFieldEnum: {
    mo_id: 'mo_id',
    product_id: 'product_id',
    quantity: 'quantity',
    state: 'state',
    status: 'status',
    scheduled_start: 'scheduled_start',
    scheduled_end: 'scheduled_end',
    actual_start: 'actual_start',
    actual_end: 'actual_end',
    created_by: 'created_by',
    assigned_to: 'assigned_to',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ManufacturingOrderScalarFieldEnum = (typeof ManufacturingOrderScalarFieldEnum)[keyof typeof ManufacturingOrderScalarFieldEnum]


  export const WorkOrderScalarFieldEnum: {
    wo_id: 'wo_id',
    mo_id: 'mo_id',
    operation_name: 'operation_name',
    work_center_id: 'work_center_id',
    assigned_to: 'assigned_to',
    status: 'status',
    comments: 'comments',
    planned_time: 'planned_time',
    actual_time: 'actual_time',
    started_at: 'started_at',
    completed_at: 'completed_at'
  };

  export type WorkOrderScalarFieldEnum = (typeof WorkOrderScalarFieldEnum)[keyof typeof WorkOrderScalarFieldEnum]


  export const WorkCenterScalarFieldEnum: {
    work_center_id: 'work_center_id',
    name: 'name',
    cost_per_hour: 'cost_per_hour',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WorkCenterScalarFieldEnum = (typeof WorkCenterScalarFieldEnum)[keyof typeof WorkCenterScalarFieldEnum]


  export const StockLedgerScalarFieldEnum: {
    ledger_id: 'ledger_id',
    product_id: 'product_id',
    movement_type: 'movement_type',
    quantity: 'quantity',
    reference_type: 'reference_type',
    reference_id: 'reference_id',
    created_at: 'created_at',
    created_by: 'created_by'
  };

  export type StockLedgerScalarFieldEnum = (typeof StockLedgerScalarFieldEnum)[keyof typeof StockLedgerScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    report_id: 'report_id',
    user_id: 'user_id',
    report_type: 'report_type',
    data: 'data',
    generated_at: 'generated_at'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    log_id: 'log_id',
    user_id: 'user_id',
    action: 'action',
    timestamp: 'timestamp',
    details: 'details'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ProductType'
   */
  export type EnumProductTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductType'>
    


  /**
   * Reference to a field of type 'UnitType'
   */
  export type EnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ComponentState'
   */
  export type EnumComponentStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComponentState'>
    


  /**
   * Reference to a field of type 'ManufacturingOrderStatus'
   */
  export type EnumManufacturingOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManufacturingOrderStatus'>
    


  /**
   * Reference to a field of type 'WorkOrderStatus'
   */
  export type EnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'ReferenceType'
   */
  export type EnumReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferenceType'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_mos?: ManufacturingOrderListRelationFilter
    assigned_mos?: ManufacturingOrderListRelationFilter
    assigned_wos?: WorkOrderListRelationFilter
    stock_ledgers?: StockLedgerListRelationFilter
    reports?: ReportListRelationFilter
    audit_logs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_mos?: ManufacturingOrderOrderByRelationAggregateInput
    assigned_mos?: ManufacturingOrderOrderByRelationAggregateInput
    assigned_wos?: WorkOrderOrderByRelationAggregateInput
    stock_ledgers?: StockLedgerOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    audit_logs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_mos?: ManufacturingOrderListRelationFilter
    assigned_mos?: ManufacturingOrderListRelationFilter
    assigned_wos?: WorkOrderListRelationFilter
    stock_ledgers?: StockLedgerListRelationFilter
    reports?: ReportListRelationFilter
    audit_logs?: AuditLogListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    profile_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_id?: StringFilter<"Product"> | string
    product_name?: StringFilter<"Product"> | string
    type?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFilter<"Product"> | $Enums.UnitType
    current_stock?: FloatFilter<"Product"> | number
    cost_per_unit?: FloatFilter<"Product"> | number
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    boms_as_product?: BOMListRelationFilter
    boms_as_component?: BOMListRelationFilter
    manufacturing_orders?: ManufacturingOrderListRelationFilter
    stock_ledgers?: StockLedgerListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    type?: SortOrder
    unit_of_measure?: SortOrder
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    boms_as_product?: BOMOrderByRelationAggregateInput
    boms_as_component?: BOMOrderByRelationAggregateInput
    manufacturing_orders?: ManufacturingOrderOrderByRelationAggregateInput
    stock_ledgers?: StockLedgerOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    product_id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    product_name?: StringFilter<"Product"> | string
    type?: EnumProductTypeFilter<"Product"> | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFilter<"Product"> | $Enums.UnitType
    current_stock?: FloatFilter<"Product"> | number
    cost_per_unit?: FloatFilter<"Product"> | number
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    boms_as_product?: BOMListRelationFilter
    boms_as_component?: BOMListRelationFilter
    manufacturing_orders?: ManufacturingOrderListRelationFilter
    stock_ledgers?: StockLedgerListRelationFilter
  }, "product_id">

  export type ProductOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    type?: SortOrder
    unit_of_measure?: SortOrder
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    product_id?: StringWithAggregatesFilter<"Product"> | string
    product_name?: StringWithAggregatesFilter<"Product"> | string
    type?: EnumProductTypeWithAggregatesFilter<"Product"> | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeWithAggregatesFilter<"Product"> | $Enums.UnitType
    current_stock?: FloatWithAggregatesFilter<"Product"> | number
    cost_per_unit?: FloatWithAggregatesFilter<"Product"> | number
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type BOMWhereInput = {
    AND?: BOMWhereInput | BOMWhereInput[]
    OR?: BOMWhereInput[]
    NOT?: BOMWhereInput | BOMWhereInput[]
    bom_id?: StringFilter<"BOM"> | string
    product_id?: StringFilter<"BOM"> | string
    component_id?: StringFilter<"BOM"> | string
    quantity_required?: FloatFilter<"BOM"> | number
    operation_sequence?: StringFilter<"BOM"> | string
    created_at?: DateTimeFilter<"BOM"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    component?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type BOMOrderByWithRelationInput = {
    bom_id?: SortOrder
    product_id?: SortOrder
    component_id?: SortOrder
    quantity_required?: SortOrder
    operation_sequence?: SortOrder
    created_at?: SortOrder
    product?: ProductOrderByWithRelationInput
    component?: ProductOrderByWithRelationInput
  }

  export type BOMWhereUniqueInput = Prisma.AtLeast<{
    bom_id?: string
    AND?: BOMWhereInput | BOMWhereInput[]
    OR?: BOMWhereInput[]
    NOT?: BOMWhereInput | BOMWhereInput[]
    product_id?: StringFilter<"BOM"> | string
    component_id?: StringFilter<"BOM"> | string
    quantity_required?: FloatFilter<"BOM"> | number
    operation_sequence?: StringFilter<"BOM"> | string
    created_at?: DateTimeFilter<"BOM"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    component?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "bom_id">

  export type BOMOrderByWithAggregationInput = {
    bom_id?: SortOrder
    product_id?: SortOrder
    component_id?: SortOrder
    quantity_required?: SortOrder
    operation_sequence?: SortOrder
    created_at?: SortOrder
    _count?: BOMCountOrderByAggregateInput
    _avg?: BOMAvgOrderByAggregateInput
    _max?: BOMMaxOrderByAggregateInput
    _min?: BOMMinOrderByAggregateInput
    _sum?: BOMSumOrderByAggregateInput
  }

  export type BOMScalarWhereWithAggregatesInput = {
    AND?: BOMScalarWhereWithAggregatesInput | BOMScalarWhereWithAggregatesInput[]
    OR?: BOMScalarWhereWithAggregatesInput[]
    NOT?: BOMScalarWhereWithAggregatesInput | BOMScalarWhereWithAggregatesInput[]
    bom_id?: StringWithAggregatesFilter<"BOM"> | string
    product_id?: StringWithAggregatesFilter<"BOM"> | string
    component_id?: StringWithAggregatesFilter<"BOM"> | string
    quantity_required?: FloatWithAggregatesFilter<"BOM"> | number
    operation_sequence?: StringWithAggregatesFilter<"BOM"> | string
    created_at?: DateTimeWithAggregatesFilter<"BOM"> | Date | string
  }

  export type ManufacturingOrderWhereInput = {
    AND?: ManufacturingOrderWhereInput | ManufacturingOrderWhereInput[]
    OR?: ManufacturingOrderWhereInput[]
    NOT?: ManufacturingOrderWhereInput | ManufacturingOrderWhereInput[]
    mo_id?: StringFilter<"ManufacturingOrder"> | string
    product_id?: StringFilter<"ManufacturingOrder"> | string
    quantity?: FloatFilter<"ManufacturingOrder"> | number
    state?: EnumComponentStateFilter<"ManufacturingOrder"> | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFilter<"ManufacturingOrder"> | $Enums.ManufacturingOrderStatus
    scheduled_start?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    scheduled_end?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    created_by?: StringFilter<"ManufacturingOrder"> | string
    assigned_to?: StringNullableFilter<"ManufacturingOrder"> | string | null
    created_at?: DateTimeFilter<"ManufacturingOrder"> | Date | string
    updated_at?: DateTimeFilter<"ManufacturingOrder"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    work_orders?: WorkOrderListRelationFilter
    stock_ledgers?: StockLedgerListRelationFilter
  }

  export type ManufacturingOrderOrderByWithRelationInput = {
    mo_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    state?: SortOrder
    status?: SortOrder
    scheduled_start?: SortOrderInput | SortOrder
    scheduled_end?: SortOrderInput | SortOrder
    actual_start?: SortOrderInput | SortOrder
    actual_end?: SortOrderInput | SortOrder
    created_by?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
    work_orders?: WorkOrderOrderByRelationAggregateInput
    stock_ledgers?: StockLedgerOrderByRelationAggregateInput
  }

  export type ManufacturingOrderWhereUniqueInput = Prisma.AtLeast<{
    mo_id?: string
    AND?: ManufacturingOrderWhereInput | ManufacturingOrderWhereInput[]
    OR?: ManufacturingOrderWhereInput[]
    NOT?: ManufacturingOrderWhereInput | ManufacturingOrderWhereInput[]
    product_id?: StringFilter<"ManufacturingOrder"> | string
    quantity?: FloatFilter<"ManufacturingOrder"> | number
    state?: EnumComponentStateFilter<"ManufacturingOrder"> | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFilter<"ManufacturingOrder"> | $Enums.ManufacturingOrderStatus
    scheduled_start?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    scheduled_end?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    created_by?: StringFilter<"ManufacturingOrder"> | string
    assigned_to?: StringNullableFilter<"ManufacturingOrder"> | string | null
    created_at?: DateTimeFilter<"ManufacturingOrder"> | Date | string
    updated_at?: DateTimeFilter<"ManufacturingOrder"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    work_orders?: WorkOrderListRelationFilter
    stock_ledgers?: StockLedgerListRelationFilter
  }, "mo_id">

  export type ManufacturingOrderOrderByWithAggregationInput = {
    mo_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    state?: SortOrder
    status?: SortOrder
    scheduled_start?: SortOrderInput | SortOrder
    scheduled_end?: SortOrderInput | SortOrder
    actual_start?: SortOrderInput | SortOrder
    actual_end?: SortOrderInput | SortOrder
    created_by?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ManufacturingOrderCountOrderByAggregateInput
    _avg?: ManufacturingOrderAvgOrderByAggregateInput
    _max?: ManufacturingOrderMaxOrderByAggregateInput
    _min?: ManufacturingOrderMinOrderByAggregateInput
    _sum?: ManufacturingOrderSumOrderByAggregateInput
  }

  export type ManufacturingOrderScalarWhereWithAggregatesInput = {
    AND?: ManufacturingOrderScalarWhereWithAggregatesInput | ManufacturingOrderScalarWhereWithAggregatesInput[]
    OR?: ManufacturingOrderScalarWhereWithAggregatesInput[]
    NOT?: ManufacturingOrderScalarWhereWithAggregatesInput | ManufacturingOrderScalarWhereWithAggregatesInput[]
    mo_id?: StringWithAggregatesFilter<"ManufacturingOrder"> | string
    product_id?: StringWithAggregatesFilter<"ManufacturingOrder"> | string
    quantity?: FloatWithAggregatesFilter<"ManufacturingOrder"> | number
    state?: EnumComponentStateWithAggregatesFilter<"ManufacturingOrder"> | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusWithAggregatesFilter<"ManufacturingOrder"> | $Enums.ManufacturingOrderStatus
    scheduled_start?: DateTimeNullableWithAggregatesFilter<"ManufacturingOrder"> | Date | string | null
    scheduled_end?: DateTimeNullableWithAggregatesFilter<"ManufacturingOrder"> | Date | string | null
    actual_start?: DateTimeNullableWithAggregatesFilter<"ManufacturingOrder"> | Date | string | null
    actual_end?: DateTimeNullableWithAggregatesFilter<"ManufacturingOrder"> | Date | string | null
    created_by?: StringWithAggregatesFilter<"ManufacturingOrder"> | string
    assigned_to?: StringNullableWithAggregatesFilter<"ManufacturingOrder"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ManufacturingOrder"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ManufacturingOrder"> | Date | string
  }

  export type WorkOrderWhereInput = {
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    wo_id?: StringFilter<"WorkOrder"> | string
    mo_id?: StringFilter<"WorkOrder"> | string
    operation_name?: StringFilter<"WorkOrder"> | string
    work_center_id?: StringFilter<"WorkOrder"> | string
    assigned_to?: StringNullableFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    comments?: StringNullableFilter<"WorkOrder"> | string | null
    planned_time?: IntNullableFilter<"WorkOrder"> | number | null
    actual_time?: IntNullableFilter<"WorkOrder"> | number | null
    started_at?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    manufacturing_order?: XOR<ManufacturingOrderScalarRelationFilter, ManufacturingOrderWhereInput>
    work_center?: XOR<WorkCenterScalarRelationFilter, WorkCenterWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    stock_ledgers?: StockLedgerListRelationFilter
  }

  export type WorkOrderOrderByWithRelationInput = {
    wo_id?: SortOrder
    mo_id?: SortOrder
    operation_name?: SortOrder
    work_center_id?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    planned_time?: SortOrderInput | SortOrder
    actual_time?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    manufacturing_order?: ManufacturingOrderOrderByWithRelationInput
    work_center?: WorkCenterOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
    stock_ledgers?: StockLedgerOrderByRelationAggregateInput
  }

  export type WorkOrderWhereUniqueInput = Prisma.AtLeast<{
    wo_id?: string
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    mo_id?: StringFilter<"WorkOrder"> | string
    operation_name?: StringFilter<"WorkOrder"> | string
    work_center_id?: StringFilter<"WorkOrder"> | string
    assigned_to?: StringNullableFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    comments?: StringNullableFilter<"WorkOrder"> | string | null
    planned_time?: IntNullableFilter<"WorkOrder"> | number | null
    actual_time?: IntNullableFilter<"WorkOrder"> | number | null
    started_at?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    manufacturing_order?: XOR<ManufacturingOrderScalarRelationFilter, ManufacturingOrderWhereInput>
    work_center?: XOR<WorkCenterScalarRelationFilter, WorkCenterWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    stock_ledgers?: StockLedgerListRelationFilter
  }, "wo_id">

  export type WorkOrderOrderByWithAggregationInput = {
    wo_id?: SortOrder
    mo_id?: SortOrder
    operation_name?: SortOrder
    work_center_id?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    planned_time?: SortOrderInput | SortOrder
    actual_time?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: WorkOrderCountOrderByAggregateInput
    _avg?: WorkOrderAvgOrderByAggregateInput
    _max?: WorkOrderMaxOrderByAggregateInput
    _min?: WorkOrderMinOrderByAggregateInput
    _sum?: WorkOrderSumOrderByAggregateInput
  }

  export type WorkOrderScalarWhereWithAggregatesInput = {
    AND?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    OR?: WorkOrderScalarWhereWithAggregatesInput[]
    NOT?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    wo_id?: StringWithAggregatesFilter<"WorkOrder"> | string
    mo_id?: StringWithAggregatesFilter<"WorkOrder"> | string
    operation_name?: StringWithAggregatesFilter<"WorkOrder"> | string
    work_center_id?: StringWithAggregatesFilter<"WorkOrder"> | string
    assigned_to?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusWithAggregatesFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    comments?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    planned_time?: IntNullableWithAggregatesFilter<"WorkOrder"> | number | null
    actual_time?: IntNullableWithAggregatesFilter<"WorkOrder"> | number | null
    started_at?: DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
  }

  export type WorkCenterWhereInput = {
    AND?: WorkCenterWhereInput | WorkCenterWhereInput[]
    OR?: WorkCenterWhereInput[]
    NOT?: WorkCenterWhereInput | WorkCenterWhereInput[]
    work_center_id?: StringFilter<"WorkCenter"> | string
    name?: StringFilter<"WorkCenter"> | string
    cost_per_hour?: FloatFilter<"WorkCenter"> | number
    created_at?: DateTimeFilter<"WorkCenter"> | Date | string
    updated_at?: DateTimeFilter<"WorkCenter"> | Date | string
    work_orders?: WorkOrderListRelationFilter
  }

  export type WorkCenterOrderByWithRelationInput = {
    work_center_id?: SortOrder
    name?: SortOrder
    cost_per_hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    work_orders?: WorkOrderOrderByRelationAggregateInput
  }

  export type WorkCenterWhereUniqueInput = Prisma.AtLeast<{
    work_center_id?: string
    AND?: WorkCenterWhereInput | WorkCenterWhereInput[]
    OR?: WorkCenterWhereInput[]
    NOT?: WorkCenterWhereInput | WorkCenterWhereInput[]
    name?: StringFilter<"WorkCenter"> | string
    cost_per_hour?: FloatFilter<"WorkCenter"> | number
    created_at?: DateTimeFilter<"WorkCenter"> | Date | string
    updated_at?: DateTimeFilter<"WorkCenter"> | Date | string
    work_orders?: WorkOrderListRelationFilter
  }, "work_center_id">

  export type WorkCenterOrderByWithAggregationInput = {
    work_center_id?: SortOrder
    name?: SortOrder
    cost_per_hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WorkCenterCountOrderByAggregateInput
    _avg?: WorkCenterAvgOrderByAggregateInput
    _max?: WorkCenterMaxOrderByAggregateInput
    _min?: WorkCenterMinOrderByAggregateInput
    _sum?: WorkCenterSumOrderByAggregateInput
  }

  export type WorkCenterScalarWhereWithAggregatesInput = {
    AND?: WorkCenterScalarWhereWithAggregatesInput | WorkCenterScalarWhereWithAggregatesInput[]
    OR?: WorkCenterScalarWhereWithAggregatesInput[]
    NOT?: WorkCenterScalarWhereWithAggregatesInput | WorkCenterScalarWhereWithAggregatesInput[]
    work_center_id?: StringWithAggregatesFilter<"WorkCenter"> | string
    name?: StringWithAggregatesFilter<"WorkCenter"> | string
    cost_per_hour?: FloatWithAggregatesFilter<"WorkCenter"> | number
    created_at?: DateTimeWithAggregatesFilter<"WorkCenter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WorkCenter"> | Date | string
  }

  export type StockLedgerWhereInput = {
    AND?: StockLedgerWhereInput | StockLedgerWhereInput[]
    OR?: StockLedgerWhereInput[]
    NOT?: StockLedgerWhereInput | StockLedgerWhereInput[]
    ledger_id?: StringFilter<"StockLedger"> | string
    product_id?: StringFilter<"StockLedger"> | string
    movement_type?: EnumMovementTypeFilter<"StockLedger"> | $Enums.MovementType
    quantity?: FloatFilter<"StockLedger"> | number
    reference_type?: EnumReferenceTypeFilter<"StockLedger"> | $Enums.ReferenceType
    reference_id?: StringFilter<"StockLedger"> | string
    created_at?: DateTimeFilter<"StockLedger"> | Date | string
    created_by?: StringFilter<"StockLedger"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    manufacturing_order?: XOR<ManufacturingOrderNullableScalarRelationFilter, ManufacturingOrderWhereInput> | null
    work_order?: XOR<WorkOrderNullableScalarRelationFilter, WorkOrderWhereInput> | null
  }

  export type StockLedgerOrderByWithRelationInput = {
    ledger_id?: SortOrder
    product_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    product?: ProductOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    manufacturing_order?: ManufacturingOrderOrderByWithRelationInput
    work_order?: WorkOrderOrderByWithRelationInput
  }

  export type StockLedgerWhereUniqueInput = Prisma.AtLeast<{
    ledger_id?: string
    AND?: StockLedgerWhereInput | StockLedgerWhereInput[]
    OR?: StockLedgerWhereInput[]
    NOT?: StockLedgerWhereInput | StockLedgerWhereInput[]
    product_id?: StringFilter<"StockLedger"> | string
    movement_type?: EnumMovementTypeFilter<"StockLedger"> | $Enums.MovementType
    quantity?: FloatFilter<"StockLedger"> | number
    reference_type?: EnumReferenceTypeFilter<"StockLedger"> | $Enums.ReferenceType
    reference_id?: StringFilter<"StockLedger"> | string
    created_at?: DateTimeFilter<"StockLedger"> | Date | string
    created_by?: StringFilter<"StockLedger"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    manufacturing_order?: XOR<ManufacturingOrderNullableScalarRelationFilter, ManufacturingOrderWhereInput> | null
    work_order?: XOR<WorkOrderNullableScalarRelationFilter, WorkOrderWhereInput> | null
  }, "ledger_id">

  export type StockLedgerOrderByWithAggregationInput = {
    ledger_id?: SortOrder
    product_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    _count?: StockLedgerCountOrderByAggregateInput
    _avg?: StockLedgerAvgOrderByAggregateInput
    _max?: StockLedgerMaxOrderByAggregateInput
    _min?: StockLedgerMinOrderByAggregateInput
    _sum?: StockLedgerSumOrderByAggregateInput
  }

  export type StockLedgerScalarWhereWithAggregatesInput = {
    AND?: StockLedgerScalarWhereWithAggregatesInput | StockLedgerScalarWhereWithAggregatesInput[]
    OR?: StockLedgerScalarWhereWithAggregatesInput[]
    NOT?: StockLedgerScalarWhereWithAggregatesInput | StockLedgerScalarWhereWithAggregatesInput[]
    ledger_id?: StringWithAggregatesFilter<"StockLedger"> | string
    product_id?: StringWithAggregatesFilter<"StockLedger"> | string
    movement_type?: EnumMovementTypeWithAggregatesFilter<"StockLedger"> | $Enums.MovementType
    quantity?: FloatWithAggregatesFilter<"StockLedger"> | number
    reference_type?: EnumReferenceTypeWithAggregatesFilter<"StockLedger"> | $Enums.ReferenceType
    reference_id?: StringWithAggregatesFilter<"StockLedger"> | string
    created_at?: DateTimeWithAggregatesFilter<"StockLedger"> | Date | string
    created_by?: StringWithAggregatesFilter<"StockLedger"> | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    report_id?: StringFilter<"Report"> | string
    user_id?: StringFilter<"Report"> | string
    report_type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    data?: JsonFilter<"Report">
    generated_at?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    report_id?: SortOrder
    user_id?: SortOrder
    report_type?: SortOrder
    data?: SortOrder
    generated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    report_id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    user_id?: StringFilter<"Report"> | string
    report_type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    data?: JsonFilter<"Report">
    generated_at?: DateTimeFilter<"Report"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "report_id">

  export type ReportOrderByWithAggregationInput = {
    report_id?: SortOrder
    user_id?: SortOrder
    report_type?: SortOrder
    data?: SortOrder
    generated_at?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    report_id?: StringWithAggregatesFilter<"Report"> | string
    user_id?: StringWithAggregatesFilter<"Report"> | string
    report_type?: EnumReportTypeWithAggregatesFilter<"Report"> | $Enums.ReportType
    data?: JsonWithAggregatesFilter<"Report">
    generated_at?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    log_id?: StringFilter<"AuditLog"> | string
    user_id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    details?: JsonNullableFilter<"AuditLog">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    details?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    log_id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    user_id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    details?: JsonNullableFilter<"AuditLog">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "log_id">

  export type AuditLogOrderByWithAggregationInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    log_id?: StringWithAggregatesFilter<"AuditLog"> | string
    user_id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
  }

  export type UserCreateInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutCreatorInput
    reports?: ReportCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutCreatorInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutCreatorNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMCreateNestedManyWithoutProductInput
    boms_as_component?: BOMCreateNestedManyWithoutComponentInput
    manufacturing_orders?: ManufacturingOrderCreateNestedManyWithoutProductInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMUncheckedCreateNestedManyWithoutProductInput
    boms_as_component?: BOMUncheckedCreateNestedManyWithoutComponentInput
    manufacturing_orders?: ManufacturingOrderUncheckedCreateNestedManyWithoutProductInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUpdateManyWithoutProductNestedInput
    boms_as_component?: BOMUpdateManyWithoutComponentNestedInput
    manufacturing_orders?: ManufacturingOrderUpdateManyWithoutProductNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUncheckedUpdateManyWithoutProductNestedInput
    boms_as_component?: BOMUncheckedUpdateManyWithoutComponentNestedInput
    manufacturing_orders?: ManufacturingOrderUncheckedUpdateManyWithoutProductNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMCreateInput = {
    bom_id?: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutBoms_as_productInput
    component: ProductCreateNestedOneWithoutBoms_as_componentInput
  }

  export type BOMUncheckedCreateInput = {
    bom_id?: string
    product_id: string
    component_id: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
  }

  export type BOMUpdateInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBoms_as_productNestedInput
    component?: ProductUpdateOneRequiredWithoutBoms_as_componentNestedInput
  }

  export type BOMUncheckedUpdateInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    component_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMCreateManyInput = {
    bom_id?: string
    product_id: string
    component_id: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
  }

  export type BOMUpdateManyMutationInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMUncheckedUpdateManyInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    component_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturingOrderCreateInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutManufacturing_ordersInput
    creator: UserCreateNestedOneWithoutCreated_mosInput
    assignee?: UserCreateNestedOneWithoutAssigned_mosInput
    work_orders?: WorkOrderCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUncheckedCreateInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderUncheckedCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUpdateInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutManufacturing_ordersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_mosNestedInput
    assignee?: UserUpdateOneWithoutAssigned_mosNestedInput
    work_orders?: WorkOrderUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUncheckedUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderCreateManyInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ManufacturingOrderUpdateManyMutationInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturingOrderUncheckedUpdateManyInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderCreateInput = {
    wo_id?: string
    operation_name: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    manufacturing_order: ManufacturingOrderCreateNestedOneWithoutWork_ordersInput
    work_center: WorkCenterCreateNestedOneWithoutWork_ordersInput
    assignee?: UserCreateNestedOneWithoutAssigned_wosInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderUncheckedCreateInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    work_center_id: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderUpdateInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturing_order?: ManufacturingOrderUpdateOneRequiredWithoutWork_ordersNestedInput
    work_center?: WorkCenterUpdateOneRequiredWithoutWork_ordersNestedInput
    assignee?: UserUpdateOneWithoutAssigned_wosNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderCreateManyInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    work_center_id: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type WorkOrderUpdateManyMutationInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkOrderUncheckedUpdateManyInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkCenterCreateInput = {
    work_center_id?: string
    name: string
    cost_per_hour: number
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderCreateNestedManyWithoutWork_centerInput
  }

  export type WorkCenterUncheckedCreateInput = {
    work_center_id?: string
    name: string
    cost_per_hour: number
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderUncheckedCreateNestedManyWithoutWork_centerInput
  }

  export type WorkCenterUpdateInput = {
    work_center_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost_per_hour?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUpdateManyWithoutWork_centerNestedInput
  }

  export type WorkCenterUncheckedUpdateInput = {
    work_center_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost_per_hour?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUncheckedUpdateManyWithoutWork_centerNestedInput
  }

  export type WorkCenterCreateManyInput = {
    work_center_id?: string
    name: string
    cost_per_hour: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkCenterUpdateManyMutationInput = {
    work_center_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost_per_hour?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCenterUncheckedUpdateManyInput = {
    work_center_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost_per_hour?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLedgerCreateInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutStock_ledgersInput
    creator: UserCreateNestedOneWithoutStock_ledgersInput
    manufacturing_order?: ManufacturingOrderCreateNestedOneWithoutStock_ledgersInput
    work_order?: WorkOrderCreateNestedOneWithoutStock_ledgersInput
  }

  export type StockLedgerUncheckedCreateInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at?: Date | string
    created_by: string
  }

  export type StockLedgerUpdateInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStock_ledgersNestedInput
    creator?: UserUpdateOneRequiredWithoutStock_ledgersNestedInput
    manufacturing_order?: ManufacturingOrderUpdateOneWithoutStock_ledgersNestedInput
    work_order?: WorkOrderUpdateOneWithoutStock_ledgersNestedInput
  }

  export type StockLedgerUncheckedUpdateInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type StockLedgerCreateManyInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at?: Date | string
    created_by: string
  }

  export type StockLedgerUpdateManyMutationInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLedgerUncheckedUpdateManyInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type ReportCreateInput = {
    report_id?: string
    report_type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    generated_at?: Date | string
    user: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    report_id?: string
    user_id: string
    report_type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    generated_at?: Date | string
  }

  export type ReportUpdateInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    report_id?: string
    user_id: string
    report_type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    generated_at?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    log_id?: string
    action: string
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutAudit_logsInput
  }

  export type AuditLogUncheckedCreateInput = {
    log_id?: string
    user_id: string
    action: string
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogUpdateInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutAudit_logsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogCreateManyInput = {
    log_id?: string
    user_id: string
    action: string
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogUpdateManyMutationInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogUncheckedUpdateManyInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ManufacturingOrderListRelationFilter = {
    every?: ManufacturingOrderWhereInput
    some?: ManufacturingOrderWhereInput
    none?: ManufacturingOrderWhereInput
  }

  export type WorkOrderListRelationFilter = {
    every?: WorkOrderWhereInput
    some?: WorkOrderWhereInput
    none?: WorkOrderWhereInput
  }

  export type StockLedgerListRelationFilter = {
    every?: StockLedgerWhereInput
    some?: StockLedgerWhereInput
    none?: StockLedgerWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ManufacturingOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockLedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    profile_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    profile_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    profile_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[]
    notIn?: $Enums.ProductType[]
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type EnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[]
    notIn?: $Enums.UnitType[]
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BOMListRelationFilter = {
    every?: BOMWhereInput
    some?: BOMWhereInput
    none?: BOMWhereInput
  }

  export type BOMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    type?: SortOrder
    unit_of_measure?: SortOrder
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    type?: SortOrder
    unit_of_measure?: SortOrder
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    type?: SortOrder
    unit_of_measure?: SortOrder
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    current_stock?: SortOrder
    cost_per_unit?: SortOrder
  }

  export type EnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[]
    notIn?: $Enums.ProductType[]
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type EnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[]
    notIn?: $Enums.UnitType[]
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type BOMCountOrderByAggregateInput = {
    bom_id?: SortOrder
    product_id?: SortOrder
    component_id?: SortOrder
    quantity_required?: SortOrder
    operation_sequence?: SortOrder
    created_at?: SortOrder
  }

  export type BOMAvgOrderByAggregateInput = {
    quantity_required?: SortOrder
  }

  export type BOMMaxOrderByAggregateInput = {
    bom_id?: SortOrder
    product_id?: SortOrder
    component_id?: SortOrder
    quantity_required?: SortOrder
    operation_sequence?: SortOrder
    created_at?: SortOrder
  }

  export type BOMMinOrderByAggregateInput = {
    bom_id?: SortOrder
    product_id?: SortOrder
    component_id?: SortOrder
    quantity_required?: SortOrder
    operation_sequence?: SortOrder
    created_at?: SortOrder
  }

  export type BOMSumOrderByAggregateInput = {
    quantity_required?: SortOrder
  }

  export type EnumComponentStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentState | EnumComponentStateFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentState[]
    notIn?: $Enums.ComponentState[]
    not?: NestedEnumComponentStateFilter<$PrismaModel> | $Enums.ComponentState
  }

  export type EnumManufacturingOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ManufacturingOrderStatus | EnumManufacturingOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManufacturingOrderStatus[]
    notIn?: $Enums.ManufacturingOrderStatus[]
    not?: NestedEnumManufacturingOrderStatusFilter<$PrismaModel> | $Enums.ManufacturingOrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ManufacturingOrderCountOrderByAggregateInput = {
    mo_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    state?: SortOrder
    status?: SortOrder
    scheduled_start?: SortOrder
    scheduled_end?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    created_by?: SortOrder
    assigned_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ManufacturingOrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ManufacturingOrderMaxOrderByAggregateInput = {
    mo_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    state?: SortOrder
    status?: SortOrder
    scheduled_start?: SortOrder
    scheduled_end?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    created_by?: SortOrder
    assigned_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ManufacturingOrderMinOrderByAggregateInput = {
    mo_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    state?: SortOrder
    status?: SortOrder
    scheduled_start?: SortOrder
    scheduled_end?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    created_by?: SortOrder
    assigned_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ManufacturingOrderSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumComponentStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentState | EnumComponentStateFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentState[]
    notIn?: $Enums.ComponentState[]
    not?: NestedEnumComponentStateWithAggregatesFilter<$PrismaModel> | $Enums.ComponentState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComponentStateFilter<$PrismaModel>
    _max?: NestedEnumComponentStateFilter<$PrismaModel>
  }

  export type EnumManufacturingOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManufacturingOrderStatus | EnumManufacturingOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManufacturingOrderStatus[]
    notIn?: $Enums.ManufacturingOrderStatus[]
    not?: NestedEnumManufacturingOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ManufacturingOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManufacturingOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumManufacturingOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumWorkOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[]
    notIn?: $Enums.WorkOrderStatus[]
    not?: NestedEnumWorkOrderStatusFilter<$PrismaModel> | $Enums.WorkOrderStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ManufacturingOrderScalarRelationFilter = {
    is?: ManufacturingOrderWhereInput
    isNot?: ManufacturingOrderWhereInput
  }

  export type WorkCenterScalarRelationFilter = {
    is?: WorkCenterWhereInput
    isNot?: WorkCenterWhereInput
  }

  export type WorkOrderCountOrderByAggregateInput = {
    wo_id?: SortOrder
    mo_id?: SortOrder
    operation_name?: SortOrder
    work_center_id?: SortOrder
    assigned_to?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    planned_time?: SortOrder
    actual_time?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
  }

  export type WorkOrderAvgOrderByAggregateInput = {
    planned_time?: SortOrder
    actual_time?: SortOrder
  }

  export type WorkOrderMaxOrderByAggregateInput = {
    wo_id?: SortOrder
    mo_id?: SortOrder
    operation_name?: SortOrder
    work_center_id?: SortOrder
    assigned_to?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    planned_time?: SortOrder
    actual_time?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
  }

  export type WorkOrderMinOrderByAggregateInput = {
    wo_id?: SortOrder
    mo_id?: SortOrder
    operation_name?: SortOrder
    work_center_id?: SortOrder
    assigned_to?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    planned_time?: SortOrder
    actual_time?: SortOrder
    started_at?: SortOrder
    completed_at?: SortOrder
  }

  export type WorkOrderSumOrderByAggregateInput = {
    planned_time?: SortOrder
    actual_time?: SortOrder
  }

  export type EnumWorkOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[]
    notIn?: $Enums.WorkOrderStatus[]
    not?: NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WorkCenterCountOrderByAggregateInput = {
    work_center_id?: SortOrder
    name?: SortOrder
    cost_per_hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkCenterAvgOrderByAggregateInput = {
    cost_per_hour?: SortOrder
  }

  export type WorkCenterMaxOrderByAggregateInput = {
    work_center_id?: SortOrder
    name?: SortOrder
    cost_per_hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkCenterMinOrderByAggregateInput = {
    work_center_id?: SortOrder
    name?: SortOrder
    cost_per_hour?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkCenterSumOrderByAggregateInput = {
    cost_per_hour?: SortOrder
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[]
    notIn?: $Enums.MovementType[]
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type EnumReferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[]
    notIn?: $Enums.ReferenceType[]
    not?: NestedEnumReferenceTypeFilter<$PrismaModel> | $Enums.ReferenceType
  }

  export type ManufacturingOrderNullableScalarRelationFilter = {
    is?: ManufacturingOrderWhereInput | null
    isNot?: ManufacturingOrderWhereInput | null
  }

  export type WorkOrderNullableScalarRelationFilter = {
    is?: WorkOrderWhereInput | null
    isNot?: WorkOrderWhereInput | null
  }

  export type StockLedgerCountOrderByAggregateInput = {
    ledger_id?: SortOrder
    product_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type StockLedgerAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockLedgerMaxOrderByAggregateInput = {
    ledger_id?: SortOrder
    product_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type StockLedgerMinOrderByAggregateInput = {
    ledger_id?: SortOrder
    product_id?: SortOrder
    movement_type?: SortOrder
    quantity?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
  }

  export type StockLedgerSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[]
    notIn?: $Enums.MovementType[]
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumReferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[]
    notIn?: $Enums.ReferenceType[]
    not?: NestedEnumReferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumReferenceTypeFilter<$PrismaModel>
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[]
    notIn?: $Enums.ReportType[]
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReportCountOrderByAggregateInput = {
    report_id?: SortOrder
    user_id?: SortOrder
    report_type?: SortOrder
    data?: SortOrder
    generated_at?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    report_id?: SortOrder
    user_id?: SortOrder
    report_type?: SortOrder
    generated_at?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    report_id?: SortOrder
    user_id?: SortOrder
    report_type?: SortOrder
    generated_at?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[]
    notIn?: $Enums.ReportType[]
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    details?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ManufacturingOrderCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ManufacturingOrderCreateWithoutCreatorInput, ManufacturingOrderUncheckedCreateWithoutCreatorInput> | ManufacturingOrderCreateWithoutCreatorInput[] | ManufacturingOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutCreatorInput | ManufacturingOrderCreateOrConnectWithoutCreatorInput[]
    createMany?: ManufacturingOrderCreateManyCreatorInputEnvelope
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
  }

  export type ManufacturingOrderCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<ManufacturingOrderCreateWithoutAssigneeInput, ManufacturingOrderUncheckedCreateWithoutAssigneeInput> | ManufacturingOrderCreateWithoutAssigneeInput[] | ManufacturingOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutAssigneeInput | ManufacturingOrderCreateOrConnectWithoutAssigneeInput[]
    createMany?: ManufacturingOrderCreateManyAssigneeInputEnvelope
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
  }

  export type WorkOrderCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<WorkOrderCreateWithoutAssigneeInput, WorkOrderUncheckedCreateWithoutAssigneeInput> | WorkOrderCreateWithoutAssigneeInput[] | WorkOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssigneeInput | WorkOrderCreateOrConnectWithoutAssigneeInput[]
    createMany?: WorkOrderCreateManyAssigneeInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type StockLedgerCreateNestedManyWithoutCreatorInput = {
    create?: XOR<StockLedgerCreateWithoutCreatorInput, StockLedgerUncheckedCreateWithoutCreatorInput> | StockLedgerCreateWithoutCreatorInput[] | StockLedgerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutCreatorInput | StockLedgerCreateOrConnectWithoutCreatorInput[]
    createMany?: StockLedgerCreateManyCreatorInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ManufacturingOrderCreateWithoutCreatorInput, ManufacturingOrderUncheckedCreateWithoutCreatorInput> | ManufacturingOrderCreateWithoutCreatorInput[] | ManufacturingOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutCreatorInput | ManufacturingOrderCreateOrConnectWithoutCreatorInput[]
    createMany?: ManufacturingOrderCreateManyCreatorInputEnvelope
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
  }

  export type ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<ManufacturingOrderCreateWithoutAssigneeInput, ManufacturingOrderUncheckedCreateWithoutAssigneeInput> | ManufacturingOrderCreateWithoutAssigneeInput[] | ManufacturingOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutAssigneeInput | ManufacturingOrderCreateOrConnectWithoutAssigneeInput[]
    createMany?: ManufacturingOrderCreateManyAssigneeInputEnvelope
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
  }

  export type WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<WorkOrderCreateWithoutAssigneeInput, WorkOrderUncheckedCreateWithoutAssigneeInput> | WorkOrderCreateWithoutAssigneeInput[] | WorkOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssigneeInput | WorkOrderCreateOrConnectWithoutAssigneeInput[]
    createMany?: WorkOrderCreateManyAssigneeInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type StockLedgerUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<StockLedgerCreateWithoutCreatorInput, StockLedgerUncheckedCreateWithoutCreatorInput> | StockLedgerCreateWithoutCreatorInput[] | StockLedgerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutCreatorInput | StockLedgerCreateOrConnectWithoutCreatorInput[]
    createMany?: StockLedgerCreateManyCreatorInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ManufacturingOrderUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutCreatorInput, ManufacturingOrderUncheckedCreateWithoutCreatorInput> | ManufacturingOrderCreateWithoutCreatorInput[] | ManufacturingOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutCreatorInput | ManufacturingOrderCreateOrConnectWithoutCreatorInput[]
    upsert?: ManufacturingOrderUpsertWithWhereUniqueWithoutCreatorInput | ManufacturingOrderUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ManufacturingOrderCreateManyCreatorInputEnvelope
    set?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    disconnect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    delete?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    update?: ManufacturingOrderUpdateWithWhereUniqueWithoutCreatorInput | ManufacturingOrderUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ManufacturingOrderUpdateManyWithWhereWithoutCreatorInput | ManufacturingOrderUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
  }

  export type ManufacturingOrderUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutAssigneeInput, ManufacturingOrderUncheckedCreateWithoutAssigneeInput> | ManufacturingOrderCreateWithoutAssigneeInput[] | ManufacturingOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutAssigneeInput | ManufacturingOrderCreateOrConnectWithoutAssigneeInput[]
    upsert?: ManufacturingOrderUpsertWithWhereUniqueWithoutAssigneeInput | ManufacturingOrderUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: ManufacturingOrderCreateManyAssigneeInputEnvelope
    set?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    disconnect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    delete?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    update?: ManufacturingOrderUpdateWithWhereUniqueWithoutAssigneeInput | ManufacturingOrderUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: ManufacturingOrderUpdateManyWithWhereWithoutAssigneeInput | ManufacturingOrderUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
  }

  export type WorkOrderUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<WorkOrderCreateWithoutAssigneeInput, WorkOrderUncheckedCreateWithoutAssigneeInput> | WorkOrderCreateWithoutAssigneeInput[] | WorkOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssigneeInput | WorkOrderCreateOrConnectWithoutAssigneeInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutAssigneeInput | WorkOrderUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: WorkOrderCreateManyAssigneeInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutAssigneeInput | WorkOrderUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutAssigneeInput | WorkOrderUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type StockLedgerUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<StockLedgerCreateWithoutCreatorInput, StockLedgerUncheckedCreateWithoutCreatorInput> | StockLedgerCreateWithoutCreatorInput[] | StockLedgerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutCreatorInput | StockLedgerCreateOrConnectWithoutCreatorInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutCreatorInput | StockLedgerUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: StockLedgerCreateManyCreatorInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutCreatorInput | StockLedgerUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutCreatorInput | StockLedgerUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutCreatorInput, ManufacturingOrderUncheckedCreateWithoutCreatorInput> | ManufacturingOrderCreateWithoutCreatorInput[] | ManufacturingOrderUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutCreatorInput | ManufacturingOrderCreateOrConnectWithoutCreatorInput[]
    upsert?: ManufacturingOrderUpsertWithWhereUniqueWithoutCreatorInput | ManufacturingOrderUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ManufacturingOrderCreateManyCreatorInputEnvelope
    set?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    disconnect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    delete?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    update?: ManufacturingOrderUpdateWithWhereUniqueWithoutCreatorInput | ManufacturingOrderUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ManufacturingOrderUpdateManyWithWhereWithoutCreatorInput | ManufacturingOrderUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
  }

  export type ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutAssigneeInput, ManufacturingOrderUncheckedCreateWithoutAssigneeInput> | ManufacturingOrderCreateWithoutAssigneeInput[] | ManufacturingOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutAssigneeInput | ManufacturingOrderCreateOrConnectWithoutAssigneeInput[]
    upsert?: ManufacturingOrderUpsertWithWhereUniqueWithoutAssigneeInput | ManufacturingOrderUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: ManufacturingOrderCreateManyAssigneeInputEnvelope
    set?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    disconnect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    delete?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    update?: ManufacturingOrderUpdateWithWhereUniqueWithoutAssigneeInput | ManufacturingOrderUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: ManufacturingOrderUpdateManyWithWhereWithoutAssigneeInput | ManufacturingOrderUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
  }

  export type WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<WorkOrderCreateWithoutAssigneeInput, WorkOrderUncheckedCreateWithoutAssigneeInput> | WorkOrderCreateWithoutAssigneeInput[] | WorkOrderUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssigneeInput | WorkOrderCreateOrConnectWithoutAssigneeInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutAssigneeInput | WorkOrderUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: WorkOrderCreateManyAssigneeInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutAssigneeInput | WorkOrderUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutAssigneeInput | WorkOrderUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<StockLedgerCreateWithoutCreatorInput, StockLedgerUncheckedCreateWithoutCreatorInput> | StockLedgerCreateWithoutCreatorInput[] | StockLedgerUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutCreatorInput | StockLedgerCreateOrConnectWithoutCreatorInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutCreatorInput | StockLedgerUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: StockLedgerCreateManyCreatorInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutCreatorInput | StockLedgerUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutCreatorInput | StockLedgerUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type BOMCreateNestedManyWithoutProductInput = {
    create?: XOR<BOMCreateWithoutProductInput, BOMUncheckedCreateWithoutProductInput> | BOMCreateWithoutProductInput[] | BOMUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutProductInput | BOMCreateOrConnectWithoutProductInput[]
    createMany?: BOMCreateManyProductInputEnvelope
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
  }

  export type BOMCreateNestedManyWithoutComponentInput = {
    create?: XOR<BOMCreateWithoutComponentInput, BOMUncheckedCreateWithoutComponentInput> | BOMCreateWithoutComponentInput[] | BOMUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutComponentInput | BOMCreateOrConnectWithoutComponentInput[]
    createMany?: BOMCreateManyComponentInputEnvelope
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
  }

  export type ManufacturingOrderCreateNestedManyWithoutProductInput = {
    create?: XOR<ManufacturingOrderCreateWithoutProductInput, ManufacturingOrderUncheckedCreateWithoutProductInput> | ManufacturingOrderCreateWithoutProductInput[] | ManufacturingOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutProductInput | ManufacturingOrderCreateOrConnectWithoutProductInput[]
    createMany?: ManufacturingOrderCreateManyProductInputEnvelope
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
  }

  export type StockLedgerCreateNestedManyWithoutProductInput = {
    create?: XOR<StockLedgerCreateWithoutProductInput, StockLedgerUncheckedCreateWithoutProductInput> | StockLedgerCreateWithoutProductInput[] | StockLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutProductInput | StockLedgerCreateOrConnectWithoutProductInput[]
    createMany?: StockLedgerCreateManyProductInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type BOMUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<BOMCreateWithoutProductInput, BOMUncheckedCreateWithoutProductInput> | BOMCreateWithoutProductInput[] | BOMUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutProductInput | BOMCreateOrConnectWithoutProductInput[]
    createMany?: BOMCreateManyProductInputEnvelope
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
  }

  export type BOMUncheckedCreateNestedManyWithoutComponentInput = {
    create?: XOR<BOMCreateWithoutComponentInput, BOMUncheckedCreateWithoutComponentInput> | BOMCreateWithoutComponentInput[] | BOMUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutComponentInput | BOMCreateOrConnectWithoutComponentInput[]
    createMany?: BOMCreateManyComponentInputEnvelope
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
  }

  export type ManufacturingOrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ManufacturingOrderCreateWithoutProductInput, ManufacturingOrderUncheckedCreateWithoutProductInput> | ManufacturingOrderCreateWithoutProductInput[] | ManufacturingOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutProductInput | ManufacturingOrderCreateOrConnectWithoutProductInput[]
    createMany?: ManufacturingOrderCreateManyProductInputEnvelope
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
  }

  export type StockLedgerUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockLedgerCreateWithoutProductInput, StockLedgerUncheckedCreateWithoutProductInput> | StockLedgerCreateWithoutProductInput[] | StockLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutProductInput | StockLedgerCreateOrConnectWithoutProductInput[]
    createMany?: StockLedgerCreateManyProductInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type EnumProductTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProductType
  }

  export type EnumUnitTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnitType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BOMUpdateManyWithoutProductNestedInput = {
    create?: XOR<BOMCreateWithoutProductInput, BOMUncheckedCreateWithoutProductInput> | BOMCreateWithoutProductInput[] | BOMUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutProductInput | BOMCreateOrConnectWithoutProductInput[]
    upsert?: BOMUpsertWithWhereUniqueWithoutProductInput | BOMUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BOMCreateManyProductInputEnvelope
    set?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    disconnect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    delete?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    update?: BOMUpdateWithWhereUniqueWithoutProductInput | BOMUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BOMUpdateManyWithWhereWithoutProductInput | BOMUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BOMScalarWhereInput | BOMScalarWhereInput[]
  }

  export type BOMUpdateManyWithoutComponentNestedInput = {
    create?: XOR<BOMCreateWithoutComponentInput, BOMUncheckedCreateWithoutComponentInput> | BOMCreateWithoutComponentInput[] | BOMUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutComponentInput | BOMCreateOrConnectWithoutComponentInput[]
    upsert?: BOMUpsertWithWhereUniqueWithoutComponentInput | BOMUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: BOMCreateManyComponentInputEnvelope
    set?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    disconnect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    delete?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    update?: BOMUpdateWithWhereUniqueWithoutComponentInput | BOMUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: BOMUpdateManyWithWhereWithoutComponentInput | BOMUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: BOMScalarWhereInput | BOMScalarWhereInput[]
  }

  export type ManufacturingOrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutProductInput, ManufacturingOrderUncheckedCreateWithoutProductInput> | ManufacturingOrderCreateWithoutProductInput[] | ManufacturingOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutProductInput | ManufacturingOrderCreateOrConnectWithoutProductInput[]
    upsert?: ManufacturingOrderUpsertWithWhereUniqueWithoutProductInput | ManufacturingOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ManufacturingOrderCreateManyProductInputEnvelope
    set?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    disconnect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    delete?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    update?: ManufacturingOrderUpdateWithWhereUniqueWithoutProductInput | ManufacturingOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ManufacturingOrderUpdateManyWithWhereWithoutProductInput | ManufacturingOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
  }

  export type StockLedgerUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockLedgerCreateWithoutProductInput, StockLedgerUncheckedCreateWithoutProductInput> | StockLedgerCreateWithoutProductInput[] | StockLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutProductInput | StockLedgerCreateOrConnectWithoutProductInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutProductInput | StockLedgerUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockLedgerCreateManyProductInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutProductInput | StockLedgerUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutProductInput | StockLedgerUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type BOMUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<BOMCreateWithoutProductInput, BOMUncheckedCreateWithoutProductInput> | BOMCreateWithoutProductInput[] | BOMUncheckedCreateWithoutProductInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutProductInput | BOMCreateOrConnectWithoutProductInput[]
    upsert?: BOMUpsertWithWhereUniqueWithoutProductInput | BOMUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: BOMCreateManyProductInputEnvelope
    set?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    disconnect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    delete?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    update?: BOMUpdateWithWhereUniqueWithoutProductInput | BOMUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: BOMUpdateManyWithWhereWithoutProductInput | BOMUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: BOMScalarWhereInput | BOMScalarWhereInput[]
  }

  export type BOMUncheckedUpdateManyWithoutComponentNestedInput = {
    create?: XOR<BOMCreateWithoutComponentInput, BOMUncheckedCreateWithoutComponentInput> | BOMCreateWithoutComponentInput[] | BOMUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: BOMCreateOrConnectWithoutComponentInput | BOMCreateOrConnectWithoutComponentInput[]
    upsert?: BOMUpsertWithWhereUniqueWithoutComponentInput | BOMUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: BOMCreateManyComponentInputEnvelope
    set?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    disconnect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    delete?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    connect?: BOMWhereUniqueInput | BOMWhereUniqueInput[]
    update?: BOMUpdateWithWhereUniqueWithoutComponentInput | BOMUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: BOMUpdateManyWithWhereWithoutComponentInput | BOMUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: BOMScalarWhereInput | BOMScalarWhereInput[]
  }

  export type ManufacturingOrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutProductInput, ManufacturingOrderUncheckedCreateWithoutProductInput> | ManufacturingOrderCreateWithoutProductInput[] | ManufacturingOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutProductInput | ManufacturingOrderCreateOrConnectWithoutProductInput[]
    upsert?: ManufacturingOrderUpsertWithWhereUniqueWithoutProductInput | ManufacturingOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ManufacturingOrderCreateManyProductInputEnvelope
    set?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    disconnect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    delete?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    connect?: ManufacturingOrderWhereUniqueInput | ManufacturingOrderWhereUniqueInput[]
    update?: ManufacturingOrderUpdateWithWhereUniqueWithoutProductInput | ManufacturingOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ManufacturingOrderUpdateManyWithWhereWithoutProductInput | ManufacturingOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
  }

  export type StockLedgerUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockLedgerCreateWithoutProductInput, StockLedgerUncheckedCreateWithoutProductInput> | StockLedgerCreateWithoutProductInput[] | StockLedgerUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutProductInput | StockLedgerCreateOrConnectWithoutProductInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutProductInput | StockLedgerUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockLedgerCreateManyProductInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutProductInput | StockLedgerUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutProductInput | StockLedgerUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutBoms_as_productInput = {
    create?: XOR<ProductCreateWithoutBoms_as_productInput, ProductUncheckedCreateWithoutBoms_as_productInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBoms_as_productInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutBoms_as_componentInput = {
    create?: XOR<ProductCreateWithoutBoms_as_componentInput, ProductUncheckedCreateWithoutBoms_as_componentInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBoms_as_componentInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutBoms_as_productNestedInput = {
    create?: XOR<ProductCreateWithoutBoms_as_productInput, ProductUncheckedCreateWithoutBoms_as_productInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBoms_as_productInput
    upsert?: ProductUpsertWithoutBoms_as_productInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBoms_as_productInput, ProductUpdateWithoutBoms_as_productInput>, ProductUncheckedUpdateWithoutBoms_as_productInput>
  }

  export type ProductUpdateOneRequiredWithoutBoms_as_componentNestedInput = {
    create?: XOR<ProductCreateWithoutBoms_as_componentInput, ProductUncheckedCreateWithoutBoms_as_componentInput>
    connectOrCreate?: ProductCreateOrConnectWithoutBoms_as_componentInput
    upsert?: ProductUpsertWithoutBoms_as_componentInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutBoms_as_componentInput, ProductUpdateWithoutBoms_as_componentInput>, ProductUncheckedUpdateWithoutBoms_as_componentInput>
  }

  export type ProductCreateNestedOneWithoutManufacturing_ordersInput = {
    create?: XOR<ProductCreateWithoutManufacturing_ordersInput, ProductUncheckedCreateWithoutManufacturing_ordersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutManufacturing_ordersInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreated_mosInput = {
    create?: XOR<UserCreateWithoutCreated_mosInput, UserUncheckedCreateWithoutCreated_mosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_mosInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssigned_mosInput = {
    create?: XOR<UserCreateWithoutAssigned_mosInput, UserUncheckedCreateWithoutAssigned_mosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_mosInput
    connect?: UserWhereUniqueInput
  }

  export type WorkOrderCreateNestedManyWithoutManufacturing_orderInput = {
    create?: XOR<WorkOrderCreateWithoutManufacturing_orderInput, WorkOrderUncheckedCreateWithoutManufacturing_orderInput> | WorkOrderCreateWithoutManufacturing_orderInput[] | WorkOrderUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutManufacturing_orderInput | WorkOrderCreateOrConnectWithoutManufacturing_orderInput[]
    createMany?: WorkOrderCreateManyManufacturing_orderInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type StockLedgerCreateNestedManyWithoutManufacturing_orderInput = {
    create?: XOR<StockLedgerCreateWithoutManufacturing_orderInput, StockLedgerUncheckedCreateWithoutManufacturing_orderInput> | StockLedgerCreateWithoutManufacturing_orderInput[] | StockLedgerUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutManufacturing_orderInput | StockLedgerCreateOrConnectWithoutManufacturing_orderInput[]
    createMany?: StockLedgerCreateManyManufacturing_orderInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type WorkOrderUncheckedCreateNestedManyWithoutManufacturing_orderInput = {
    create?: XOR<WorkOrderCreateWithoutManufacturing_orderInput, WorkOrderUncheckedCreateWithoutManufacturing_orderInput> | WorkOrderCreateWithoutManufacturing_orderInput[] | WorkOrderUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutManufacturing_orderInput | WorkOrderCreateOrConnectWithoutManufacturing_orderInput[]
    createMany?: WorkOrderCreateManyManufacturing_orderInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type StockLedgerUncheckedCreateNestedManyWithoutManufacturing_orderInput = {
    create?: XOR<StockLedgerCreateWithoutManufacturing_orderInput, StockLedgerUncheckedCreateWithoutManufacturing_orderInput> | StockLedgerCreateWithoutManufacturing_orderInput[] | StockLedgerUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutManufacturing_orderInput | StockLedgerCreateOrConnectWithoutManufacturing_orderInput[]
    createMany?: StockLedgerCreateManyManufacturing_orderInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type EnumComponentStateFieldUpdateOperationsInput = {
    set?: $Enums.ComponentState
  }

  export type EnumManufacturingOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.ManufacturingOrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductUpdateOneRequiredWithoutManufacturing_ordersNestedInput = {
    create?: XOR<ProductCreateWithoutManufacturing_ordersInput, ProductUncheckedCreateWithoutManufacturing_ordersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutManufacturing_ordersInput
    upsert?: ProductUpsertWithoutManufacturing_ordersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutManufacturing_ordersInput, ProductUpdateWithoutManufacturing_ordersInput>, ProductUncheckedUpdateWithoutManufacturing_ordersInput>
  }

  export type UserUpdateOneRequiredWithoutCreated_mosNestedInput = {
    create?: XOR<UserCreateWithoutCreated_mosInput, UserUncheckedCreateWithoutCreated_mosInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_mosInput
    upsert?: UserUpsertWithoutCreated_mosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_mosInput, UserUpdateWithoutCreated_mosInput>, UserUncheckedUpdateWithoutCreated_mosInput>
  }

  export type UserUpdateOneWithoutAssigned_mosNestedInput = {
    create?: XOR<UserCreateWithoutAssigned_mosInput, UserUncheckedCreateWithoutAssigned_mosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_mosInput
    upsert?: UserUpsertWithoutAssigned_mosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssigned_mosInput, UserUpdateWithoutAssigned_mosInput>, UserUncheckedUpdateWithoutAssigned_mosInput>
  }

  export type WorkOrderUpdateManyWithoutManufacturing_orderNestedInput = {
    create?: XOR<WorkOrderCreateWithoutManufacturing_orderInput, WorkOrderUncheckedCreateWithoutManufacturing_orderInput> | WorkOrderCreateWithoutManufacturing_orderInput[] | WorkOrderUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutManufacturing_orderInput | WorkOrderCreateOrConnectWithoutManufacturing_orderInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutManufacturing_orderInput | WorkOrderUpsertWithWhereUniqueWithoutManufacturing_orderInput[]
    createMany?: WorkOrderCreateManyManufacturing_orderInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutManufacturing_orderInput | WorkOrderUpdateWithWhereUniqueWithoutManufacturing_orderInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutManufacturing_orderInput | WorkOrderUpdateManyWithWhereWithoutManufacturing_orderInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type StockLedgerUpdateManyWithoutManufacturing_orderNestedInput = {
    create?: XOR<StockLedgerCreateWithoutManufacturing_orderInput, StockLedgerUncheckedCreateWithoutManufacturing_orderInput> | StockLedgerCreateWithoutManufacturing_orderInput[] | StockLedgerUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutManufacturing_orderInput | StockLedgerCreateOrConnectWithoutManufacturing_orderInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutManufacturing_orderInput | StockLedgerUpsertWithWhereUniqueWithoutManufacturing_orderInput[]
    createMany?: StockLedgerCreateManyManufacturing_orderInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutManufacturing_orderInput | StockLedgerUpdateWithWhereUniqueWithoutManufacturing_orderInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutManufacturing_orderInput | StockLedgerUpdateManyWithWhereWithoutManufacturing_orderInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type WorkOrderUncheckedUpdateManyWithoutManufacturing_orderNestedInput = {
    create?: XOR<WorkOrderCreateWithoutManufacturing_orderInput, WorkOrderUncheckedCreateWithoutManufacturing_orderInput> | WorkOrderCreateWithoutManufacturing_orderInput[] | WorkOrderUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutManufacturing_orderInput | WorkOrderCreateOrConnectWithoutManufacturing_orderInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutManufacturing_orderInput | WorkOrderUpsertWithWhereUniqueWithoutManufacturing_orderInput[]
    createMany?: WorkOrderCreateManyManufacturing_orderInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutManufacturing_orderInput | WorkOrderUpdateWithWhereUniqueWithoutManufacturing_orderInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutManufacturing_orderInput | WorkOrderUpdateManyWithWhereWithoutManufacturing_orderInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type StockLedgerUncheckedUpdateManyWithoutManufacturing_orderNestedInput = {
    create?: XOR<StockLedgerCreateWithoutManufacturing_orderInput, StockLedgerUncheckedCreateWithoutManufacturing_orderInput> | StockLedgerCreateWithoutManufacturing_orderInput[] | StockLedgerUncheckedCreateWithoutManufacturing_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutManufacturing_orderInput | StockLedgerCreateOrConnectWithoutManufacturing_orderInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutManufacturing_orderInput | StockLedgerUpsertWithWhereUniqueWithoutManufacturing_orderInput[]
    createMany?: StockLedgerCreateManyManufacturing_orderInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutManufacturing_orderInput | StockLedgerUpdateWithWhereUniqueWithoutManufacturing_orderInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutManufacturing_orderInput | StockLedgerUpdateManyWithWhereWithoutManufacturing_orderInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type ManufacturingOrderCreateNestedOneWithoutWork_ordersInput = {
    create?: XOR<ManufacturingOrderCreateWithoutWork_ordersInput, ManufacturingOrderUncheckedCreateWithoutWork_ordersInput>
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutWork_ordersInput
    connect?: ManufacturingOrderWhereUniqueInput
  }

  export type WorkCenterCreateNestedOneWithoutWork_ordersInput = {
    create?: XOR<WorkCenterCreateWithoutWork_ordersInput, WorkCenterUncheckedCreateWithoutWork_ordersInput>
    connectOrCreate?: WorkCenterCreateOrConnectWithoutWork_ordersInput
    connect?: WorkCenterWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssigned_wosInput = {
    create?: XOR<UserCreateWithoutAssigned_wosInput, UserUncheckedCreateWithoutAssigned_wosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_wosInput
    connect?: UserWhereUniqueInput
  }

  export type StockLedgerCreateNestedManyWithoutWork_orderInput = {
    create?: XOR<StockLedgerCreateWithoutWork_orderInput, StockLedgerUncheckedCreateWithoutWork_orderInput> | StockLedgerCreateWithoutWork_orderInput[] | StockLedgerUncheckedCreateWithoutWork_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutWork_orderInput | StockLedgerCreateOrConnectWithoutWork_orderInput[]
    createMany?: StockLedgerCreateManyWork_orderInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type StockLedgerUncheckedCreateNestedManyWithoutWork_orderInput = {
    create?: XOR<StockLedgerCreateWithoutWork_orderInput, StockLedgerUncheckedCreateWithoutWork_orderInput> | StockLedgerCreateWithoutWork_orderInput[] | StockLedgerUncheckedCreateWithoutWork_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutWork_orderInput | StockLedgerCreateOrConnectWithoutWork_orderInput[]
    createMany?: StockLedgerCreateManyWork_orderInputEnvelope
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
  }

  export type EnumWorkOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkOrderStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ManufacturingOrderUpdateOneRequiredWithoutWork_ordersNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutWork_ordersInput, ManufacturingOrderUncheckedCreateWithoutWork_ordersInput>
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutWork_ordersInput
    upsert?: ManufacturingOrderUpsertWithoutWork_ordersInput
    connect?: ManufacturingOrderWhereUniqueInput
    update?: XOR<XOR<ManufacturingOrderUpdateToOneWithWhereWithoutWork_ordersInput, ManufacturingOrderUpdateWithoutWork_ordersInput>, ManufacturingOrderUncheckedUpdateWithoutWork_ordersInput>
  }

  export type WorkCenterUpdateOneRequiredWithoutWork_ordersNestedInput = {
    create?: XOR<WorkCenterCreateWithoutWork_ordersInput, WorkCenterUncheckedCreateWithoutWork_ordersInput>
    connectOrCreate?: WorkCenterCreateOrConnectWithoutWork_ordersInput
    upsert?: WorkCenterUpsertWithoutWork_ordersInput
    connect?: WorkCenterWhereUniqueInput
    update?: XOR<XOR<WorkCenterUpdateToOneWithWhereWithoutWork_ordersInput, WorkCenterUpdateWithoutWork_ordersInput>, WorkCenterUncheckedUpdateWithoutWork_ordersInput>
  }

  export type UserUpdateOneWithoutAssigned_wosNestedInput = {
    create?: XOR<UserCreateWithoutAssigned_wosInput, UserUncheckedCreateWithoutAssigned_wosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_wosInput
    upsert?: UserUpsertWithoutAssigned_wosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssigned_wosInput, UserUpdateWithoutAssigned_wosInput>, UserUncheckedUpdateWithoutAssigned_wosInput>
  }

  export type StockLedgerUpdateManyWithoutWork_orderNestedInput = {
    create?: XOR<StockLedgerCreateWithoutWork_orderInput, StockLedgerUncheckedCreateWithoutWork_orderInput> | StockLedgerCreateWithoutWork_orderInput[] | StockLedgerUncheckedCreateWithoutWork_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutWork_orderInput | StockLedgerCreateOrConnectWithoutWork_orderInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutWork_orderInput | StockLedgerUpsertWithWhereUniqueWithoutWork_orderInput[]
    createMany?: StockLedgerCreateManyWork_orderInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutWork_orderInput | StockLedgerUpdateWithWhereUniqueWithoutWork_orderInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutWork_orderInput | StockLedgerUpdateManyWithWhereWithoutWork_orderInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type StockLedgerUncheckedUpdateManyWithoutWork_orderNestedInput = {
    create?: XOR<StockLedgerCreateWithoutWork_orderInput, StockLedgerUncheckedCreateWithoutWork_orderInput> | StockLedgerCreateWithoutWork_orderInput[] | StockLedgerUncheckedCreateWithoutWork_orderInput[]
    connectOrCreate?: StockLedgerCreateOrConnectWithoutWork_orderInput | StockLedgerCreateOrConnectWithoutWork_orderInput[]
    upsert?: StockLedgerUpsertWithWhereUniqueWithoutWork_orderInput | StockLedgerUpsertWithWhereUniqueWithoutWork_orderInput[]
    createMany?: StockLedgerCreateManyWork_orderInputEnvelope
    set?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    disconnect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    delete?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    connect?: StockLedgerWhereUniqueInput | StockLedgerWhereUniqueInput[]
    update?: StockLedgerUpdateWithWhereUniqueWithoutWork_orderInput | StockLedgerUpdateWithWhereUniqueWithoutWork_orderInput[]
    updateMany?: StockLedgerUpdateManyWithWhereWithoutWork_orderInput | StockLedgerUpdateManyWithWhereWithoutWork_orderInput[]
    deleteMany?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
  }

  export type WorkOrderCreateNestedManyWithoutWork_centerInput = {
    create?: XOR<WorkOrderCreateWithoutWork_centerInput, WorkOrderUncheckedCreateWithoutWork_centerInput> | WorkOrderCreateWithoutWork_centerInput[] | WorkOrderUncheckedCreateWithoutWork_centerInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutWork_centerInput | WorkOrderCreateOrConnectWithoutWork_centerInput[]
    createMany?: WorkOrderCreateManyWork_centerInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderUncheckedCreateNestedManyWithoutWork_centerInput = {
    create?: XOR<WorkOrderCreateWithoutWork_centerInput, WorkOrderUncheckedCreateWithoutWork_centerInput> | WorkOrderCreateWithoutWork_centerInput[] | WorkOrderUncheckedCreateWithoutWork_centerInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutWork_centerInput | WorkOrderCreateOrConnectWithoutWork_centerInput[]
    createMany?: WorkOrderCreateManyWork_centerInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderUpdateManyWithoutWork_centerNestedInput = {
    create?: XOR<WorkOrderCreateWithoutWork_centerInput, WorkOrderUncheckedCreateWithoutWork_centerInput> | WorkOrderCreateWithoutWork_centerInput[] | WorkOrderUncheckedCreateWithoutWork_centerInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutWork_centerInput | WorkOrderCreateOrConnectWithoutWork_centerInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutWork_centerInput | WorkOrderUpsertWithWhereUniqueWithoutWork_centerInput[]
    createMany?: WorkOrderCreateManyWork_centerInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutWork_centerInput | WorkOrderUpdateWithWhereUniqueWithoutWork_centerInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutWork_centerInput | WorkOrderUpdateManyWithWhereWithoutWork_centerInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type WorkOrderUncheckedUpdateManyWithoutWork_centerNestedInput = {
    create?: XOR<WorkOrderCreateWithoutWork_centerInput, WorkOrderUncheckedCreateWithoutWork_centerInput> | WorkOrderCreateWithoutWork_centerInput[] | WorkOrderUncheckedCreateWithoutWork_centerInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutWork_centerInput | WorkOrderCreateOrConnectWithoutWork_centerInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutWork_centerInput | WorkOrderUpsertWithWhereUniqueWithoutWork_centerInput[]
    createMany?: WorkOrderCreateManyWork_centerInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutWork_centerInput | WorkOrderUpdateWithWhereUniqueWithoutWork_centerInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutWork_centerInput | WorkOrderUpdateManyWithWhereWithoutWork_centerInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutStock_ledgersInput = {
    create?: XOR<ProductCreateWithoutStock_ledgersInput, ProductUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStock_ledgersInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStock_ledgersInput = {
    create?: XOR<UserCreateWithoutStock_ledgersInput, UserUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: UserCreateOrConnectWithoutStock_ledgersInput
    connect?: UserWhereUniqueInput
  }

  export type ManufacturingOrderCreateNestedOneWithoutStock_ledgersInput = {
    create?: XOR<ManufacturingOrderCreateWithoutStock_ledgersInput, ManufacturingOrderUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutStock_ledgersInput
    connect?: ManufacturingOrderWhereUniqueInput
  }

  export type WorkOrderCreateNestedOneWithoutStock_ledgersInput = {
    create?: XOR<WorkOrderCreateWithoutStock_ledgersInput, WorkOrderUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutStock_ledgersInput
    connect?: WorkOrderWhereUniqueInput
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type EnumReferenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReferenceType
  }

  export type ProductUpdateOneRequiredWithoutStock_ledgersNestedInput = {
    create?: XOR<ProductCreateWithoutStock_ledgersInput, ProductUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStock_ledgersInput
    upsert?: ProductUpsertWithoutStock_ledgersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStock_ledgersInput, ProductUpdateWithoutStock_ledgersInput>, ProductUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type UserUpdateOneRequiredWithoutStock_ledgersNestedInput = {
    create?: XOR<UserCreateWithoutStock_ledgersInput, UserUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: UserCreateOrConnectWithoutStock_ledgersInput
    upsert?: UserUpsertWithoutStock_ledgersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStock_ledgersInput, UserUpdateWithoutStock_ledgersInput>, UserUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type ManufacturingOrderUpdateOneWithoutStock_ledgersNestedInput = {
    create?: XOR<ManufacturingOrderCreateWithoutStock_ledgersInput, ManufacturingOrderUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: ManufacturingOrderCreateOrConnectWithoutStock_ledgersInput
    upsert?: ManufacturingOrderUpsertWithoutStock_ledgersInput
    disconnect?: ManufacturingOrderWhereInput | boolean
    delete?: ManufacturingOrderWhereInput | boolean
    connect?: ManufacturingOrderWhereUniqueInput
    update?: XOR<XOR<ManufacturingOrderUpdateToOneWithWhereWithoutStock_ledgersInput, ManufacturingOrderUpdateWithoutStock_ledgersInput>, ManufacturingOrderUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type WorkOrderUpdateOneWithoutStock_ledgersNestedInput = {
    create?: XOR<WorkOrderCreateWithoutStock_ledgersInput, WorkOrderUncheckedCreateWithoutStock_ledgersInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutStock_ledgersInput
    upsert?: WorkOrderUpsertWithoutStock_ledgersInput
    disconnect?: WorkOrderWhereInput | boolean
    delete?: WorkOrderWhereInput | boolean
    connect?: WorkOrderWhereUniqueInput
    update?: XOR<XOR<WorkOrderUpdateToOneWithWhereWithoutStock_ledgersInput, WorkOrderUpdateWithoutStock_ledgersInput>, WorkOrderUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<UserCreateWithoutAudit_logsInput, UserUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudit_logsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAudit_logsNestedInput = {
    create?: XOR<UserCreateWithoutAudit_logsInput, UserUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAudit_logsInput
    upsert?: UserUpsertWithoutAudit_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAudit_logsInput, UserUpdateWithoutAudit_logsInput>, UserUncheckedUpdateWithoutAudit_logsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumProductTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[]
    notIn?: $Enums.ProductType[]
    not?: NestedEnumProductTypeFilter<$PrismaModel> | $Enums.ProductType
  }

  export type NestedEnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[]
    notIn?: $Enums.UnitType[]
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProductTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductType | EnumProductTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProductType[]
    notIn?: $Enums.ProductType[]
    not?: NestedEnumProductTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProductType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductTypeFilter<$PrismaModel>
    _max?: NestedEnumProductTypeFilter<$PrismaModel>
  }

  export type NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[]
    notIn?: $Enums.UnitType[]
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumComponentStateFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentState | EnumComponentStateFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentState[]
    notIn?: $Enums.ComponentState[]
    not?: NestedEnumComponentStateFilter<$PrismaModel> | $Enums.ComponentState
  }

  export type NestedEnumManufacturingOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ManufacturingOrderStatus | EnumManufacturingOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManufacturingOrderStatus[]
    notIn?: $Enums.ManufacturingOrderStatus[]
    not?: NestedEnumManufacturingOrderStatusFilter<$PrismaModel> | $Enums.ManufacturingOrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumComponentStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentState | EnumComponentStateFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentState[]
    notIn?: $Enums.ComponentState[]
    not?: NestedEnumComponentStateWithAggregatesFilter<$PrismaModel> | $Enums.ComponentState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComponentStateFilter<$PrismaModel>
    _max?: NestedEnumComponentStateFilter<$PrismaModel>
  }

  export type NestedEnumManufacturingOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManufacturingOrderStatus | EnumManufacturingOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ManufacturingOrderStatus[]
    notIn?: $Enums.ManufacturingOrderStatus[]
    not?: NestedEnumManufacturingOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ManufacturingOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManufacturingOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumManufacturingOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumWorkOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[]
    notIn?: $Enums.WorkOrderStatus[]
    not?: NestedEnumWorkOrderStatusFilter<$PrismaModel> | $Enums.WorkOrderStatus
  }

  export type NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[]
    notIn?: $Enums.WorkOrderStatus[]
    not?: NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[]
    notIn?: $Enums.MovementType[]
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumReferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[]
    notIn?: $Enums.ReferenceType[]
    not?: NestedEnumReferenceTypeFilter<$PrismaModel> | $Enums.ReferenceType
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[]
    notIn?: $Enums.MovementType[]
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumReferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[]
    notIn?: $Enums.ReferenceType[]
    not?: NestedEnumReferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumReferenceTypeFilter<$PrismaModel>
  }

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[]
    notIn?: $Enums.ReportType[]
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[]
    notIn?: $Enums.ReportType[]
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ManufacturingOrderCreateWithoutCreatorInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutManufacturing_ordersInput
    assignee?: UserCreateNestedOneWithoutAssigned_mosInput
    work_orders?: WorkOrderCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUncheckedCreateWithoutCreatorInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderUncheckedCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderCreateOrConnectWithoutCreatorInput = {
    where: ManufacturingOrderWhereUniqueInput
    create: XOR<ManufacturingOrderCreateWithoutCreatorInput, ManufacturingOrderUncheckedCreateWithoutCreatorInput>
  }

  export type ManufacturingOrderCreateManyCreatorInputEnvelope = {
    data: ManufacturingOrderCreateManyCreatorInput | ManufacturingOrderCreateManyCreatorInput[]
  }

  export type ManufacturingOrderCreateWithoutAssigneeInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutManufacturing_ordersInput
    creator: UserCreateNestedOneWithoutCreated_mosInput
    work_orders?: WorkOrderCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUncheckedCreateWithoutAssigneeInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderUncheckedCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderCreateOrConnectWithoutAssigneeInput = {
    where: ManufacturingOrderWhereUniqueInput
    create: XOR<ManufacturingOrderCreateWithoutAssigneeInput, ManufacturingOrderUncheckedCreateWithoutAssigneeInput>
  }

  export type ManufacturingOrderCreateManyAssigneeInputEnvelope = {
    data: ManufacturingOrderCreateManyAssigneeInput | ManufacturingOrderCreateManyAssigneeInput[]
  }

  export type WorkOrderCreateWithoutAssigneeInput = {
    wo_id?: string
    operation_name: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    manufacturing_order: ManufacturingOrderCreateNestedOneWithoutWork_ordersInput
    work_center: WorkCenterCreateNestedOneWithoutWork_ordersInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderUncheckedCreateWithoutAssigneeInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    work_center_id: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderCreateOrConnectWithoutAssigneeInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutAssigneeInput, WorkOrderUncheckedCreateWithoutAssigneeInput>
  }

  export type WorkOrderCreateManyAssigneeInputEnvelope = {
    data: WorkOrderCreateManyAssigneeInput | WorkOrderCreateManyAssigneeInput[]
  }

  export type StockLedgerCreateWithoutCreatorInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutStock_ledgersInput
    manufacturing_order?: ManufacturingOrderCreateNestedOneWithoutStock_ledgersInput
    work_order?: WorkOrderCreateNestedOneWithoutStock_ledgersInput
  }

  export type StockLedgerUncheckedCreateWithoutCreatorInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at?: Date | string
  }

  export type StockLedgerCreateOrConnectWithoutCreatorInput = {
    where: StockLedgerWhereUniqueInput
    create: XOR<StockLedgerCreateWithoutCreatorInput, StockLedgerUncheckedCreateWithoutCreatorInput>
  }

  export type StockLedgerCreateManyCreatorInputEnvelope = {
    data: StockLedgerCreateManyCreatorInput | StockLedgerCreateManyCreatorInput[]
  }

  export type ReportCreateWithoutUserInput = {
    report_id?: string
    report_type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    generated_at?: Date | string
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    report_id?: string
    report_type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    generated_at?: Date | string
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
  }

  export type AuditLogCreateWithoutUserInput = {
    log_id?: string
    action: string
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    log_id?: string
    action: string
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
  }

  export type ManufacturingOrderUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ManufacturingOrderWhereUniqueInput
    update: XOR<ManufacturingOrderUpdateWithoutCreatorInput, ManufacturingOrderUncheckedUpdateWithoutCreatorInput>
    create: XOR<ManufacturingOrderCreateWithoutCreatorInput, ManufacturingOrderUncheckedCreateWithoutCreatorInput>
  }

  export type ManufacturingOrderUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ManufacturingOrderWhereUniqueInput
    data: XOR<ManufacturingOrderUpdateWithoutCreatorInput, ManufacturingOrderUncheckedUpdateWithoutCreatorInput>
  }

  export type ManufacturingOrderUpdateManyWithWhereWithoutCreatorInput = {
    where: ManufacturingOrderScalarWhereInput
    data: XOR<ManufacturingOrderUpdateManyMutationInput, ManufacturingOrderUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ManufacturingOrderScalarWhereInput = {
    AND?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
    OR?: ManufacturingOrderScalarWhereInput[]
    NOT?: ManufacturingOrderScalarWhereInput | ManufacturingOrderScalarWhereInput[]
    mo_id?: StringFilter<"ManufacturingOrder"> | string
    product_id?: StringFilter<"ManufacturingOrder"> | string
    quantity?: FloatFilter<"ManufacturingOrder"> | number
    state?: EnumComponentStateFilter<"ManufacturingOrder"> | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFilter<"ManufacturingOrder"> | $Enums.ManufacturingOrderStatus
    scheduled_start?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    scheduled_end?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"ManufacturingOrder"> | Date | string | null
    created_by?: StringFilter<"ManufacturingOrder"> | string
    assigned_to?: StringNullableFilter<"ManufacturingOrder"> | string | null
    created_at?: DateTimeFilter<"ManufacturingOrder"> | Date | string
    updated_at?: DateTimeFilter<"ManufacturingOrder"> | Date | string
  }

  export type ManufacturingOrderUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: ManufacturingOrderWhereUniqueInput
    update: XOR<ManufacturingOrderUpdateWithoutAssigneeInput, ManufacturingOrderUncheckedUpdateWithoutAssigneeInput>
    create: XOR<ManufacturingOrderCreateWithoutAssigneeInput, ManufacturingOrderUncheckedCreateWithoutAssigneeInput>
  }

  export type ManufacturingOrderUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: ManufacturingOrderWhereUniqueInput
    data: XOR<ManufacturingOrderUpdateWithoutAssigneeInput, ManufacturingOrderUncheckedUpdateWithoutAssigneeInput>
  }

  export type ManufacturingOrderUpdateManyWithWhereWithoutAssigneeInput = {
    where: ManufacturingOrderScalarWhereInput
    data: XOR<ManufacturingOrderUpdateManyMutationInput, ManufacturingOrderUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type WorkOrderUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: WorkOrderWhereUniqueInput
    update: XOR<WorkOrderUpdateWithoutAssigneeInput, WorkOrderUncheckedUpdateWithoutAssigneeInput>
    create: XOR<WorkOrderCreateWithoutAssigneeInput, WorkOrderUncheckedCreateWithoutAssigneeInput>
  }

  export type WorkOrderUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: WorkOrderWhereUniqueInput
    data: XOR<WorkOrderUpdateWithoutAssigneeInput, WorkOrderUncheckedUpdateWithoutAssigneeInput>
  }

  export type WorkOrderUpdateManyWithWhereWithoutAssigneeInput = {
    where: WorkOrderScalarWhereInput
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type WorkOrderScalarWhereInput = {
    AND?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
    OR?: WorkOrderScalarWhereInput[]
    NOT?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
    wo_id?: StringFilter<"WorkOrder"> | string
    mo_id?: StringFilter<"WorkOrder"> | string
    operation_name?: StringFilter<"WorkOrder"> | string
    work_center_id?: StringFilter<"WorkOrder"> | string
    assigned_to?: StringNullableFilter<"WorkOrder"> | string | null
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    comments?: StringNullableFilter<"WorkOrder"> | string | null
    planned_time?: IntNullableFilter<"WorkOrder"> | number | null
    actual_time?: IntNullableFilter<"WorkOrder"> | number | null
    started_at?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
  }

  export type StockLedgerUpsertWithWhereUniqueWithoutCreatorInput = {
    where: StockLedgerWhereUniqueInput
    update: XOR<StockLedgerUpdateWithoutCreatorInput, StockLedgerUncheckedUpdateWithoutCreatorInput>
    create: XOR<StockLedgerCreateWithoutCreatorInput, StockLedgerUncheckedCreateWithoutCreatorInput>
  }

  export type StockLedgerUpdateWithWhereUniqueWithoutCreatorInput = {
    where: StockLedgerWhereUniqueInput
    data: XOR<StockLedgerUpdateWithoutCreatorInput, StockLedgerUncheckedUpdateWithoutCreatorInput>
  }

  export type StockLedgerUpdateManyWithWhereWithoutCreatorInput = {
    where: StockLedgerScalarWhereInput
    data: XOR<StockLedgerUpdateManyMutationInput, StockLedgerUncheckedUpdateManyWithoutCreatorInput>
  }

  export type StockLedgerScalarWhereInput = {
    AND?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
    OR?: StockLedgerScalarWhereInput[]
    NOT?: StockLedgerScalarWhereInput | StockLedgerScalarWhereInput[]
    ledger_id?: StringFilter<"StockLedger"> | string
    product_id?: StringFilter<"StockLedger"> | string
    movement_type?: EnumMovementTypeFilter<"StockLedger"> | $Enums.MovementType
    quantity?: FloatFilter<"StockLedger"> | number
    reference_type?: EnumReferenceTypeFilter<"StockLedger"> | $Enums.ReferenceType
    reference_id?: StringFilter<"StockLedger"> | string
    created_at?: DateTimeFilter<"StockLedger"> | Date | string
    created_by?: StringFilter<"StockLedger"> | string
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    report_id?: StringFilter<"Report"> | string
    user_id?: StringFilter<"Report"> | string
    report_type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    data?: JsonFilter<"Report">
    generated_at?: DateTimeFilter<"Report"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    log_id?: StringFilter<"AuditLog"> | string
    user_id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    details?: JsonNullableFilter<"AuditLog">
  }

  export type BOMCreateWithoutProductInput = {
    bom_id?: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
    component: ProductCreateNestedOneWithoutBoms_as_componentInput
  }

  export type BOMUncheckedCreateWithoutProductInput = {
    bom_id?: string
    component_id: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
  }

  export type BOMCreateOrConnectWithoutProductInput = {
    where: BOMWhereUniqueInput
    create: XOR<BOMCreateWithoutProductInput, BOMUncheckedCreateWithoutProductInput>
  }

  export type BOMCreateManyProductInputEnvelope = {
    data: BOMCreateManyProductInput | BOMCreateManyProductInput[]
  }

  export type BOMCreateWithoutComponentInput = {
    bom_id?: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutBoms_as_productInput
  }

  export type BOMUncheckedCreateWithoutComponentInput = {
    bom_id?: string
    product_id: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
  }

  export type BOMCreateOrConnectWithoutComponentInput = {
    where: BOMWhereUniqueInput
    create: XOR<BOMCreateWithoutComponentInput, BOMUncheckedCreateWithoutComponentInput>
  }

  export type BOMCreateManyComponentInputEnvelope = {
    data: BOMCreateManyComponentInput | BOMCreateManyComponentInput[]
  }

  export type ManufacturingOrderCreateWithoutProductInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    creator: UserCreateNestedOneWithoutCreated_mosInput
    assignee?: UserCreateNestedOneWithoutAssigned_mosInput
    work_orders?: WorkOrderCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUncheckedCreateWithoutProductInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderUncheckedCreateNestedManyWithoutManufacturing_orderInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderCreateOrConnectWithoutProductInput = {
    where: ManufacturingOrderWhereUniqueInput
    create: XOR<ManufacturingOrderCreateWithoutProductInput, ManufacturingOrderUncheckedCreateWithoutProductInput>
  }

  export type ManufacturingOrderCreateManyProductInputEnvelope = {
    data: ManufacturingOrderCreateManyProductInput | ManufacturingOrderCreateManyProductInput[]
  }

  export type StockLedgerCreateWithoutProductInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutStock_ledgersInput
    manufacturing_order?: ManufacturingOrderCreateNestedOneWithoutStock_ledgersInput
    work_order?: WorkOrderCreateNestedOneWithoutStock_ledgersInput
  }

  export type StockLedgerUncheckedCreateWithoutProductInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at?: Date | string
    created_by: string
  }

  export type StockLedgerCreateOrConnectWithoutProductInput = {
    where: StockLedgerWhereUniqueInput
    create: XOR<StockLedgerCreateWithoutProductInput, StockLedgerUncheckedCreateWithoutProductInput>
  }

  export type StockLedgerCreateManyProductInputEnvelope = {
    data: StockLedgerCreateManyProductInput | StockLedgerCreateManyProductInput[]
  }

  export type BOMUpsertWithWhereUniqueWithoutProductInput = {
    where: BOMWhereUniqueInput
    update: XOR<BOMUpdateWithoutProductInput, BOMUncheckedUpdateWithoutProductInput>
    create: XOR<BOMCreateWithoutProductInput, BOMUncheckedCreateWithoutProductInput>
  }

  export type BOMUpdateWithWhereUniqueWithoutProductInput = {
    where: BOMWhereUniqueInput
    data: XOR<BOMUpdateWithoutProductInput, BOMUncheckedUpdateWithoutProductInput>
  }

  export type BOMUpdateManyWithWhereWithoutProductInput = {
    where: BOMScalarWhereInput
    data: XOR<BOMUpdateManyMutationInput, BOMUncheckedUpdateManyWithoutProductInput>
  }

  export type BOMScalarWhereInput = {
    AND?: BOMScalarWhereInput | BOMScalarWhereInput[]
    OR?: BOMScalarWhereInput[]
    NOT?: BOMScalarWhereInput | BOMScalarWhereInput[]
    bom_id?: StringFilter<"BOM"> | string
    product_id?: StringFilter<"BOM"> | string
    component_id?: StringFilter<"BOM"> | string
    quantity_required?: FloatFilter<"BOM"> | number
    operation_sequence?: StringFilter<"BOM"> | string
    created_at?: DateTimeFilter<"BOM"> | Date | string
  }

  export type BOMUpsertWithWhereUniqueWithoutComponentInput = {
    where: BOMWhereUniqueInput
    update: XOR<BOMUpdateWithoutComponentInput, BOMUncheckedUpdateWithoutComponentInput>
    create: XOR<BOMCreateWithoutComponentInput, BOMUncheckedCreateWithoutComponentInput>
  }

  export type BOMUpdateWithWhereUniqueWithoutComponentInput = {
    where: BOMWhereUniqueInput
    data: XOR<BOMUpdateWithoutComponentInput, BOMUncheckedUpdateWithoutComponentInput>
  }

  export type BOMUpdateManyWithWhereWithoutComponentInput = {
    where: BOMScalarWhereInput
    data: XOR<BOMUpdateManyMutationInput, BOMUncheckedUpdateManyWithoutComponentInput>
  }

  export type ManufacturingOrderUpsertWithWhereUniqueWithoutProductInput = {
    where: ManufacturingOrderWhereUniqueInput
    update: XOR<ManufacturingOrderUpdateWithoutProductInput, ManufacturingOrderUncheckedUpdateWithoutProductInput>
    create: XOR<ManufacturingOrderCreateWithoutProductInput, ManufacturingOrderUncheckedCreateWithoutProductInput>
  }

  export type ManufacturingOrderUpdateWithWhereUniqueWithoutProductInput = {
    where: ManufacturingOrderWhereUniqueInput
    data: XOR<ManufacturingOrderUpdateWithoutProductInput, ManufacturingOrderUncheckedUpdateWithoutProductInput>
  }

  export type ManufacturingOrderUpdateManyWithWhereWithoutProductInput = {
    where: ManufacturingOrderScalarWhereInput
    data: XOR<ManufacturingOrderUpdateManyMutationInput, ManufacturingOrderUncheckedUpdateManyWithoutProductInput>
  }

  export type StockLedgerUpsertWithWhereUniqueWithoutProductInput = {
    where: StockLedgerWhereUniqueInput
    update: XOR<StockLedgerUpdateWithoutProductInput, StockLedgerUncheckedUpdateWithoutProductInput>
    create: XOR<StockLedgerCreateWithoutProductInput, StockLedgerUncheckedCreateWithoutProductInput>
  }

  export type StockLedgerUpdateWithWhereUniqueWithoutProductInput = {
    where: StockLedgerWhereUniqueInput
    data: XOR<StockLedgerUpdateWithoutProductInput, StockLedgerUncheckedUpdateWithoutProductInput>
  }

  export type StockLedgerUpdateManyWithWhereWithoutProductInput = {
    where: StockLedgerScalarWhereInput
    data: XOR<StockLedgerUpdateManyMutationInput, StockLedgerUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutBoms_as_productInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_component?: BOMCreateNestedManyWithoutComponentInput
    manufacturing_orders?: ManufacturingOrderCreateNestedManyWithoutProductInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBoms_as_productInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_component?: BOMUncheckedCreateNestedManyWithoutComponentInput
    manufacturing_orders?: ManufacturingOrderUncheckedCreateNestedManyWithoutProductInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBoms_as_productInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBoms_as_productInput, ProductUncheckedCreateWithoutBoms_as_productInput>
  }

  export type ProductCreateWithoutBoms_as_componentInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMCreateNestedManyWithoutProductInput
    manufacturing_orders?: ManufacturingOrderCreateNestedManyWithoutProductInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBoms_as_componentInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMUncheckedCreateNestedManyWithoutProductInput
    manufacturing_orders?: ManufacturingOrderUncheckedCreateNestedManyWithoutProductInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBoms_as_componentInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBoms_as_componentInput, ProductUncheckedCreateWithoutBoms_as_componentInput>
  }

  export type ProductUpsertWithoutBoms_as_productInput = {
    update: XOR<ProductUpdateWithoutBoms_as_productInput, ProductUncheckedUpdateWithoutBoms_as_productInput>
    create: XOR<ProductCreateWithoutBoms_as_productInput, ProductUncheckedCreateWithoutBoms_as_productInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBoms_as_productInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBoms_as_productInput, ProductUncheckedUpdateWithoutBoms_as_productInput>
  }

  export type ProductUpdateWithoutBoms_as_productInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_component?: BOMUpdateManyWithoutComponentNestedInput
    manufacturing_orders?: ManufacturingOrderUpdateManyWithoutProductNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBoms_as_productInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_component?: BOMUncheckedUpdateManyWithoutComponentNestedInput
    manufacturing_orders?: ManufacturingOrderUncheckedUpdateManyWithoutProductNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUpsertWithoutBoms_as_componentInput = {
    update: XOR<ProductUpdateWithoutBoms_as_componentInput, ProductUncheckedUpdateWithoutBoms_as_componentInput>
    create: XOR<ProductCreateWithoutBoms_as_componentInput, ProductUncheckedCreateWithoutBoms_as_componentInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutBoms_as_componentInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutBoms_as_componentInput, ProductUncheckedUpdateWithoutBoms_as_componentInput>
  }

  export type ProductUpdateWithoutBoms_as_componentInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUpdateManyWithoutProductNestedInput
    manufacturing_orders?: ManufacturingOrderUpdateManyWithoutProductNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBoms_as_componentInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUncheckedUpdateManyWithoutProductNestedInput
    manufacturing_orders?: ManufacturingOrderUncheckedUpdateManyWithoutProductNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutManufacturing_ordersInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMCreateNestedManyWithoutProductInput
    boms_as_component?: BOMCreateNestedManyWithoutComponentInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutManufacturing_ordersInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMUncheckedCreateNestedManyWithoutProductInput
    boms_as_component?: BOMUncheckedCreateNestedManyWithoutComponentInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutManufacturing_ordersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutManufacturing_ordersInput, ProductUncheckedCreateWithoutManufacturing_ordersInput>
  }

  export type UserCreateWithoutCreated_mosInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    assigned_mos?: ManufacturingOrderCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutCreatorInput
    reports?: ReportCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_mosInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    assigned_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutCreatorInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_mosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_mosInput, UserUncheckedCreateWithoutCreated_mosInput>
  }

  export type UserCreateWithoutAssigned_mosInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderCreateNestedManyWithoutCreatorInput
    assigned_wos?: WorkOrderCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutCreatorInput
    reports?: ReportCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssigned_mosInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput
    assigned_wos?: WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutCreatorInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssigned_mosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssigned_mosInput, UserUncheckedCreateWithoutAssigned_mosInput>
  }

  export type WorkOrderCreateWithoutManufacturing_orderInput = {
    wo_id?: string
    operation_name: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    work_center: WorkCenterCreateNestedOneWithoutWork_ordersInput
    assignee?: UserCreateNestedOneWithoutAssigned_wosInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderUncheckedCreateWithoutManufacturing_orderInput = {
    wo_id?: string
    operation_name: string
    work_center_id: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderCreateOrConnectWithoutManufacturing_orderInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutManufacturing_orderInput, WorkOrderUncheckedCreateWithoutManufacturing_orderInput>
  }

  export type WorkOrderCreateManyManufacturing_orderInputEnvelope = {
    data: WorkOrderCreateManyManufacturing_orderInput | WorkOrderCreateManyManufacturing_orderInput[]
  }

  export type StockLedgerCreateWithoutManufacturing_orderInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutStock_ledgersInput
    creator: UserCreateNestedOneWithoutStock_ledgersInput
    work_order?: WorkOrderCreateNestedOneWithoutStock_ledgersInput
  }

  export type StockLedgerUncheckedCreateWithoutManufacturing_orderInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    created_by: string
  }

  export type StockLedgerCreateOrConnectWithoutManufacturing_orderInput = {
    where: StockLedgerWhereUniqueInput
    create: XOR<StockLedgerCreateWithoutManufacturing_orderInput, StockLedgerUncheckedCreateWithoutManufacturing_orderInput>
  }

  export type StockLedgerCreateManyManufacturing_orderInputEnvelope = {
    data: StockLedgerCreateManyManufacturing_orderInput | StockLedgerCreateManyManufacturing_orderInput[]
  }

  export type ProductUpsertWithoutManufacturing_ordersInput = {
    update: XOR<ProductUpdateWithoutManufacturing_ordersInput, ProductUncheckedUpdateWithoutManufacturing_ordersInput>
    create: XOR<ProductCreateWithoutManufacturing_ordersInput, ProductUncheckedCreateWithoutManufacturing_ordersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutManufacturing_ordersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutManufacturing_ordersInput, ProductUncheckedUpdateWithoutManufacturing_ordersInput>
  }

  export type ProductUpdateWithoutManufacturing_ordersInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUpdateManyWithoutProductNestedInput
    boms_as_component?: BOMUpdateManyWithoutComponentNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutManufacturing_ordersInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUncheckedUpdateManyWithoutProductNestedInput
    boms_as_component?: BOMUncheckedUpdateManyWithoutComponentNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutCreated_mosInput = {
    update: XOR<UserUpdateWithoutCreated_mosInput, UserUncheckedUpdateWithoutCreated_mosInput>
    create: XOR<UserCreateWithoutCreated_mosInput, UserUncheckedCreateWithoutCreated_mosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_mosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_mosInput, UserUncheckedUpdateWithoutCreated_mosInput>
  }

  export type UserUpdateWithoutCreated_mosInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_mos?: ManufacturingOrderUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutCreatorNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_mosInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned_mos?: ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutAssigned_mosInput = {
    update: XOR<UserUpdateWithoutAssigned_mosInput, UserUncheckedUpdateWithoutAssigned_mosInput>
    create: XOR<UserCreateWithoutAssigned_mosInput, UserUncheckedCreateWithoutAssigned_mosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssigned_mosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssigned_mosInput, UserUncheckedUpdateWithoutAssigned_mosInput>
  }

  export type UserUpdateWithoutAssigned_mosInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUpdateManyWithoutCreatorNestedInput
    assigned_wos?: WorkOrderUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutCreatorNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssigned_mosInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_wos?: WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkOrderUpsertWithWhereUniqueWithoutManufacturing_orderInput = {
    where: WorkOrderWhereUniqueInput
    update: XOR<WorkOrderUpdateWithoutManufacturing_orderInput, WorkOrderUncheckedUpdateWithoutManufacturing_orderInput>
    create: XOR<WorkOrderCreateWithoutManufacturing_orderInput, WorkOrderUncheckedCreateWithoutManufacturing_orderInput>
  }

  export type WorkOrderUpdateWithWhereUniqueWithoutManufacturing_orderInput = {
    where: WorkOrderWhereUniqueInput
    data: XOR<WorkOrderUpdateWithoutManufacturing_orderInput, WorkOrderUncheckedUpdateWithoutManufacturing_orderInput>
  }

  export type WorkOrderUpdateManyWithWhereWithoutManufacturing_orderInput = {
    where: WorkOrderScalarWhereInput
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyWithoutManufacturing_orderInput>
  }

  export type StockLedgerUpsertWithWhereUniqueWithoutManufacturing_orderInput = {
    where: StockLedgerWhereUniqueInput
    update: XOR<StockLedgerUpdateWithoutManufacturing_orderInput, StockLedgerUncheckedUpdateWithoutManufacturing_orderInput>
    create: XOR<StockLedgerCreateWithoutManufacturing_orderInput, StockLedgerUncheckedCreateWithoutManufacturing_orderInput>
  }

  export type StockLedgerUpdateWithWhereUniqueWithoutManufacturing_orderInput = {
    where: StockLedgerWhereUniqueInput
    data: XOR<StockLedgerUpdateWithoutManufacturing_orderInput, StockLedgerUncheckedUpdateWithoutManufacturing_orderInput>
  }

  export type StockLedgerUpdateManyWithWhereWithoutManufacturing_orderInput = {
    where: StockLedgerScalarWhereInput
    data: XOR<StockLedgerUpdateManyMutationInput, StockLedgerUncheckedUpdateManyWithoutManufacturing_orderInput>
  }

  export type ManufacturingOrderCreateWithoutWork_ordersInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutManufacturing_ordersInput
    creator: UserCreateNestedOneWithoutCreated_mosInput
    assignee?: UserCreateNestedOneWithoutAssigned_mosInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUncheckedCreateWithoutWork_ordersInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderCreateOrConnectWithoutWork_ordersInput = {
    where: ManufacturingOrderWhereUniqueInput
    create: XOR<ManufacturingOrderCreateWithoutWork_ordersInput, ManufacturingOrderUncheckedCreateWithoutWork_ordersInput>
  }

  export type WorkCenterCreateWithoutWork_ordersInput = {
    work_center_id?: string
    name: string
    cost_per_hour: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkCenterUncheckedCreateWithoutWork_ordersInput = {
    work_center_id?: string
    name: string
    cost_per_hour: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkCenterCreateOrConnectWithoutWork_ordersInput = {
    where: WorkCenterWhereUniqueInput
    create: XOR<WorkCenterCreateWithoutWork_ordersInput, WorkCenterUncheckedCreateWithoutWork_ordersInput>
  }

  export type UserCreateWithoutAssigned_wosInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutCreatorInput
    reports?: ReportCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssigned_wosInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutCreatorInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssigned_wosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssigned_wosInput, UserUncheckedCreateWithoutAssigned_wosInput>
  }

  export type StockLedgerCreateWithoutWork_orderInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutStock_ledgersInput
    creator: UserCreateNestedOneWithoutStock_ledgersInput
    manufacturing_order?: ManufacturingOrderCreateNestedOneWithoutStock_ledgersInput
  }

  export type StockLedgerUncheckedCreateWithoutWork_orderInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    created_by: string
  }

  export type StockLedgerCreateOrConnectWithoutWork_orderInput = {
    where: StockLedgerWhereUniqueInput
    create: XOR<StockLedgerCreateWithoutWork_orderInput, StockLedgerUncheckedCreateWithoutWork_orderInput>
  }

  export type StockLedgerCreateManyWork_orderInputEnvelope = {
    data: StockLedgerCreateManyWork_orderInput | StockLedgerCreateManyWork_orderInput[]
  }

  export type ManufacturingOrderUpsertWithoutWork_ordersInput = {
    update: XOR<ManufacturingOrderUpdateWithoutWork_ordersInput, ManufacturingOrderUncheckedUpdateWithoutWork_ordersInput>
    create: XOR<ManufacturingOrderCreateWithoutWork_ordersInput, ManufacturingOrderUncheckedCreateWithoutWork_ordersInput>
    where?: ManufacturingOrderWhereInput
  }

  export type ManufacturingOrderUpdateToOneWithWhereWithoutWork_ordersInput = {
    where?: ManufacturingOrderWhereInput
    data: XOR<ManufacturingOrderUpdateWithoutWork_ordersInput, ManufacturingOrderUncheckedUpdateWithoutWork_ordersInput>
  }

  export type ManufacturingOrderUpdateWithoutWork_ordersInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutManufacturing_ordersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_mosNestedInput
    assignee?: UserUpdateOneWithoutAssigned_mosNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateWithoutWork_ordersInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type WorkCenterUpsertWithoutWork_ordersInput = {
    update: XOR<WorkCenterUpdateWithoutWork_ordersInput, WorkCenterUncheckedUpdateWithoutWork_ordersInput>
    create: XOR<WorkCenterCreateWithoutWork_ordersInput, WorkCenterUncheckedCreateWithoutWork_ordersInput>
    where?: WorkCenterWhereInput
  }

  export type WorkCenterUpdateToOneWithWhereWithoutWork_ordersInput = {
    where?: WorkCenterWhereInput
    data: XOR<WorkCenterUpdateWithoutWork_ordersInput, WorkCenterUncheckedUpdateWithoutWork_ordersInput>
  }

  export type WorkCenterUpdateWithoutWork_ordersInput = {
    work_center_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost_per_hour?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCenterUncheckedUpdateWithoutWork_ordersInput = {
    work_center_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost_per_hour?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssigned_wosInput = {
    update: XOR<UserUpdateWithoutAssigned_wosInput, UserUncheckedUpdateWithoutAssigned_wosInput>
    create: XOR<UserCreateWithoutAssigned_wosInput, UserUncheckedCreateWithoutAssigned_wosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssigned_wosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssigned_wosInput, UserUncheckedUpdateWithoutAssigned_wosInput>
  }

  export type UserUpdateWithoutAssigned_wosInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutCreatorNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssigned_wosInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StockLedgerUpsertWithWhereUniqueWithoutWork_orderInput = {
    where: StockLedgerWhereUniqueInput
    update: XOR<StockLedgerUpdateWithoutWork_orderInput, StockLedgerUncheckedUpdateWithoutWork_orderInput>
    create: XOR<StockLedgerCreateWithoutWork_orderInput, StockLedgerUncheckedCreateWithoutWork_orderInput>
  }

  export type StockLedgerUpdateWithWhereUniqueWithoutWork_orderInput = {
    where: StockLedgerWhereUniqueInput
    data: XOR<StockLedgerUpdateWithoutWork_orderInput, StockLedgerUncheckedUpdateWithoutWork_orderInput>
  }

  export type StockLedgerUpdateManyWithWhereWithoutWork_orderInput = {
    where: StockLedgerScalarWhereInput
    data: XOR<StockLedgerUpdateManyMutationInput, StockLedgerUncheckedUpdateManyWithoutWork_orderInput>
  }

  export type WorkOrderCreateWithoutWork_centerInput = {
    wo_id?: string
    operation_name: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    manufacturing_order: ManufacturingOrderCreateNestedOneWithoutWork_ordersInput
    assignee?: UserCreateNestedOneWithoutAssigned_wosInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderUncheckedCreateWithoutWork_centerInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutWork_orderInput
  }

  export type WorkOrderCreateOrConnectWithoutWork_centerInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutWork_centerInput, WorkOrderUncheckedCreateWithoutWork_centerInput>
  }

  export type WorkOrderCreateManyWork_centerInputEnvelope = {
    data: WorkOrderCreateManyWork_centerInput | WorkOrderCreateManyWork_centerInput[]
  }

  export type WorkOrderUpsertWithWhereUniqueWithoutWork_centerInput = {
    where: WorkOrderWhereUniqueInput
    update: XOR<WorkOrderUpdateWithoutWork_centerInput, WorkOrderUncheckedUpdateWithoutWork_centerInput>
    create: XOR<WorkOrderCreateWithoutWork_centerInput, WorkOrderUncheckedCreateWithoutWork_centerInput>
  }

  export type WorkOrderUpdateWithWhereUniqueWithoutWork_centerInput = {
    where: WorkOrderWhereUniqueInput
    data: XOR<WorkOrderUpdateWithoutWork_centerInput, WorkOrderUncheckedUpdateWithoutWork_centerInput>
  }

  export type WorkOrderUpdateManyWithWhereWithoutWork_centerInput = {
    where: WorkOrderScalarWhereInput
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyWithoutWork_centerInput>
  }

  export type ProductCreateWithoutStock_ledgersInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMCreateNestedManyWithoutProductInput
    boms_as_component?: BOMCreateNestedManyWithoutComponentInput
    manufacturing_orders?: ManufacturingOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStock_ledgersInput = {
    product_id?: string
    product_name: string
    type: $Enums.ProductType
    unit_of_measure: $Enums.UnitType
    current_stock?: number
    cost_per_unit: number
    created_at?: Date | string
    updated_at?: Date | string
    boms_as_product?: BOMUncheckedCreateNestedManyWithoutProductInput
    boms_as_component?: BOMUncheckedCreateNestedManyWithoutComponentInput
    manufacturing_orders?: ManufacturingOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStock_ledgersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStock_ledgersInput, ProductUncheckedCreateWithoutStock_ledgersInput>
  }

  export type UserCreateWithoutStock_ledgersInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderCreateNestedManyWithoutAssigneeInput
    reports?: ReportCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStock_ledgersInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStock_ledgersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStock_ledgersInput, UserUncheckedCreateWithoutStock_ledgersInput>
  }

  export type ManufacturingOrderCreateWithoutStock_ledgersInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    product: ProductCreateNestedOneWithoutManufacturing_ordersInput
    creator: UserCreateNestedOneWithoutCreated_mosInput
    assignee?: UserCreateNestedOneWithoutAssigned_mosInput
    work_orders?: WorkOrderCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderUncheckedCreateWithoutStock_ledgersInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    work_orders?: WorkOrderUncheckedCreateNestedManyWithoutManufacturing_orderInput
  }

  export type ManufacturingOrderCreateOrConnectWithoutStock_ledgersInput = {
    where: ManufacturingOrderWhereUniqueInput
    create: XOR<ManufacturingOrderCreateWithoutStock_ledgersInput, ManufacturingOrderUncheckedCreateWithoutStock_ledgersInput>
  }

  export type WorkOrderCreateWithoutStock_ledgersInput = {
    wo_id?: string
    operation_name: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
    manufacturing_order: ManufacturingOrderCreateNestedOneWithoutWork_ordersInput
    work_center: WorkCenterCreateNestedOneWithoutWork_ordersInput
    assignee?: UserCreateNestedOneWithoutAssigned_wosInput
  }

  export type WorkOrderUncheckedCreateWithoutStock_ledgersInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    work_center_id: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type WorkOrderCreateOrConnectWithoutStock_ledgersInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutStock_ledgersInput, WorkOrderUncheckedCreateWithoutStock_ledgersInput>
  }

  export type ProductUpsertWithoutStock_ledgersInput = {
    update: XOR<ProductUpdateWithoutStock_ledgersInput, ProductUncheckedUpdateWithoutStock_ledgersInput>
    create: XOR<ProductCreateWithoutStock_ledgersInput, ProductUncheckedCreateWithoutStock_ledgersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStock_ledgersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStock_ledgersInput, ProductUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type ProductUpdateWithoutStock_ledgersInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUpdateManyWithoutProductNestedInput
    boms_as_component?: BOMUpdateManyWithoutComponentNestedInput
    manufacturing_orders?: ManufacturingOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStock_ledgersInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    type?: EnumProductTypeFieldUpdateOperationsInput | $Enums.ProductType
    unit_of_measure?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    current_stock?: FloatFieldUpdateOperationsInput | number
    cost_per_unit?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    boms_as_product?: BOMUncheckedUpdateManyWithoutProductNestedInput
    boms_as_component?: BOMUncheckedUpdateManyWithoutComponentNestedInput
    manufacturing_orders?: ManufacturingOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutStock_ledgersInput = {
    update: XOR<UserUpdateWithoutStock_ledgersInput, UserUncheckedUpdateWithoutStock_ledgersInput>
    create: XOR<UserCreateWithoutStock_ledgersInput, UserUncheckedCreateWithoutStock_ledgersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStock_ledgersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStock_ledgersInput, UserUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type UserUpdateWithoutStock_ledgersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUpdateManyWithoutAssigneeNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStock_ledgersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ManufacturingOrderUpsertWithoutStock_ledgersInput = {
    update: XOR<ManufacturingOrderUpdateWithoutStock_ledgersInput, ManufacturingOrderUncheckedUpdateWithoutStock_ledgersInput>
    create: XOR<ManufacturingOrderCreateWithoutStock_ledgersInput, ManufacturingOrderUncheckedCreateWithoutStock_ledgersInput>
    where?: ManufacturingOrderWhereInput
  }

  export type ManufacturingOrderUpdateToOneWithWhereWithoutStock_ledgersInput = {
    where?: ManufacturingOrderWhereInput
    data: XOR<ManufacturingOrderUpdateWithoutStock_ledgersInput, ManufacturingOrderUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type ManufacturingOrderUpdateWithoutStock_ledgersInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutManufacturing_ordersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_mosNestedInput
    assignee?: UserUpdateOneWithoutAssigned_mosNestedInput
    work_orders?: WorkOrderUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateWithoutStock_ledgersInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUncheckedUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type WorkOrderUpsertWithoutStock_ledgersInput = {
    update: XOR<WorkOrderUpdateWithoutStock_ledgersInput, WorkOrderUncheckedUpdateWithoutStock_ledgersInput>
    create: XOR<WorkOrderCreateWithoutStock_ledgersInput, WorkOrderUncheckedCreateWithoutStock_ledgersInput>
    where?: WorkOrderWhereInput
  }

  export type WorkOrderUpdateToOneWithWhereWithoutStock_ledgersInput = {
    where?: WorkOrderWhereInput
    data: XOR<WorkOrderUpdateWithoutStock_ledgersInput, WorkOrderUncheckedUpdateWithoutStock_ledgersInput>
  }

  export type WorkOrderUpdateWithoutStock_ledgersInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturing_order?: ManufacturingOrderUpdateOneRequiredWithoutWork_ordersNestedInput
    work_center?: WorkCenterUpdateOneRequiredWithoutWork_ordersNestedInput
    assignee?: UserUpdateOneWithoutAssigned_wosNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutStock_ledgersInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutReportsInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutCreatorInput
    audit_logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutCreatorInput
    audit_logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutCreatorNestedInput
    audit_logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput
    audit_logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAudit_logsInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerCreateNestedManyWithoutCreatorInput
    reports?: ReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAudit_logsInput = {
    user_id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.UserRole
    phone?: string | null
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    created_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutCreatorInput
    assigned_mos?: ManufacturingOrderUncheckedCreateNestedManyWithoutAssigneeInput
    assigned_wos?: WorkOrderUncheckedCreateNestedManyWithoutAssigneeInput
    stock_ledgers?: StockLedgerUncheckedCreateNestedManyWithoutCreatorInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAudit_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAudit_logsInput, UserUncheckedCreateWithoutAudit_logsInput>
  }

  export type UserUpsertWithoutAudit_logsInput = {
    update: XOR<UserUpdateWithoutAudit_logsInput, UserUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<UserCreateWithoutAudit_logsInput, UserUncheckedCreateWithoutAudit_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAudit_logsInput, UserUncheckedUpdateWithoutAudit_logsInput>
  }

  export type UserUpdateWithoutAudit_logsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutCreatorNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAudit_logsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_mos?: ManufacturingOrderUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_mos?: ManufacturingOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    assigned_wos?: WorkOrderUncheckedUpdateManyWithoutAssigneeNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutCreatorNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ManufacturingOrderCreateManyCreatorInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ManufacturingOrderCreateManyAssigneeInput = {
    mo_id?: string
    product_id: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkOrderCreateManyAssigneeInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    work_center_id: string
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type StockLedgerCreateManyCreatorInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at?: Date | string
  }

  export type ReportCreateManyUserInput = {
    report_id?: string
    report_type: $Enums.ReportType
    data: JsonNullValueInput | InputJsonValue
    generated_at?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    log_id?: string
    action: string
    timestamp?: Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ManufacturingOrderUpdateWithoutCreatorInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutManufacturing_ordersNestedInput
    assignee?: UserUpdateOneWithoutAssigned_mosNestedInput
    work_orders?: WorkOrderUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateWithoutCreatorInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUncheckedUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateManyWithoutCreatorInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturingOrderUpdateWithoutAssigneeInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutManufacturing_ordersNestedInput
    creator?: UserUpdateOneRequiredWithoutCreated_mosNestedInput
    work_orders?: WorkOrderUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateWithoutAssigneeInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUncheckedUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateManyWithoutAssigneeInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderUpdateWithoutAssigneeInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturing_order?: ManufacturingOrderUpdateOneRequiredWithoutWork_ordersNestedInput
    work_center?: WorkCenterUpdateOneRequiredWithoutWork_ordersNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutAssigneeInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateManyWithoutAssigneeInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockLedgerUpdateWithoutCreatorInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStock_ledgersNestedInput
    manufacturing_order?: ManufacturingOrderUpdateOneWithoutStock_ledgersNestedInput
    work_order?: WorkOrderUpdateOneWithoutStock_ledgersNestedInput
  }

  export type StockLedgerUncheckedUpdateWithoutCreatorInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLedgerUncheckedUpdateManyWithoutCreatorInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    report_id?: StringFieldUpdateOperationsInput | string
    report_type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    data?: JsonNullValueInput | InputJsonValue
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BOMCreateManyProductInput = {
    bom_id?: string
    component_id: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
  }

  export type BOMCreateManyComponentInput = {
    bom_id?: string
    product_id: string
    quantity_required: number
    operation_sequence: string
    created_at?: Date | string
  }

  export type ManufacturingOrderCreateManyProductInput = {
    mo_id?: string
    quantity: number
    state?: $Enums.ComponentState
    status?: $Enums.ManufacturingOrderStatus
    scheduled_start?: Date | string | null
    scheduled_end?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    created_by: string
    assigned_to?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StockLedgerCreateManyProductInput = {
    ledger_id?: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    reference_id: string
    created_at?: Date | string
    created_by: string
  }

  export type BOMUpdateWithoutProductInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: ProductUpdateOneRequiredWithoutBoms_as_componentNestedInput
  }

  export type BOMUncheckedUpdateWithoutProductInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    component_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMUncheckedUpdateManyWithoutProductInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    component_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMUpdateWithoutComponentInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutBoms_as_productNestedInput
  }

  export type BOMUncheckedUpdateWithoutComponentInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMUncheckedUpdateManyWithoutComponentInput = {
    bom_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity_required?: FloatFieldUpdateOperationsInput | number
    operation_sequence?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManufacturingOrderUpdateWithoutProductInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreated_mosNestedInput
    assignee?: UserUpdateOneWithoutAssigned_mosNestedInput
    work_orders?: WorkOrderUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateWithoutProductInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work_orders?: WorkOrderUncheckedUpdateManyWithoutManufacturing_orderNestedInput
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutManufacturing_orderNestedInput
  }

  export type ManufacturingOrderUncheckedUpdateManyWithoutProductInput = {
    mo_id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    state?: EnumComponentStateFieldUpdateOperationsInput | $Enums.ComponentState
    status?: EnumManufacturingOrderStatusFieldUpdateOperationsInput | $Enums.ManufacturingOrderStatus
    scheduled_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockLedgerUpdateWithoutProductInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutStock_ledgersNestedInput
    manufacturing_order?: ManufacturingOrderUpdateOneWithoutStock_ledgersNestedInput
    work_order?: WorkOrderUpdateOneWithoutStock_ledgersNestedInput
  }

  export type StockLedgerUncheckedUpdateWithoutProductInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type StockLedgerUncheckedUpdateManyWithoutProductInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    reference_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type WorkOrderCreateManyManufacturing_orderInput = {
    wo_id?: string
    operation_name: string
    work_center_id: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type StockLedgerCreateManyManufacturing_orderInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    created_by: string
  }

  export type WorkOrderUpdateWithoutManufacturing_orderInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    work_center?: WorkCenterUpdateOneRequiredWithoutWork_ordersNestedInput
    assignee?: UserUpdateOneWithoutAssigned_wosNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutManufacturing_orderInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateManyWithoutManufacturing_orderInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    work_center_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockLedgerUpdateWithoutManufacturing_orderInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStock_ledgersNestedInput
    creator?: UserUpdateOneRequiredWithoutStock_ledgersNestedInput
    work_order?: WorkOrderUpdateOneWithoutStock_ledgersNestedInput
  }

  export type StockLedgerUncheckedUpdateWithoutManufacturing_orderInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type StockLedgerUncheckedUpdateManyWithoutManufacturing_orderInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type StockLedgerCreateManyWork_orderInput = {
    ledger_id?: string
    product_id: string
    movement_type: $Enums.MovementType
    quantity: number
    reference_type: $Enums.ReferenceType
    created_at?: Date | string
    created_by: string
  }

  export type StockLedgerUpdateWithoutWork_orderInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStock_ledgersNestedInput
    creator?: UserUpdateOneRequiredWithoutStock_ledgersNestedInput
    manufacturing_order?: ManufacturingOrderUpdateOneWithoutStock_ledgersNestedInput
  }

  export type StockLedgerUncheckedUpdateWithoutWork_orderInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type StockLedgerUncheckedUpdateManyWithoutWork_orderInput = {
    ledger_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    movement_type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: FloatFieldUpdateOperationsInput | number
    reference_type?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
  }

  export type WorkOrderCreateManyWork_centerInput = {
    wo_id?: string
    mo_id: string
    operation_name: string
    assigned_to?: string | null
    status?: $Enums.WorkOrderStatus
    comments?: string | null
    planned_time?: number | null
    actual_time?: number | null
    started_at?: Date | string | null
    completed_at?: Date | string | null
  }

  export type WorkOrderUpdateWithoutWork_centerInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    manufacturing_order?: ManufacturingOrderUpdateOneRequiredWithoutWork_ordersNestedInput
    assignee?: UserUpdateOneWithoutAssigned_wosNestedInput
    stock_ledgers?: StockLedgerUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutWork_centerInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stock_ledgers?: StockLedgerUncheckedUpdateManyWithoutWork_orderNestedInput
  }

  export type WorkOrderUncheckedUpdateManyWithoutWork_centerInput = {
    wo_id?: StringFieldUpdateOperationsInput | string
    mo_id?: StringFieldUpdateOperationsInput | string
    operation_name?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    planned_time?: NullableIntFieldUpdateOperationsInput | number | null
    actual_time?: NullableIntFieldUpdateOperationsInput | number | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}