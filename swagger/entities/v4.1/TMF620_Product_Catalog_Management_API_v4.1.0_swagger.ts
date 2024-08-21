/* tslint:disable */
/* eslint-disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Base schema for adressable entities
 */
export interface Addressable {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;
}

/**
 * Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.
 */
export interface AgreementRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the agreement */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

export type Any = any;

/**
 * Complements the description of an element (for instance a product) through video, pictures...
 */
export interface Attachment {
  /**
   * Unique identifier for this particular attachment
   * @example 4aafacbd-11ff-4dc8-b445-305f2215715f
   */
  id?: string;

  /**
   * URI for this Attachment
   * @format uri
   * @example http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f
   */
  href?: string;

  /**
   * Attachment type such as video, picture
   * @example video
   */
  attachmentType?: string;

  /**
   * The actual contents of the attachment object, if embedded, encoded as base64
   * @format base64
   */
  content?: string;

  /**
   * A narrative text describing the content of the attachment
   * @example Photograph of the Product
   */
  description?: string;

  /** Attachment mime type such as extension file for video, picture and document */
  mimeType?: string;

  /** The name of the attachment */
  name?: string;

  /**
   * Uniform Resource Locator, is a web page address (a subset of URI)
   * @format uri
   * @example http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f
   */
  url?: string;

  /** The size of the attachment. */
  size?: Quantity;

  /** The period of time for which the attachment is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures
 */
export interface AttachmentRef {
  /** Unique-Identifier for this attachment */
  id: string;

  /**
   * URL serving as reference for the attachment resource
   * @format uri
   */
  href?: string;

  /** A narrative text describing the content of the attachment */
  description?: string;

  /** Name of the related entity. */
  name?: string;

  /**
   * Link to the attachment media/content
   * @format uri
   */
  url?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * An attachment by value or by reference. An attachment complements the description of an element, for example through a document, a video, a picture.
 */
export interface AttachmentRefOrValue {
  /**
   * Unique identifier for this particular attachment
   * @example 4aafacbd-11ff-4dc8-b445-305f2215715f
   */
  id?: string;

  /**
   * URI for this Attachment
   * @format uri
   * @example http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f
   */
  href?: string;

  /**
   * Attachment type such as video, picture
   * @example video
   */
  attachmentType?: string;

  /**
   * The actual contents of the attachment object, if embedded, encoded as base64
   * @format base64
   */
  content?: string;

  /**
   * A narrative text describing the content of the attachment
   * @example Photograph of the Product
   */
  description?: string;

  /** Attachment mime type such as extension file for video, picture and document */
  mimeType?: string;

  /** The name of the attachment */
  name?: string;

  /**
   * Uniform Resource Locator, is a web page address (a subset of URI)
   * @format uri
   * @example http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f
   */
  url?: string;

  /** The size of the attachment. */
  size?: Quantity;

  /** The period of time for which the attachment is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering.
 */
export interface BundledProductOffering {
  /** Unique identifier of the BundledProductOffering */
  id?: string;

  /** Unique reference of the BundledProductOffering */
  href?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the BundledProductOffering */
  name?: string;

  /** A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded. */
  bundledProductOfferingOption?: BundledProductOfferingOption;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded
 */
export interface BundledProductOfferingOption {
  /** Default number of produc offereings that should be procured as part of the related BundledProductOffering */
  numberRelOfferDefault?: number;

  /** lower limit for a product offering that can be procured as part of the related BundledProductOffering */
  numberRelOfferLowerLimit?: number;

  /** upper limit for a product offering that can be procured as part of the related BundledProductOffering */
  numberRelOfferUpperLimit?: number;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * This represents a bundling pricing relationship, allowing a price to be composed of multiple other prices (e.g. a recurring charge and a onetime charge).
 */
export interface BundledProductOfferingPriceRelationship {
  /** Unique identifier of the bundled product offering price */
  id?: string;

  /** hyperlink reference of the bundled product offering price */
  href?: string;

  /** Name of the bundled product offering price */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification.
 */
export interface BundledProductSpecification {
  /** Unique identifier of the product specification */
  id?: string;

  /** Reference of the product specification */
  href?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the product specification */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details
 */
export interface Catalog {
  /** Unique identifier of the Catalog */
  id?: string;

  /** Unique reference of the catalog */
  href?: string;

  /** Indicates if the catalog is a product, service or resource catalog */
  catalogType?: string;

  /** Description of this catalog */
  description?: string;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the catalog */
  name?: string;

  /** Catalog version */
  version?: string;

  /** List of root categories contained in this catalog */
  category?: CategoryRef[];

  /** List of parties involved in this catalog */
  relatedParty?: RelatedParty[];

  /** The period for which the catalog is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details
Skipped properties: id,href
*/
export interface CatalogCreate {
  /** Indicates if the catalog is a product, service or resource catalog */
  catalogType?: string;

  /** Description of this catalog */
  description?: string;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the catalog */
  name: string;

  /** Catalog version */
  version?: string;

  /** List of root categories contained in this catalog */
  category?: CategoryRef[];

  /** List of parties involved in this catalog */
  relatedParty?: RelatedParty[];

  /** The period for which the catalog is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details
Skipped properties: id,href,lastUpdate,@type,@baseType
*/
export interface CatalogUpdate {
  /** Indicates if the catalog is a product, service or resource catalog */
  catalogType?: string;

  /** Description of this catalog */
  description?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the catalog */
  name?: string;

  /** Catalog version */
  version?: string;

  /** List of root categories contained in this catalog */
  category?: CategoryRef[];

  /** List of parties involved in this catalog */
  relatedParty?: RelatedParty[];

  /** The period for which the catalog is valid */
  validFor?: TimePeriod;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
}

/**
 * The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.
 */
export interface Category {
  /** Unique identifier of the category */
  id?: string;

  /** Reference of the category */
  href?: string;

  /** Description of the category */
  description?: string;

  /** If true, this Boolean indicates that the category is a root of categories */
  isRoot?: boolean;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the category */
  name?: string;

  /** Unique identifier of the parent category */
  parentId?: string;

  /** Category version */
  version?: string;

  /** A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOfferingRef[];

  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings. */
  subCategory?: CategoryRef[];

  /** The period for which the category is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.
Skipped properties: id,href
*/
export interface CategoryCreate {
  /** Description of the category */
  description?: string;

  /** If true, this Boolean indicates that the category is a root of categories */
  isRoot?: boolean;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the category */
  name: string;

  /** Unique identifier of the parent category */
  parentId?: string;

  /** Category version */
  version?: string;

  /** A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOfferingRef[];

  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings. */
  subCategory?: CategoryRef[];

  /** The period for which the category is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.
Skipped properties: id,href,lastUpdate,@type,@baseType
*/
export interface CategoryUpdate {
  /** Description of the category */
  description?: string;

  /** If true, this Boolean indicates that the category is a root of categories */
  isRoot?: boolean;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the category */
  name?: string;

  /** Unique identifier of the parent category */
  parentId?: string;

  /** Category version */
  version?: string;

  /** A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOfferingRef[];

  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings. */
  subCategory?: CategoryRef[];

  /** The period for which the category is valid */
  validFor?: TimePeriod;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
}

/**
 * The category for grouping recommendations
 */
export interface CategoryRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Category version */
  version?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..
 */
export interface ChannelRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the channel. */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * This class defines a characteristic specification.
 */
export interface CharacteristicSpecificationBase {
  /** Unique ID for the characteristic */
  id?: string;

  /** If true, the Boolean indicates that the target Characteristic is configurable */
  configurable?: boolean;

  /** A narrative that explains the CharacteristicSpecification. */
  description?: string;

  /** An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource. */
  extensible?: boolean;

  /** An indicator that specifies if a value is unique for the specification. Possible values are; "unique while value is in effect" and "unique whether value is in effect or not" */
  isUnique?: boolean;

  /** The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. */
  maxCardinality?: number;

  /** The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. */
  minCardinality?: number;

  /** A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. */
  name?: string;

  /** A rule or principle represented in regular expression used to derive the value of a characteristic value. */
  regex?: string;

  /** A kind of value that the characteristic can take on, such as numeric, text and so forth */
  valueType?: string;

  /** The period of time for which a characteristic is applicable. */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** This (optional) field provides a link to the schema describing the value type. */
  "@valueSchemaLocation"?: string;
}

/**
 * specification of a value (number or text or an object) that can be assigned to a Characteristic.
 */
export interface CharacteristicValueSpecification {
  /** If true, the Boolean Indicates if the value is the default value for a characteristic */
  isDefault?: boolean;

  /** An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are "open", "closed", "closedBottom" and "closedTop". */
  rangeInterval?: string;

  /** A regular expression constraint for given value */
  regex?: string;

  /** A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot. */
  unitOfMeasure?: string;

  /** The low range value that a characteristic can take on */
  valueFrom?: number;

  /** The upper range value that a characteristic can take on */
  valueTo?: number;

  /** A kind of value that the characteristic value can take on, such as numeric, text and so forth */
  valueType?: string;

  /** The period of time for which a value is applicable. */
  validFor?: TimePeriod;

  /** A discrete value that the characteristic can take on, or the actual value of the characteristic */
  value?: Any;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Constraint reference. The Constraint resource represents a policy/rule applied to an entity or entity spec.
 */
export interface ConstraintRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** constraint version */
  version?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * A time interval in a given unit of time
 */
export interface Duration {
  /** Time interval (number of seconds, minutes, hours, etc.) */
  amount?: number;

  /** Unit of time (seconds, minutes, hours, etc.) */
  units?: string;
}

/**
 * Base entity schema for use in TMForum Open-APIs
 */
export interface Entity {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Entity reference schema to be use for all entityRef class.
 */
export interface EntityRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * Represents a task used to export resources to a file
 */
export interface ExportJob {
  /** Identifier of the export job */
  id?: string;

  /**
   * Reference of the export job
   * @format uri
   */
  href?: string;

  /**
   * Data at which the job was completed
   * @format date-time
   */
  completionDate?: string;

  /** The format of the exported data */
  contentType?: string;

  /**
   * Date at which the job was created
   * @format date-time
   */
  creationDate?: string;

  /** Reason for failure */
  errorLog?: string;

  /** URL of the root resource acting as the source for streaming content to the file specified by the export job */
  path?: string;

  /** Used to scope the exported data */
  query?: string;

  /**
   * URL of the file containing the data to be exported
   * @format uri
   */
  url?: string;

  /** Status of the export job (not started, running, succeeded, failed) */
  status?: JobStateType;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* Represents a task used to export resources to a file
Skipped properties: id,href
*/
export interface ExportJobCreate {
  /**
   * Data at which the job was completed
   * @format date-time
   */
  completionDate?: string;

  /** The format of the exported data */
  contentType?: string;

  /**
   * Date at which the job was created
   * @format date-time
   */
  creationDate?: string;

  /** Reason for failure */
  errorLog?: string;

  /** URL of the root resource acting as the source for streaming content to the file specified by the export job */
  path?: string;

  /** Used to scope the exported data */
  query?: string;

  /**
   * URL of the file containing the data to be exported
   * @format uri
   */
  url: string;

  /** Status of the export job (not started, running, succeeded, failed) */
  status?: JobStateType;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Base Extensible schema for use in TMForum Open-APIs
 */
export interface Extensible {
  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Represents a task used to import resources from a file
 */
export interface ImportJob {
  /** Identifier of the import job */
  id?: string;

  /**
   * Reference of the import job
   * @format uri
   */
  href?: string;

  /**
   * Date at which the job was completed
   * @format date-time
   */
  completionDate?: string;

  /** Indicates the format of the imported data */
  contentType?: string;

  /**
   * Date at which the job was created
   * @format date-time
   */
  creationDate?: string;

  /** Reason for failure if status is failed */
  errorLog?: string;

  /** URL of the root resource where the content of the file specified by the import job must be applied */
  path?: string;

  /**
   * URL of the file containing the data to be imported
   * @format uri
   */
  url?: string;

  /** Status of the import job (not started, running, succeeded, failed) */
  status?: JobStateType;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* Represents a task used to import resources from a file
Skipped properties: id,href
*/
export interface ImportJobCreate {
  /**
   * Date at which the job was completed
   * @format date-time
   */
  completionDate?: string;

  /** Indicates the format of the imported data */
  contentType?: string;

  /**
   * Date at which the job was created
   * @format date-time
   */
  creationDate?: string;

  /** Reason for failure if status is failed */
  errorLog?: string;

  /** URL of the root resource where the content of the file specified by the import job must be applied */
  path?: string;

  /**
   * URL of the file containing the data to be imported
   * @format uri
   */
  url: string;

  /** Status of the import job (not started, running, succeeded, failed) */
  status?: JobStateType;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Valid values for the state of a batch job (e.g. catalog import)
 */
export enum JobStateType {
  NotStarted = "Not Started",
  Running = "Running",
  Succeeded = "Succeeded",
  Failed = "Failed",
}

/**
 * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
 */
export interface MarketSegmentRef {
  /** Unique identifier of the market segment */
  id: string;

  /** Reference of the market segment */
  href?: string;

  /** Name of the market segment */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** (Class) type of the referred market segment */
  "@referredType"?: string;
}

/**
 * A base / value business entity used to represent money
 */
export interface Money {
  /** Currency (ISO4217 norm uses 3 letters to define the currency) */
  unit?: string;

  /**
   * A positive floating point number
   * @format float
   */
  value?: number;
}

/**
 * Is an amount, usually of money, that modifies the price charged for an order item.
 */
export interface POPAlteration {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** A narrative that explains in detail the semantics of this order item price alteration */
  description?: string;

  /** Name given to this price alteration */
  name?: string;

  /** A category that describes the price such as recurring, one time and usage. */
  priceType: string;

  /** Priority level for applying this alteration among all the defined alterations on the order item price */
  priority?: number;

  /** Could be month, week... */
  recurringChargePeriod?: string;

  /** The period for which the productOfferingPriceAlteration is applicable */
  applicationDuration?: Duration;

  /** Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration. */
  price: ProductPriceValue;

  /** A number and unit representing denominator of an alteration rate. For example, for a data discount rate of $1 per 20 GB usage, the amount of unitOfMeasure will be 20 with units as GB. */
  unitOfMeasure?: Quantity;

  /** The period for which this productOfferingPriceAlteration is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * This is representing a product offering price (charge) based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration).
 */
export interface POPCharge {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Description of the productOfferingPrice */
  description?: string;

  /**
   * the last update time of this ProductOfferingPrice
   * @format date-time
   */
  lastUpdate?: string;

  /** the lifecycle status of this ProductOfferingPrice */
  lifecycleStatus?: string;

  /** Name of the productOfferingPrice */
  name?: string;

  /** A category that describes the price charge, such as recurring, penalty, One time fee and so forth. */
  priceType?: string;

  /**
   * The period type to repeat the application of the price
   * Could be month, week...
   */
  recurringChargePeriod?: string;

  /** the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable */
  recurringChargePeriodLength?: number;

  /** ProductOffering version */
  version?: string;

  /** The Constraint resource represents a policy/rule applied to ProductOfferingPrice. */
  constraint?: ConstraintRef[];

  /** Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration. */
  price?: ProductPriceValue;
  priceAlteration?: POPAlteration[];

  /** A number and unit representing denominator of a rate. For example, for a data charge rate of $2 per 5 GB usage, the amount of unitOfMeasure will be 5 with units as GB. */
  unitOfMeasure?: Quantity;

  /** The period for which the productOfferingPrice is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Place reference. PlaceRef defines the placeRefs where the products are sold or delivered.
 */
export interface PlaceRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled bahavior in SID). Some of the parameters of the interface definiition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)
 */
export interface PricingLogicAlgorithm {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Description of the PricingLogicAlgorithm */
  description?: string;

  /** Name given to the PricingLogicAlgorithm */
  name?: string;

  /** id of corresponding PricingLogicAlgorithm specification */
  plaSpecId?: string;

  /** The period for which the PricingLogicAlgorithm is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.
 */
export interface ProductOffering {
  /** Unique identifier of the productOffering */
  id?: string;

  /** Reference of the ProductOffering */
  href?: string;

  /** Description of the productOffering */
  description?: string;

  /** isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true). */
  isBundle?: boolean;

  /** A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle. */
  isSellable?: boolean;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the productOffering */
  name?: string;

  /** A string providing a complementary information on the value of the lifecycle status attribute. */
  statusReason?: string;

  /** ProductOffering version */
  version?: string;

  /** An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications. */
  agreement?: AgreementRef[];

  /** Complements the description of an element (for instance a product) through video, pictures... */
  attachment?: AttachmentRefOrValue[];

  /** A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering. */
  bundledProductOffering?: BundledProductOffering[];

  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: CategoryRef[];

  /** The channel defines the channel for selling product offerings. */
  channel?: ChannelRef[];

  /** provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth. */
  marketSegment?: MarketSegmentRef[];

  /** Place defines the places where the products are sold or delivered. */
  place?: PlaceRef[];

  /** A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics. */
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];

  /** An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer. */
  productOfferingPrice?: ProductOfferingPriceRefOrValue[];

  /** A relationship between this product offering and other product offerings. */
  productOfferingRelationship?: ProductOfferingRelationship[];

  /** A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods. */
  productOfferingTerm?: ProductOfferingTerm[];

  /** A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecificationRef;

  /** A resource candidate is an entity that makes a ResourceSpecification available to a catalog. */
  resourceCandidate?: ResourceCandidateRef;

  /** ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog. */
  serviceCandidate?: ServiceCandidateRef;

  /** A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service. */
  serviceLevelAgreement?: SLARef;

  /** The period for which the productOffering is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.
Skipped properties: id,href
*/
export interface ProductOfferingCreate {
  /** Description of the productOffering */
  description?: string;

  /** isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true). */
  isBundle?: boolean;

  /** A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle. */
  isSellable?: boolean;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the productOffering */
  name: string;

  /** A string providing a complementary information on the value of the lifecycle status attribute. */
  statusReason?: string;

  /** ProductOffering version */
  version?: string;

  /** An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications. */
  agreement?: AgreementRef[];

  /** Complements the description of an element (for instance a product) through video, pictures... */
  attachment?: AttachmentRefOrValue[];

  /** A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering. */
  bundledProductOffering?: BundledProductOffering[];

  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: CategoryRef[];

  /** The channel defines the channel for selling product offerings. */
  channel?: ChannelRef[];

  /** provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth. */
  marketSegment?: MarketSegmentRef[];

  /** Place defines the places where the products are sold or delivered. */
  place?: PlaceRef[];

  /** A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics. */
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];

  /** An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer. */
  productOfferingPrice?: ProductOfferingPriceRefOrValue[];

  /** A relationship between this product offering and other product offerings. */
  productOfferingRelationship?: ProductOfferingRelationship[];

  /** A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods. */
  productOfferingTerm?: ProductOfferingTerm[];

  /** A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecificationRef;

  /** A resource candidate is an entity that makes a ResourceSpecification available to a catalog. */
  resourceCandidate?: ResourceCandidateRef;

  /** ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog. */
  serviceCandidate?: ServiceCandidateRef;

  /** A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service. */
  serviceLevelAgreement?: SLARef;

  /** The period for which the productOffering is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.
Skipped properties: id,href,lastUpdate,@type,@baseType
*/
export interface ProductOfferingUpdate {
  /** Description of the productOffering */
  description?: string;

  /** isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true). */
  isBundle?: boolean;

  /** A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle. */
  isSellable?: boolean;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the productOffering */
  name?: string;

  /** A string providing a complementary information on the value of the lifecycle status attribute. */
  statusReason?: string;

  /** ProductOffering version */
  version?: string;

  /** An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications. */
  agreement?: AgreementRef[];

  /** Complements the description of an element (for instance a product) through video, pictures... */
  attachment?: AttachmentRefOrValue[];

  /** A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering. */
  bundledProductOffering?: BundledProductOffering[];

  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: CategoryRef[];

  /** The channel defines the channel for selling product offerings. */
  channel?: ChannelRef[];

  /** provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth. */
  marketSegment?: MarketSegmentRef[];

  /** Place defines the places where the products are sold or delivered. */
  place?: PlaceRef[];

  /** A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics. */
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];

  /** An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer. */
  productOfferingPrice?: ProductOfferingPriceRefOrValue[];

  /** A relationship between this product offering and other product offerings. */
  productOfferingRelationship?: ProductOfferingRelationship[];

  /** A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods. */
  productOfferingTerm?: ProductOfferingTerm[];

  /** A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecificationRef;

  /** A resource candidate is an entity that makes a ResourceSpecification available to a catalog. */
  resourceCandidate?: ResourceCandidateRef;

  /** ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog. */
  serviceCandidate?: ServiceCandidateRef;

  /** A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service. */
  serviceLevelAgreement?: SLARef;

  /** The period for which the productOffering is valid */
  validFor?: TimePeriod;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
}

/**
 * Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.
 */
export interface ProductOfferingPrice {
  /** unique id of this resource */
  id?: string;

  /** Reference of the ProductOfferingPrice */
  href?: string;

  /** Description of the productOfferingPrice */
  description?: string;

  /** A flag indicating if this ProductOfferingPrice is composite (bundle) or not */
  isBundle?: boolean;

  /**
   * the last update time of this ProductOfferingPrice
   * @format date-time
   */
  lastUpdate?: string;

  /** the lifecycle status of this ProductOfferingPrice */
  lifecycleStatus?: string;

  /** Name of the productOfferingPrice */
  name?: string;

  /**
   * Percentage to apply if this Product Offering Price is an Alteration (such as a Discount)
   * @format float
   */
  percentage?: number;

  /** A category that describes the price, such as recurring, discount, allowance, penalty, and so forth. */
  priceType?: string;

  /** the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable */
  recurringChargePeriodLength?: number;

  /**
   * The period to repeat the application of the price
   * Could be month, week...
   */
  recurringChargePeriodType?: string;

  /** ProductOfferingPrice version */
  version?: string;

  /** this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship. */
  bundledPopRelationship?: BundledProductOfferingPriceRelationship[];

  /** The Constraint resource represents a policy/rule applied to ProductOfferingPrice. */
  constraint?: ConstraintRef[];

  /** Place defines the places where the products are sold or delivered. */
  place?: PlaceRef[];

  /** Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount */
  popRelationship?: ProductOfferingPriceRelationship[];

  /** The amount of money that characterizes the price. */
  price?: Money;

  /** The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth). */
  pricingLogicAlgorithm?: PricingLogicAlgorithm[];

  /** A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics. */
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];

  /** A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods. */
  productOfferingTerm?: ProductOfferingTerm[];

  /** An amount of money levied on the price of a Product by a legislative body. */
  tax?: TaxItem[];

  /** A number and unit representing how many (for instance 1 dozen) of an ProductOffering is available at the offered price. Its meaning depends on the priceType. It could be a price, a rate, or a discount. */
  unitOfMeasure?: Quantity;

  /** The period for which the productOfferingPrice is valid */
  validFor?: TimePeriod;

  /** the immediate base class type of this product offering price */
  "@baseType"?: string;

  /** hyperlink reference to the schema describing this resource */
  "@schemaLocation"?: string;

  /** The class type of this Product offering price */
  "@type"?: string;
}

/**
* Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.
Skipped properties: id,href
*/
export interface ProductOfferingPriceCreate {
  /** Description of the productOfferingPrice */
  description?: string;

  /** A flag indicating if this ProductOfferingPrice is composite (bundle) or not */
  isBundle?: boolean;

  /**
   * the last update time of this ProductOfferingPrice
   * @format date-time
   */
  lastUpdate?: string;

  /** the lifecycle status of this ProductOfferingPrice */
  lifecycleStatus?: string;

  /** Name of the productOfferingPrice */
  name: string;

  /**
   * Percentage to apply if this Product Offering Price is an Alteration (such as a Discount)
   * @format float
   */
  percentage?: number;

  /** A category that describes the price, such as recurring, discount, allowance, penalty, and so forth. */
  priceType?: string;

  /** the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable */
  recurringChargePeriodLength?: number;

  /**
   * The period to repeat the application of the price
   * Could be month, week...
   */
  recurringChargePeriodType?: string;

  /** ProductOfferingPrice version */
  version?: string;

  /** this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship. */
  bundledPopRelationship?: BundledProductOfferingPriceRelationship[];

  /** The Constraint resource represents a policy/rule applied to ProductOfferingPrice. */
  constraint?: ConstraintRef[];

  /** Place defines the places where the products are sold or delivered. */
  place?: PlaceRef[];

  /** Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount */
  popRelationship?: ProductOfferingPriceRelationship[];

  /** The amount of money that characterizes the price. */
  price?: Money;

  /** The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth). */
  pricingLogicAlgorithm?: PricingLogicAlgorithm[];

  /** A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics. */
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];

  /** A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods. */
  productOfferingTerm?: ProductOfferingTerm[];

  /** An amount of money levied on the price of a Product by a legislative body. */
  tax?: TaxItem[];

  /** A number and unit representing how many (for instance 1 dozen) of an ProductOffering is available at the offered price. Its meaning depends on the priceType. It could be a price, a rate, or a discount. */
  unitOfMeasure?: Quantity;

  /** The period for which the productOfferingPrice is valid */
  validFor?: TimePeriod;

  /** the immediate base class type of this product offering price */
  "@baseType"?: string;

  /** hyperlink reference to the schema describing this resource */
  "@schemaLocation"?: string;

  /** The class type of this Product offering price */
  "@type"?: string;
}

/**
* Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.
Skipped properties: id,href,lastUpdate,@type,@baseType
*/
export interface ProductOfferingPriceUpdate {
  /** Description of the productOfferingPrice */
  description?: string;

  /** A flag indicating if this ProductOfferingPrice is composite (bundle) or not */
  isBundle?: boolean;

  /** the lifecycle status of this ProductOfferingPrice */
  lifecycleStatus?: string;

  /** Name of the productOfferingPrice */
  name?: string;

  /**
   * Percentage to apply if this Product Offering Price is an Alteration (such as a Discount)
   * @format float
   */
  percentage?: number;

  /** A category that describes the price, such as recurring, discount, allowance, penalty, and so forth. */
  priceType?: string;

  /** the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable */
  recurringChargePeriodLength?: number;

  /**
   * The period to repeat the application of the price
   * Could be month, week...
   */
  recurringChargePeriodType?: string;

  /** ProductOfferingPrice version */
  version?: string;

  /** this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship. */
  bundledPopRelationship?: BundledProductOfferingPriceRelationship[];

  /** The Constraint resource represents a policy/rule applied to ProductOfferingPrice. */
  constraint?: ConstraintRef[];

  /** Place defines the places where the products are sold or delivered. */
  place?: PlaceRef[];

  /** Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount */
  popRelationship?: ProductOfferingPriceRelationship[];

  /** The amount of money that characterizes the price. */
  price?: Money;

  /** The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth). */
  pricingLogicAlgorithm?: PricingLogicAlgorithm[];

  /** A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics. */
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];

  /** A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods. */
  productOfferingTerm?: ProductOfferingTerm[];

  /** An amount of money levied on the price of a Product by a legislative body. */
  tax?: TaxItem[];

  /** A number and unit representing how many (for instance 1 dozen) of an ProductOffering is available at the offered price. Its meaning depends on the priceType. It could be a price, a rate, or a discount. */
  unitOfMeasure?: Quantity;

  /** The period for which the productOfferingPrice is valid */
  validFor?: TimePeriod;

  /** hyperlink reference to the schema describing this resource */
  "@schemaLocation"?: string;
}

/**
 * ProductPriceOffering reference. An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased
 */
export interface ProductOfferingPriceRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * A new product offering price being created by value or a reference to an existing product offering price that alreasy created. The polymorphic attributes @type, @schemaLocation & @referredType are related to the product offering price and not to this ReforValue structure
 */
export interface ProductOfferingPriceRefOrValue {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Description of the productOfferingPrice */
  description?: string;

  /**
   * the last update time of this ProductOfferingPrice
   * @format date-time
   */
  lastUpdate?: string;

  /** the lifecycle status of this ProductOfferingPrice */
  lifecycleStatus?: string;

  /** Name of the productOfferingPrice */
  name?: string;

  /** A category that describes the price charge, such as recurring, penalty, One time fee and so forth. */
  priceType?: string;

  /**
   * The period type to repeat the application of the price
   * Could be month, week...
   */
  recurringChargePeriod?: string;

  /** the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable */
  recurringChargePeriodLength?: number;

  /** ProductOffering version */
  version?: string;

  /** The Constraint resource represents a policy/rule applied to ProductOfferingPrice. */
  constraint?: ConstraintRef[];

  /** Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration. */
  price?: ProductPriceValue;
  priceAlteration?: POPAlteration[];

  /** A number and unit representing denominator of a rate. For example, for a data charge rate of $2 per 5 GB usage, the amount of unitOfMeasure will be 5 with units as GB. */
  unitOfMeasure?: Quantity;

  /** The period for which the productOfferingPrice is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * Describes a non-composite relationship between product offering prices. For example one price might be an discount alteration for another price.
 */
export interface ProductOfferingPriceRelationship {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** type of the relationship, for example override, discount, etc. */
  relationshipType?: string;

  /** The association role for the source product offering price */
  role?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * ProductOffering reference. A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information.
 */
export interface ProductOfferingRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * A relationship between two product Offerings.
 */
export interface ProductOfferingRelationship {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Type of relationship between product offerings such as requires, exchangableTo, optionalFor */
  relationshipType?: string;

  /** The association role for the source product offering */
  role?: string;

  /** The period for which the Relationship is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.
 */
export interface ProductOfferingTerm {
  /** Description of the productOfferingTerm */
  description?: string;

  /** Name of the productOfferingTerm */
  name?: string;

  /** Duration of the productOfferingTerm */
  duration?: Duration;

  /** The period for which the productOfferingTerm is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration.
 */
export interface ProductPriceValue {
  /**
   * Percentage to apply for ProdOfferPriceAlteration
   * @format float
   */
  percentage?: number;

  /** Tax category */
  taxCategory?: string;

  /**
   * Tax rate
   * @format float
   */
  taxRate?: number;

  /** All taxes excluded amount (expressed in the given currency) */
  dutyFreeAmount?: Money;

  /** All taxes included amount (expressed in the given currency) */
  taxIncludedAmount?: Money;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
 */
export interface ProductSpecification {
  /** Unique identifier of the product specification */
  id?: string;

  /** Reference of the product specification */
  href?: string;

  /** The manufacturer or trademark of the specification */
  brand?: string;

  /** A narrative that explains in detail what the product specification is */
  description?: string;

  /** isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true). */
  isBundle?: boolean;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the product specification */
  name?: string;

  /** An identification number assigned to uniquely identity the specification */
  productNumber?: string;

  /** Product specification version */
  version?: string;

  /** Complements the description of an element (for instance a product) through video, pictures... */
  attachment?: AttachmentRefOrValue[];

  /** A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification. */
  bundledProductSpecification?: BundledProductSpecification[];

  /** A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process. */
  productSpecCharacteristic?: ProductSpecificationCharacteristic[];

  /** A migration, substitution, dependency or exclusivity relationship between/among product specifications. */
  productSpecificationRelationship?: ProductSpecificationRelationship[];

  /** A related party defines party or party role linked to a specific entity. */
  relatedParty?: RelatedParty[];

  /** The ResourceSpecification is required to realize a ProductSpecification. */
  resourceSpecification?: ResourceSpecificationRef[];

  /** ServiceSpecification(s) required to realize a ProductSpecification. */
  serviceSpecification?: ServiceSpecificationRef[];

  /** A target product schema reference. The reference object to the schema and type of target product which is described by product specification. */
  targetProductSchema?: TargetProductSchema;

  /** The period for which the product specification is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
Skipped properties: id,href
*/
export interface ProductSpecificationCreate {
  /** The manufacturer or trademark of the specification */
  brand?: string;

  /** A narrative that explains in detail what the product specification is */
  description?: string;

  /** isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true). */
  isBundle?: boolean;

  /**
   * Date and time of the last update
   * @format date-time
   */
  lastUpdate?: string;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the product specification */
  name: string;

  /** An identification number assigned to uniquely identity the specification */
  productNumber?: string;

  /** Product specification version */
  version?: string;

  /** Complements the description of an element (for instance a product) through video, pictures... */
  attachment?: AttachmentRefOrValue[];

  /** A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification. */
  bundledProductSpecification?: BundledProductSpecification[];

  /** A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process. */
  productSpecCharacteristic?: ProductSpecificationCharacteristic[];

  /** A migration, substitution, dependency or exclusivity relationship between/among product specifications. */
  productSpecificationRelationship?: ProductSpecificationRelationship[];

  /** A related party defines party or party role linked to a specific entity. */
  relatedParty?: RelatedParty[];

  /** The ResourceSpecification is required to realize a ProductSpecification. */
  resourceSpecification?: ResourceSpecificationRef[];

  /** ServiceSpecification(s) required to realize a ProductSpecification. */
  serviceSpecification?: ServiceSpecificationRef[];

  /** A target product schema reference. The reference object to the schema and type of target product which is described by product specification. */
  targetProductSchema?: TargetProductSchema;

  /** The period for which the product specification is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
* Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
Skipped properties: id,href,lastUpdate,@type,@baseType
*/
export interface ProductSpecificationUpdate {
  /** The manufacturer or trademark of the specification */
  brand?: string;

  /** A narrative that explains in detail what the product specification is */
  description?: string;

  /** isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true). */
  isBundle?: boolean;

  /** Used to indicate the current lifecycle status */
  lifecycleStatus?: string;

  /** Name of the product specification */
  name?: string;

  /** An identification number assigned to uniquely identity the specification */
  productNumber?: string;

  /** Product specification version */
  version?: string;

  /** Complements the description of an element (for instance a product) through video, pictures... */
  attachment?: AttachmentRefOrValue[];

  /** A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification. */
  bundledProductSpecification?: BundledProductSpecification[];

  /** A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process. */
  productSpecCharacteristic?: ProductSpecificationCharacteristic[];

  /** A migration, substitution, dependency or exclusivity relationship between/among product specifications. */
  productSpecificationRelationship?: ProductSpecificationRelationship[];

  /** A related party defines party or party role linked to a specific entity. */
  relatedParty?: RelatedParty[];

  /** The ResourceSpecification is required to realize a ProductSpecification. */
  resourceSpecification?: ResourceSpecificationRef[];

  /** ServiceSpecification(s) required to realize a ProductSpecification. */
  serviceSpecification?: ServiceSpecificationRef[];

  /** A target product schema reference. The reference object to the schema and type of target product which is described by product specification. */
  targetProductSchema?: TargetProductSchema;

  /** The period for which the product specification is valid */
  validFor?: TimePeriod;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;
}

/**
 * A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.
 */
export interface ProductSpecificationCharacteristic {
  /** Unique ID for the characteristic */
  id?: string;

  /** If true, the Boolean indicates that the target Characteristic is configurable */
  configurable?: boolean;

  /** A narrative that explains the CharacteristicSpecification. */
  description?: string;

  /** An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource. */
  extensible?: boolean;

  /** An indicator that specifies if a value is unique for the specification. Possible values are; "unique while value is in effect" and "unique whether value is in effect or not" */
  isUnique?: boolean;

  /** The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. */
  maxCardinality?: number;

  /** The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. */
  minCardinality?: number;

  /** A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. */
  name?: string;

  /** A rule or principle represented in regular expression used to derive the value of a characteristic value. */
  regex?: string;

  /** A kind of value that the characteristic can take on, such as numeric, text and so forth */
  valueType?: string;

  /** An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics. */
  productSpecCharRelationship?: ProductSpecificationCharacteristicRelationship[];

  /** A ProductSpecificationCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ProductSpecificationCharacteristic object. The values of the attributes in the ProductSpecificationCharacteristicValue object describe the values of the attributes that a corresponding ProductSpecificationCharacteristic object can take on. */
  productSpecCharacteristicValue?: CharacteristicValueSpecification[];

  /** The period of time for which a characteristic is applicable. */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** This (optional) field provides a link to the schema describing the value type. */
  "@valueSchemaLocation"?: string;
}

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among productSpecificationCharacteristics.
 */
export interface ProductSpecificationCharacteristicRelationship {
  /** the identifier of the associated product specification */
  id?: string;

  /** Hyperlink reference to the target product specification */
  href?: string;

  /**
   * The order in which a CharacteristicSpecification appears within another CharacteristicSpecification that defines a grouping of CharacteristicSpecifications.
   *
   * For example, a grouping may represent the name of an individual. The given name is first, the middle name is second, and the last name is third.
   */
  charSpecSeq?: number;

  /** Name of the target product specification characteristic */
  name?: string;

  /** Type of relationship such as aggregation, migration, substitution, dependency, exclusivity */
  relationshipType?: string;

  /** The period for which the productSpecificationCharacteristicRelationship is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.
 */
export interface ProductSpecificationCharacteristicValueUse {
  /** Unique ID for the characteristic */
  id?: string;

  /** A narrative that explains in detail what the productSpecificationCharacteristic is */
  description?: string;

  /** The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. */
  maxCardinality?: number;

  /** The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. */
  minCardinality?: number;

  /** Name of the associated productSpecificationCharacteristic */
  name?: string;

  /** A kind of value that the characteristic can take on, such as numeric, text and so forth */
  valueType?: string;

  /** A number or text that can be assigned to a ProductSpecificationCharacteristic. */
  productSpecCharacteristicValue?: CharacteristicValueSpecification[];

  /** A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecificationRef;

  /** The period for which the productSpecificationCharacteristic is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * Product specification reference: A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
 */
export interface ProductSpecificationRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Version of the product specification */
  version?: string;

  /** A target product schema reference. The reference object to the schema and type of target product which is described by product specification. */
  targetProductSchema?: TargetProductSchema;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * A migration, substitution, dependency or exclusivity relationship between/among product specifications.
 */
export interface ProductSpecificationRelationship {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Type of relationship such as migration, substitution, dependency, exclusivity */
  relationshipType?: string;

  /** The period for which the productSpecificationRelationship is valid */
  validFor?: TimePeriod;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * An amount in a given unit
 */
export interface Quantity {
  /**
   * Numeric value in a given unit
   * @format float
   */
  amount?: number;

  /** Unit */
  units?: string;
}

/**
 * Related Party reference. A related party defines party or party role linked to a specific entity.
 */
export interface RelatedParty {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Role played by the related party */
  role?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType": string;
}

/**
 * ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none.
 */
export interface ResourceCandidateRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** the version of resource candidate */
  version?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
* Resources are physical or non-physical components (or some combination of these) within an enterprise's infrastructure or inventory. They are typically consumed or used by services (for example a physical port assigned to a service) or contribute to the realization of a Product (for example, a SIM card). They can be drawn from the Application, Computing and Network domains, and include, for example, Network Elements, software, IT systems, content and information, and technology components.
A ResourceSpecification is an abstract base class for representing a generic means for implementing a particular type of Resource. In essence, a ResourceSpecification defines the common attributes and relationships of a set of related Resources, while Resource defines a specific instance that is based on a particular ResourceSpecification.
*/
export interface ResourceSpecificationRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Resource Specification version */
  version?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.
 */
export interface SLARef {
  /** Unique identifier of service level agreement */
  id: string;

  /** Reference of the service level agreement */
  href?: string;

  /** Name of the service level agreement */
  name?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * ServiceCandidate reference. ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.
 */
export interface ServiceCandidateRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Version of the service candidate */
  version?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.
 */
export interface ServiceSpecificationRef {
  /** unique identifier */
  id: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Name of the related entity. */
  name?: string;

  /** Service specification version */
  version?: string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;

  /** The actual type of the target instance when needed for disambiguation. */
  "@referredType"?: string;
}

/**
 * The reference object to the schema and type of target product which is described by product specification
 */
export interface TargetProductSchema {
  /**
   * This field provides a link to the schema describing the target product
   * @format uri
   */
  "@schemaLocation": string;

  /** Class type of the target product */
  "@type": string;
}

/**
 * A tax item is created for each tax rate and tax type used in the bill.
 */
export interface TaxItem {
  /** unique identifier */
  id?: string;

  /**
   * Hyperlink reference
   * @format uri
   */
  href?: string;

  /** Tax category */
  taxCategory?: string;

  /**
   * Applied rate of the tax
   * @format float
   */
  taxRate?: number;

  /** Amount of tax expressed in the given currency */
  taxAmount?: Money;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class Extensible name */
  "@type"?: string;
}

/**
 * A period of time, either as a deadline (endDateTime only) a startDateTime only, or both
 */
export interface TimePeriod {
  /**
   * End of the time period, using IETC-RFC-3339 format
   * @format date-time
   * @example 1985-04-12T23:20:50.52Z
   */
  endDateTime?: string;

  /**
   * Start of the time period, using IETC-RFC-3339 format
   * @format date-time
   * @example 1985-04-12T23:20:50.52Z
   */
  startDateTime?: string;
}

/**
 * Sets the communication endpoint address the service instance must use to deliver notification information
 */
export interface EventSubscription {
  /** Id of the listener */
  id: string;

  /** The callback being registered. */
  callback: string;

  /** additional data to be passed */
  query?: string;
}

/**
 * Sets the communication endpoint address the service instance must use to deliver notification information
 */
export interface EventSubscriptionInput {
  /** The callback being registered. */
  callback: string;

  /** additional data to be passed */
  query?: string;
}

/**
 * The notification data structure
 */
export interface CatalogCreateEvent {
  /** The event payload linked to the involved resource object */
  event?: CatalogCreateEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CatalogCreateEventPayload {
  /** The involved resource data for the event */
  catalog?: Catalog;
}

/**
 * The notification data structure
 */
export interface CatalogAttributeValueChangeEvent {
  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;

  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;

  /** The event payload linked to the involved resource object */
  event?: CatalogAttributeValueChangeEventPayload;
}

/**
 * The event data structure
 */
export interface CatalogAttributeValueChangeEventPayload {
  /** The involved resource data for the event */
  catalog?: Catalog;
}

/**
 * The notification data structure
 */
export interface CatalogStateChangeEvent {
  /** The event payload linked to the involved resource object */
  event?: CatalogStateChangeEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CatalogStateChangeEventPayload {
  /** The involved resource data for the event */
  catalog?: Catalog;
}

/**
 * The notification data structure
 */
export interface CatalogDeleteEvent {
  /** The event payload linked to the involved resource object */
  event?: CatalogDeleteEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CatalogDeleteEventPayload {
  /** The involved resource data for the event */
  catalog?: Catalog;
}

/**
 * The notification data structure
 */
export interface CatalogBatchEvent {
  /** The event payload linked to the involved resource object */
  event?: CatalogBatchEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CatalogBatchEventPayload {
  /** The involved resource data for the event */
  catalog?: Catalog;
}

/**
 * The notification data structure
 */
export interface CategoryCreateEvent {
  /** The event payload linked to the involved resource object */
  event?: CategoryCreateEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CategoryCreateEventPayload {
  /** The involved resource data for the event */
  category?: Category;
}

/**
 * The notification data structure
 */
export interface CategoryAttributeValueChangeEvent {
  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;

  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;

  /** The event payload linked to the involved resource object */
  event?: CategoryAttributeValueChangeEventPayload;
}

/**
 * The event data structure
 */
export interface CategoryAttributeValueChangeEventPayload {
  /** The involved resource data for the event */
  category?: Category;
}

/**
 * The notification data structure
 */
export interface CategoryStateChangeEvent {
  /** The event payload linked to the involved resource object */
  event?: CategoryStateChangeEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CategoryStateChangeEventPayload {
  /** The involved resource data for the event */
  category?: Category;
}

/**
 * The notification data structure
 */
export interface CategoryDeleteEvent {
  /** The event payload linked to the involved resource object */
  event?: CategoryDeleteEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface CategoryDeleteEventPayload {
  /** The involved resource data for the event */
  category?: Category;
}

/**
 * The notification data structure
 */
export interface ProductOfferingCreateEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductOfferingCreateEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductOfferingCreateEventPayload {
  /** The involved resource data for the event */
  productOffering?: ProductOffering;
}

/**
 * The notification data structure
 */
export interface ProductOfferingAttributeValueChangeEvent {
  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;

  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;

  /** The event payload linked to the involved resource object */
  event?: ProductOfferingAttributeValueChangeEventPayload;
}

/**
 * The event data structure
 */
export interface ProductOfferingAttributeValueChangeEventPayload {
  /** The involved resource data for the event */
  productOffering?: ProductOffering;
}

/**
 * The notification data structure
 */
export interface ProductOfferingStateChangeEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductOfferingStateChangeEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductOfferingStateChangeEventPayload {
  /** The involved resource data for the event */
  productOffering?: ProductOffering;
}

/**
 * The notification data structure
 */
export interface ProductOfferingDeleteEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductOfferingDeleteEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductOfferingDeleteEventPayload {
  /** The involved resource data for the event */
  productOffering?: ProductOffering;
}

/**
 * The notification data structure
 */
export interface ProductOfferingPriceCreateEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductOfferingPriceCreateEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductOfferingPriceCreateEventPayload {
  /** The involved resource data for the event */
  productOfferingPrice?: ProductOfferingPrice;
}

/**
 * The notification data structure
 */
export interface ProductOfferingPriceAttributeValueChangeEvent {
  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;

  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;

  /** The event payload linked to the involved resource object */
  event?: ProductOfferingPriceAttributeValueChangeEventPayload;
}

/**
 * The event data structure
 */
export interface ProductOfferingPriceAttributeValueChangeEventPayload {
  /** The involved resource data for the event */
  productOfferingPrice?: ProductOfferingPrice;
}

/**
 * The notification data structure
 */
export interface ProductOfferingPriceStateChangeEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductOfferingPriceStateChangeEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductOfferingPriceStateChangeEventPayload {
  /** The involved resource data for the event */
  productOfferingPrice?: ProductOfferingPrice;
}

/**
 * The notification data structure
 */
export interface ProductOfferingPriceDeleteEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductOfferingPriceDeleteEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductOfferingPriceDeleteEventPayload {
  /** The involved resource data for the event */
  productOfferingPrice?: ProductOfferingPrice;
}

/**
 * The notification data structure
 */
export interface ProductSpecificationCreateEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductSpecificationCreateEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductSpecificationCreateEventPayload {
  /** The involved resource data for the event */
  productSpecification?: ProductSpecification;
}

/**
 * The notification data structure
 */
export interface ProductSpecificationAttributeValueChangeEvent {
  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;

  /** The path identifying the object field concerned by this notification. */
  fieldPath?: string;

  /** The event payload linked to the involved resource object */
  event?: ProductSpecificationAttributeValueChangeEventPayload;
}

/**
 * The event data structure
 */
export interface ProductSpecificationAttributeValueChangeEventPayload {
  /** The involved resource data for the event */
  productSpecification?: ProductSpecification;
}

/**
 * The notification data structure
 */
export interface ProductSpecificationStateChangeEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductSpecificationStateChangeEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductSpecificationStateChangeEventPayload {
  /** The involved resource data for the event */
  productSpecification?: ProductSpecification;
}

/**
 * The notification data structure
 */
export interface ProductSpecificationDeleteEvent {
  /** The event payload linked to the involved resource object */
  event?: ProductSpecificationDeleteEventPayload;

  /** The identifier of the notification. */
  eventId?: string;

  /**
   * Time of the event occurrence.
   * @format date-time
   */
  eventTime?: string;

  /** The type of the notification. */
  eventType?: string;

  /** The correlation id for this event. */
  correlationId?: string;

  /** The domain of the event. */
  domain?: string;

  /** The title of the event. */
  title?: string;

  /** An explnatory of the event. */
  description?: string;

  /** A priority. */
  priority?: string;

  /**
   * The time the event occured.
   * @format date-time
   */
  timeOcurred?: string;
}

/**
 * The event data structure
 */
export interface ProductSpecificationDeleteEventPayload {
  /** The involved resource data for the event */
  productSpecification?: ProductSpecification;
}

/**
 * Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)
 */
export interface Error {
  /** Application relevant detail, defined in the API or a common list. */
  code: string;

  /** Explanation of the reason for the error which can be shown to a client user. */
  reason: string;

  /** More details and corrective actions related to the error which can be shown to a client user. */
  message?: string;

  /** HTTP Error code extension */
  status?: string;

  /**
   * URI of documentation describing the error.
   * @format uri
   */
  referenceError?: string;

  /** When sub-classing, this defines the super-class. */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   * @format uri
   */
  "@schemaLocation"?: string;

  /** When sub-classing, this defines the sub-class entity name. */
  "@type"?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://serverRoot/tmf-api/productCatalogManagement/v4";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) => (input !== null && typeof input === "object" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      headers: {
        ...(type ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      ...requestParams,
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Product Catalog Management
 * @version 4.1.0
 * @baseUrl https://serverRoot/tmf-api/productCatalogManagement/v4
 * ## TMF API Reference: TMF620 - Product Catalog Management
 *
 * ### Release : 20.5 - March 2021
 *
 * Product Catalog API is one of Catalog Management API Family. Product Catalog API goal is to provide a catalog of products.
 *
 * ### Operations
 * Product Catalog API performs the following operations on the resources :
 * - Retrieve an entity or a collection of entities depending on filter criteria
 * - Partial update of an entity (including updating rules)
 * - Create an entity (including default values and creation rules)
 * - Delete an entity
 * - Manage notification of events
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  catalog = {
    /**
     * @description This operation list or find Catalog entities
     *
     * @tags catalog
     * @name ListCatalog
     * @summary List or find Catalog objects
     * @request GET:/catalog
     */
    listCatalog: (query?: { fields?: string; offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<Catalog[], Error>({
        path: `/catalog`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a Catalog entity.
     *
     * @tags catalog
     * @name CreateCatalog
     * @summary Creates a Catalog
     * @request POST:/catalog
     */
    createCatalog: (catalog: CatalogCreate, params: RequestParams = {}) =>
      this.request<Catalog, Error>({
        path: `/catalog`,
        method: "POST",
        body: catalog,
        ...params,
      }),

    /**
     * @description This operation retrieves a Catalog entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags catalog
     * @name RetrieveCatalog
     * @summary Retrieves a Catalog by ID
     * @request GET:/catalog/{id}
     */
    retrieveCatalog: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<Catalog, Error>({
        path: `/catalog/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation updates partially a Catalog entity.
     *
     * @tags catalog
     * @name PatchCatalog
     * @summary Updates partially a Catalog
     * @request PATCH:/catalog/{id}
     */
    patchCatalog: (id: string, catalog: CatalogUpdate, params: RequestParams = {}) =>
      this.request<Catalog, Error>({
        path: `/catalog/${id}`,
        method: "PATCH",
        body: catalog,
        ...params,
      }),

    /**
     * @description This operation deletes a Catalog entity.
     *
     * @tags catalog
     * @name DeleteCatalog
     * @summary Deletes a Catalog
     * @request DELETE:/catalog/{id}
     */
    deleteCatalog: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/catalog/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  category = {
    /**
     * @description This operation list or find Category entities
     *
     * @tags category
     * @name ListCategory
     * @summary List or find Category objects
     * @request GET:/category
     */
    listCategory: (query?: { fields?: string; offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<Category[], Error>({
        path: `/category`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a Category entity.
     *
     * @tags category
     * @name CreateCategory
     * @summary Creates a Category
     * @request POST:/category
     */
    createCategory: (category: CategoryCreate, params: RequestParams = {}) =>
      this.request<Category, Error>({
        path: `/category`,
        method: "POST",
        body: category,
        ...params,
      }),

    /**
     * @description This operation retrieves a Category entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags category
     * @name RetrieveCategory
     * @summary Retrieves a Category by ID
     * @request GET:/category/{id}
     */
    retrieveCategory: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<Category, Error>({
        path: `/category/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation updates partially a Category entity.
     *
     * @tags category
     * @name PatchCategory
     * @summary Updates partially a Category
     * @request PATCH:/category/{id}
     */
    patchCategory: (id: string, category: CategoryUpdate, params: RequestParams = {}) =>
      this.request<Category, Error>({
        path: `/category/${id}`,
        method: "PATCH",
        body: category,
        ...params,
      }),

    /**
     * @description This operation deletes a Category entity.
     *
     * @tags category
     * @name DeleteCategory
     * @summary Deletes a Category
     * @request DELETE:/category/{id}
     */
    deleteCategory: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/category/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  productOffering = {
    /**
     * @description This operation list or find ProductOffering entities
     *
     * @tags productOffering
     * @name ListProductOffering
     * @summary List or find ProductOffering objects
     * @request GET:/productOffering
     */
    listProductOffering: (query?: { fields?: string; offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<ProductOffering[], Error>({
        path: `/productOffering`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a ProductOffering entity.
     *
     * @tags productOffering
     * @name CreateProductOffering
     * @summary Creates a ProductOffering
     * @request POST:/productOffering
     */
    createProductOffering: (productOffering: ProductOfferingCreate, params: RequestParams = {}) =>
      this.request<ProductOffering, Error>({
        path: `/productOffering`,
        method: "POST",
        body: productOffering,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductOffering entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags productOffering
     * @name RetrieveProductOffering
     * @summary Retrieves a ProductOffering by ID
     * @request GET:/productOffering/{id}
     */
    retrieveProductOffering: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ProductOffering, Error>({
        path: `/productOffering/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation updates partially a ProductOffering entity.
     *
     * @tags productOffering
     * @name PatchProductOffering
     * @summary Updates partially a ProductOffering
     * @request PATCH:/productOffering/{id}
     */
    patchProductOffering: (id: string, productOffering: ProductOfferingUpdate, params: RequestParams = {}) =>
      this.request<ProductOffering, Error>({
        path: `/productOffering/${id}`,
        method: "PATCH",
        body: productOffering,
        ...params,
      }),

    /**
     * @description This operation deletes a ProductOffering entity.
     *
     * @tags productOffering
     * @name DeleteProductOffering
     * @summary Deletes a ProductOffering
     * @request DELETE:/productOffering/{id}
     */
    deleteProductOffering: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/productOffering/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  productOfferingPrice = {
    /**
     * @description This operation list or find ProductOfferingPrice entities
     *
     * @tags productOfferingPrice
     * @name ListProductOfferingPrice
     * @summary List or find ProductOfferingPrice objects
     * @request GET:/productOfferingPrice
     */
    listProductOfferingPrice: (
      query?: { fields?: string; offset?: number; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<ProductOfferingPrice[], Error>({
        path: `/productOfferingPrice`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a ProductOfferingPrice entity.
     *
     * @tags productOfferingPrice
     * @name CreateProductOfferingPrice
     * @summary Creates a ProductOfferingPrice
     * @request POST:/productOfferingPrice
     */
    createProductOfferingPrice: (productOfferingPrice: ProductOfferingPriceCreate, params: RequestParams = {}) =>
      this.request<ProductOfferingPrice, Error>({
        path: `/productOfferingPrice`,
        method: "POST",
        body: productOfferingPrice,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductOfferingPrice entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags productOfferingPrice
     * @name RetrieveProductOfferingPrice
     * @summary Retrieves a ProductOfferingPrice by ID
     * @request GET:/productOfferingPrice/{id}
     */
    retrieveProductOfferingPrice: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ProductOfferingPrice, Error>({
        path: `/productOfferingPrice/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation updates partially a ProductOfferingPrice entity.
     *
     * @tags productOfferingPrice
     * @name PatchProductOfferingPrice
     * @summary Updates partially a ProductOfferingPrice
     * @request PATCH:/productOfferingPrice/{id}
     */
    patchProductOfferingPrice: (
      id: string,
      productOfferingPrice: ProductOfferingPriceUpdate,
      params: RequestParams = {},
    ) =>
      this.request<ProductOfferingPrice, Error>({
        path: `/productOfferingPrice/${id}`,
        method: "PATCH",
        body: productOfferingPrice,
        ...params,
      }),

    /**
     * @description This operation deletes a ProductOfferingPrice entity.
     *
     * @tags productOfferingPrice
     * @name DeleteProductOfferingPrice
     * @summary Deletes a ProductOfferingPrice
     * @request DELETE:/productOfferingPrice/{id}
     */
    deleteProductOfferingPrice: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/productOfferingPrice/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  productSpecification = {
    /**
     * @description This operation list or find ProductSpecification entities
     *
     * @tags productSpecification
     * @name ListProductSpecification
     * @summary List or find ProductSpecification objects
     * @request GET:/productSpecification
     */
    listProductSpecification: (
      query?: { fields?: string; offset?: number; limit?: number },
      params: RequestParams = {},
    ) =>
      this.request<ProductSpecification[], Error>({
        path: `/productSpecification`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a ProductSpecification entity.
     *
     * @tags productSpecification
     * @name CreateProductSpecification
     * @summary Creates a ProductSpecification
     * @request POST:/productSpecification
     */
    createProductSpecification: (productSpecification: ProductSpecificationCreate, params: RequestParams = {}) =>
      this.request<ProductSpecification, Error>({
        path: `/productSpecification`,
        method: "POST",
        body: productSpecification,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductSpecification entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags productSpecification
     * @name RetrieveProductSpecification
     * @summary Retrieves a ProductSpecification by ID
     * @request GET:/productSpecification/{id}
     */
    retrieveProductSpecification: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ProductSpecification, Error>({
        path: `/productSpecification/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation updates partially a ProductSpecification entity.
     *
     * @tags productSpecification
     * @name PatchProductSpecification
     * @summary Updates partially a ProductSpecification
     * @request PATCH:/productSpecification/{id}
     */
    patchProductSpecification: (
      id: string,
      productSpecification: ProductSpecificationUpdate,
      params: RequestParams = {},
    ) =>
      this.request<ProductSpecification, Error>({
        path: `/productSpecification/${id}`,
        method: "PATCH",
        body: productSpecification,
        ...params,
      }),

    /**
     * @description This operation deletes a ProductSpecification entity.
     *
     * @tags productSpecification
     * @name DeleteProductSpecification
     * @summary Deletes a ProductSpecification
     * @request DELETE:/productSpecification/{id}
     */
    deleteProductSpecification: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/productSpecification/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  importJob = {
    /**
     * @description This operation list or find ImportJob entities
     *
     * @tags importJob
     * @name ListImportJob
     * @summary List or find ImportJob objects
     * @request GET:/importJob
     */
    listImportJob: (query?: { fields?: string; offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<ImportJob[], Error>({
        path: `/importJob`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a ImportJob entity.
     *
     * @tags importJob
     * @name CreateImportJob
     * @summary Creates a ImportJob
     * @request POST:/importJob
     */
    createImportJob: (importJob: ImportJobCreate, params: RequestParams = {}) =>
      this.request<ImportJob, Error>({
        path: `/importJob`,
        method: "POST",
        body: importJob,
        ...params,
      }),

    /**
     * @description This operation retrieves a ImportJob entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags importJob
     * @name RetrieveImportJob
     * @summary Retrieves a ImportJob by ID
     * @request GET:/importJob/{id}
     */
    retrieveImportJob: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ImportJob, Error>({
        path: `/importJob/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation deletes a ImportJob entity.
     *
     * @tags importJob
     * @name DeleteImportJob
     * @summary Deletes a ImportJob
     * @request DELETE:/importJob/{id}
     */
    deleteImportJob: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/importJob/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  exportJob = {
    /**
     * @description This operation list or find ExportJob entities
     *
     * @tags exportJob
     * @name ListExportJob
     * @summary List or find ExportJob objects
     * @request GET:/exportJob
     */
    listExportJob: (query?: { fields?: string; offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<ExportJob[], Error>({
        path: `/exportJob`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a ExportJob entity.
     *
     * @tags exportJob
     * @name CreateExportJob
     * @summary Creates a ExportJob
     * @request POST:/exportJob
     */
    createExportJob: (exportJob: ExportJobCreate, params: RequestParams = {}) =>
      this.request<ExportJob, Error>({
        path: `/exportJob`,
        method: "POST",
        body: exportJob,
        ...params,
      }),

    /**
     * @description This operation retrieves a ExportJob entity. Attribute selection is enabled for all first level attributes.
     *
     * @tags exportJob
     * @name RetrieveExportJob
     * @summary Retrieves a ExportJob by ID
     * @request GET:/exportJob/{id}
     */
    retrieveExportJob: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ExportJob, Error>({
        path: `/exportJob/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation deletes a ExportJob entity.
     *
     * @tags exportJob
     * @name DeleteExportJob
     * @summary Deletes a ExportJob
     * @request DELETE:/exportJob/{id}
     */
    deleteExportJob: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/exportJob/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  hub = {
    /**
     * @description Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
     *
     * @tags events subscription
     * @name RegisterListener
     * @summary Register a listener
     * @request POST:/hub
     */
    registerListener: (data: EventSubscriptionInput, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/hub`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
     *
     * @tags events subscription
     * @name UnregisterListener
     * @summary Unregister a listener
     * @request DELETE:/hub/{id}
     */
    unregisterListener: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/hub/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  listener = {
    /**
     * @description Example of a client listener for receiving the notification CatalogCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCatalogCreateEvent
     * @summary Client listener for entity CatalogCreateEvent
     * @request POST:/listener/catalogCreateEvent
     */
    listenToCatalogCreateEvent: (data: CatalogCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/catalogCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CatalogAttributeValueChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCatalogAttributeValueChangeEvent
     * @summary Client listener for entity CatalogAttributeValueChangeEvent
     * @request POST:/listener/catalogAttributeValueChangeEvent
     */
    listenToCatalogAttributeValueChangeEvent: (data: CatalogAttributeValueChangeEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/catalogAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CatalogStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCatalogStateChangeEvent
     * @summary Client listener for entity CatalogStateChangeEvent
     * @request POST:/listener/catalogStateChangeEvent
     */
    listenToCatalogStateChangeEvent: (data: CatalogStateChangeEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/catalogStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CatalogDeleteEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCatalogDeleteEvent
     * @summary Client listener for entity CatalogDeleteEvent
     * @request POST:/listener/catalogDeleteEvent
     */
    listenToCatalogDeleteEvent: (data: CatalogDeleteEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/catalogDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CatalogBatchEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCatalogBatchEvent
     * @summary Client listener for entity CatalogBatchEvent
     * @request POST:/listener/catalogBatchEvent
     */
    listenToCatalogBatchEvent: (data: CatalogBatchEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/catalogBatchEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCategoryCreateEvent
     * @summary Client listener for entity CategoryCreateEvent
     * @request POST:/listener/categoryCreateEvent
     */
    listenToCategoryCreateEvent: (data: CategoryCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/categoryCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryAttributeValueChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCategoryAttributeValueChangeEvent
     * @summary Client listener for entity CategoryAttributeValueChangeEvent
     * @request POST:/listener/categoryAttributeValueChangeEvent
     */
    listenToCategoryAttributeValueChangeEvent: (data: CategoryAttributeValueChangeEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/categoryAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCategoryStateChangeEvent
     * @summary Client listener for entity CategoryStateChangeEvent
     * @request POST:/listener/categoryStateChangeEvent
     */
    listenToCategoryStateChangeEvent: (data: CategoryStateChangeEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/categoryStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryDeleteEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToCategoryDeleteEvent
     * @summary Client listener for entity CategoryDeleteEvent
     * @request POST:/listener/categoryDeleteEvent
     */
    listenToCategoryDeleteEvent: (data: CategoryDeleteEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/categoryDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingCreateEvent
     * @summary Client listener for entity ProductOfferingCreateEvent
     * @request POST:/listener/productOfferingCreateEvent
     */
    listenToProductOfferingCreateEvent: (data: ProductOfferingCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingAttributeValueChangeEvent
     * @summary Client listener for entity ProductOfferingAttributeValueChangeEvent
     * @request POST:/listener/productOfferingAttributeValueChangeEvent
     */
    listenToProductOfferingAttributeValueChangeEvent: (
      data: ProductOfferingAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingStateChangeEvent
     * @summary Client listener for entity ProductOfferingStateChangeEvent
     * @request POST:/listener/productOfferingStateChangeEvent
     */
    listenToProductOfferingStateChangeEvent: (data: ProductOfferingStateChangeEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingDeleteEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingDeleteEvent
     * @summary Client listener for entity ProductOfferingDeleteEvent
     * @request POST:/listener/productOfferingDeleteEvent
     */
    listenToProductOfferingDeleteEvent: (data: ProductOfferingDeleteEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingPriceCreateEvent
     * @summary Client listener for entity ProductOfferingPriceCreateEvent
     * @request POST:/listener/productOfferingPriceCreateEvent
     */
    listenToProductOfferingPriceCreateEvent: (data: ProductOfferingPriceCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingPriceCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingPriceAttributeValueChangeEvent
     * @summary Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
     * @request POST:/listener/productOfferingPriceAttributeValueChangeEvent
     */
    listenToProductOfferingPriceAttributeValueChangeEvent: (
      data: ProductOfferingPriceAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingPriceAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingPriceStateChangeEvent
     * @summary Client listener for entity ProductOfferingPriceStateChangeEvent
     * @request POST:/listener/productOfferingPriceStateChangeEvent
     */
    listenToProductOfferingPriceStateChangeEvent: (
      data: ProductOfferingPriceStateChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingPriceStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductOfferingPriceDeleteEvent
     * @summary Client listener for entity ProductOfferingPriceDeleteEvent
     * @request POST:/listener/productOfferingPriceDeleteEvent
     */
    listenToProductOfferingPriceDeleteEvent: (data: ProductOfferingPriceDeleteEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productOfferingPriceDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationCreateEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductSpecificationCreateEvent
     * @summary Client listener for entity ProductSpecificationCreateEvent
     * @request POST:/listener/productSpecificationCreateEvent
     */
    listenToProductSpecificationCreateEvent: (data: ProductSpecificationCreateEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productSpecificationCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationAttributeValueChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductSpecificationAttributeValueChangeEvent
     * @summary Client listener for entity ProductSpecificationAttributeValueChangeEvent
     * @request POST:/listener/productSpecificationAttributeValueChangeEvent
     */
    listenToProductSpecificationAttributeValueChangeEvent: (
      data: ProductSpecificationAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productSpecificationAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationStateChangeEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductSpecificationStateChangeEvent
     * @summary Client listener for entity ProductSpecificationStateChangeEvent
     * @request POST:/listener/productSpecificationStateChangeEvent
     */
    listenToProductSpecificationStateChangeEvent: (
      data: ProductSpecificationStateChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productSpecificationStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
     *
     * @tags notification listeners (client side)
     * @name ListenToProductSpecificationDeleteEvent
     * @summary Client listener for entity ProductSpecificationDeleteEvent
     * @request POST:/listener/productSpecificationDeleteEvent
     */
    listenToProductSpecificationDeleteEvent: (data: ProductSpecificationDeleteEvent, params: RequestParams = {}) =>
      this.request<EventSubscription, Error>({
        path: `/listener/productSpecificationDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
}
