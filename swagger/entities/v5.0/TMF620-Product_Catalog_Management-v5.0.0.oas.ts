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
  /** Hyperlink reference */
  href?: string;

  /** unique identifier */
  id?: string;
}

/**
 * Base schema for adressable entities
 */
export interface AddressableFVO {
  /** unique identifier */
  id?: string;
}

/**
 * Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.
 */
export type AgreementRef = Extensible & EntityRef;

/**
 * Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.
 */
export type AgreementRefFVO = ExtensibleFVO & EntityRefFVO;

/**
 * Agreement reference. An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.
 */
export type AgreementRefMVO = Extensible & EntityRef;

export type AllowedProductAction = Extensible & { validFor?: TimePeriod; channel?: ChannelRef[]; action?: string };

export type AllowedProductActionFVO = ExtensibleFVO & {
  validFor?: TimePeriod;
  channel?: ChannelRefFVO[];
  action: string;
};

export type AllowedProductActionMVO = Extensible & { validFor?: TimePeriod; channel?: ChannelRefMVO[]; action: string };

export type Attachment = Entity & {
  name?: string;
  description?: string;
  url?: string;
  content?: string;
  size?: Quantity;
  validFor?: TimePeriod;
  attachmentType?: string;
  mimeType?: string;
};

export type AttachmentRef = EntityRef & { description?: string; url?: string };

/**
 * The polymorphic attributes @type, @schemaLocation & @referredType are related to the Attachment entity and not the AttachmentRefOrValue class itself
 */
export type AttachmentRefOrValue = Attachment | AttachmentRef;

/**
 * The polymorphic attributes @type, @schemaLocation & @referredType are related to the Attachment entity and not the AttachmentRefOrValue class itself
 */
export type AttachmentRefOrValueFVO = AttachmentFVO | AttachmentRefFVO;

/**
 * The polymorphic attributes @type, @schemaLocation & @referredType are related to the Attachment entity and not the AttachmentRefOrValue class itself
 */
export type AttachmentRefOrValueMVO = AttachmentMVO | AttachmentRefMVO;

export type AttachmentRefFVO = EntityRefFVO & { description?: string; url?: string };

export type AttachmentRefMVO = EntityRef & { description?: string; url?: string };

export type AttachmentFVO = EntityFVO & {
  name?: string;
  description?: string;
  url?: string;
  content?: string;
  size?: Quantity;
  validFor?: TimePeriod;
  attachmentType: string;
  mimeType: string;
};

export type AttachmentMVO = EntityMVO & {
  name?: string;
  description?: string;
  url?: string;
  content?: string;
  size?: Quantity;
  validFor?: TimePeriod;
  attachmentType?: string;
  mimeType?: string;
};

export type BaseEvent = Entity & {
  event?: object;
  eventId?: string;
  eventTime?: string;
  eventType?: string;
  correlationId?: string;
  domain?: string;
  title?: string;
  description?: string;
  priority?: string;
  timeOcurred?: string;
};

export type BaseEventFVO = EntityFVO & {
  event?: object;
  eventId?: string;
  eventTime?: string;
  eventType?: string;
  correlationId?: string;
  domain?: string;
  title?: string;
  description?: string;
  priority?: string;
  timeOcurred?: string;
};

export type BaseEventMVO = EntityMVO & {
  event?: object;
  eventId?: string;
  eventTime?: string;
  eventType?: string;
  correlationId?: string;
  domain?: string;
  title?: string;
  description?: string;
  priority?: string;
  timeOcurred?: string;
};

export type BooleanArrayCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: boolean[] };

export type BooleanArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & {
  value?: boolean[];
};

export type BooleanArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & {
  value?: boolean[];
};

export type BooleanCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: boolean };

export type BooleanCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: boolean };

export type BooleanCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: boolean };

export type BundledGroupProductOffering = Extensible & {
  id?: string;
  name?: string;
  bundledProductOffering?: BundledProductOffering[];
  bundledGroupProductOffering?: BundledGroupProductOffering[];
  bundledGroupProductOfferingOption?: BundledGroupProductOfferingOption;
};

export type BundledGroupProductOfferingOption = Extensible & {
  numberRelOfferLowerLimit?: number;
  numberRelOfferUpperLimit?: number;
};

export type BundledGroupProductOfferingOptionFVO = ExtensibleFVO & {
  numberRelOfferLowerLimit: number;
  numberRelOfferUpperLimit: number;
};

export type BundledGroupProductOfferingOptionMVO = Extensible & {
  numberRelOfferLowerLimit: number;
  numberRelOfferUpperLimit: number;
};

export type BundledGroupProductOfferingFVO = ExtensibleFVO & {
  id?: string;
  name: string;
  bundledProductOffering?: BundledProductOfferingFVO[];
  bundledGroupProductOffering?: BundledGroupProductOfferingFVO[];
  bundledGroupProductOfferingOption?: BundledGroupProductOfferingOptionFVO;
};

export type BundledGroupProductOfferingMVO = Extensible & {
  id?: string;
  name: string;
  bundledProductOffering?: BundledProductOfferingMVO[];
  bundledGroupProductOffering?: BundledGroupProductOfferingMVO[];
  bundledGroupProductOfferingOption?: BundledGroupProductOfferingOptionMVO;
};

export type BundledProductOffering = ProductOfferingRef & {
  bundledProductOfferingOption?: BundledProductOfferingOption;
};

export type BundledProductOfferingOption = Extensible & {
  numberRelOfferDefault?: number;
  numberRelOfferLowerLimit?: number;
  numberRelOfferUpperLimit?: number;
};

export type BundledProductOfferingOptionFVO = ExtensibleFVO & {
  numberRelOfferDefault?: number;
  numberRelOfferLowerLimit?: number;
  numberRelOfferUpperLimit?: number;
};

export type BundledProductOfferingOptionMVO = Extensible & {
  numberRelOfferDefault?: number;
  numberRelOfferLowerLimit?: number;
  numberRelOfferUpperLimit?: number;
};

export type BundledProductOfferingPriceRelationship = EntityRef & { version?: string };

export type BundledProductOfferingPriceRelationshipFVO = EntityRefFVO & { version?: string };

export type BundledProductOfferingPriceRelationshipMVO = EntityRef & { version?: string };

export type BundledProductOfferingFVO = ProductOfferingRefFVO & {
  bundledProductOfferingOption?: BundledProductOfferingOptionFVO;
};

export type BundledProductOfferingMVO = ProductOfferingRefMVO & {
  bundledProductOfferingOption?: BundledProductOfferingOptionMVO;
};

export type BundledProductSpecification = Extensible & {
  href?: string;
  id?: string;
  lifecycleStatus?: string;
  name?: string;
  version?: string;
};

export type BundledProductSpecificationFVO = ExtensibleFVO & {
  href?: string;
  id?: string;
  lifecycleStatus?: string;
  name?: string;
  version?: string;
};

export type BundledProductSpecificationMVO = Extensible & {
  href?: string;
  id?: string;
  lifecycleStatus?: string;
  name?: string;
  version?: string;
};

export type Catalog = Entity & {
  description?: string;
  catalogType?: string;
  validFor?: TimePeriod;
  version?: string;
  relatedParty?: RelatedPartyRefOrPartyRoleRef[];
  lastUpdate?: string;
  lifecycleStatus?: string;
  name?: string;
};

export type CatalogFVO = EntityFVO & {
  description?: string;
  catalogType?: string;
  validFor?: TimePeriod;
  version?: string;
  relatedParty?: RelatedPartyRefOrPartyRoleRefFVO[];
  lastUpdate?: string;
  lifecycleStatus?: string;
  name: string;
};

export type CatalogMVO = EntityMVO & {
  description?: string;
  catalogType?: string;
  validFor?: TimePeriod;
  version?: string;
  relatedParty?: RelatedPartyRefOrPartyRoleRefMVO[];
  lastUpdate?: string;
  lifecycleStatus?: string;
  name?: string;
};

export type Category = Entity & {
  description?: string;
  isRoot?: boolean;
  parent?: CategoryRef;
  productOffering?: ProductOfferingRef[];
  subCategory?: CategoryRef[];
  validFor?: TimePeriod;
  version?: string;
  lastUpdate?: string;
  lifecycleStatus?: string;
  name?: string;
};

export type CategoryAttributeValueChangeEvent = Event & { event?: CategoryAttributeValueChangeEventPayload };

/**
 * CategoryAttributeValueChangeEventPayload generic structure
 */
export interface CategoryAttributeValueChangeEventPayload {
  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: Category;
}

export type CategoryCreateEvent = Event & { event?: CategoryCreateEventPayload };

/**
 * CategoryCreateEventPayload generic structure
 */
export interface CategoryCreateEventPayload {
  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: Category;
}

export type CategoryDeleteEvent = Event & { event?: CategoryDeleteEventPayload };

/**
 * CategoryDeleteEventPayload generic structure
 */
export interface CategoryDeleteEventPayload {
  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: Category;
}

export type CategoryRef = EntityRef & { version?: string };

export type CategoryRefFVO = EntityRefFVO & { version?: string };

export type CategoryRefMVO = EntityRef & { version?: string };

export type CategoryStateChangeEvent = Event & { event?: CategoryStateChangeEventPayload };

/**
 * CategoryStateChangeEventPayload generic structure
 */
export interface CategoryStateChangeEventPayload {
  /** The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. */
  category?: Category;
}

export type CategoryFVO = EntityFVO & {
  description?: string;
  isRoot?: boolean;
  parent?: CategoryRefFVO;
  productOffering?: ProductOfferingRefFVO[];
  subCategory?: CategoryRefFVO[];
  validFor?: TimePeriod;
  version?: string;
  lastUpdate?: string;
  lifecycleStatus?: string;
  name: string;
};

export type CategoryMVO = EntityMVO & {
  description?: string;
  isRoot?: boolean;
  parent?: CategoryRefMVO;
  productOffering?: ProductOfferingRefMVO[];
  subCategory?: CategoryRefMVO[];
  validFor?: TimePeriod;
  version?: string;
  lifecycleStatus?: string;
  name?: string;
};

/**
 * The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..
 */
export type ChannelRef = EntityRef;

/**
 * The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..
 */
export type ChannelRefFVO = EntityRefFVO;

/**
 * The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..
 */
export type ChannelRefMVO = EntityRef;

export type Characteristic = Extensible & {
  id?: string;
  name?: string;
  valueType?: string;
  characteristicRelationship?: CharacteristicRelationship[];
};

export type CharacteristicRelationship = Extensible & { id?: string; relationshipType?: string };

export type CharacteristicRelationshipFVO = Extensible & { id: string; relationshipType: string };

export type CharacteristicRelationshipMVO = Extensible & { id: string; relationshipType: string };

export type CharacteristicSpecification = Extensible & {
  id?: string;
  name?: string;
  valueType?: string;
  description?: string;
  configurable?: boolean;
  validFor?: TimePeriod;
  minCardinality?: number;
  maxCardinality?: number;
  isUnique?: boolean;
  regex?: string;
  extensible?: boolean;
  "@valueSchemaLocation"?: string;
  charSpecRelationship?: CharacteristicSpecificationRelationship[];
  characteristicValueSpecification?: CharacteristicValueSpecification[];
};

export type CharacteristicSpecificationRelationship = Extensible & {
  relationshipType?: string;
  name?: string;
  characteristicSpecificationId?: string;
  parentSpecificationHref?: string;
  validFor?: TimePeriod;
  parentSpecificationId?: string;
};

export type CharacteristicSpecificationRelationshipFVO = ExtensibleFVO & {
  relationshipType: string;
  name: string;
  characteristicSpecificationId?: string;
  parentSpecificationHref?: string;
  validFor?: TimePeriod;
  parentSpecificationId: string;
};

export type CharacteristicSpecificationRelationshipMVO = Extensible & {
  relationshipType: string;
  name: string;
  characteristicSpecificationId?: string;
  parentSpecificationHref?: string;
  validFor?: TimePeriod;
  parentSpecificationId: string;
};

export type CharacteristicSpecificationFVO = ExtensibleFVO & {
  id?: string;
  name: string;
  valueType: string;
  description?: string;
  configurable?: boolean;
  validFor?: TimePeriod;
  minCardinality?: number;
  maxCardinality?: number;
  isUnique?: boolean;
  regex?: string;
  extensible?: boolean;
  "@valueSchemaLocation"?: string;
  charSpecRelationship?: CharacteristicSpecificationRelationshipFVO[];
  characteristicValueSpecification?: CharacteristicValueSpecificationFVO[];
};

export type CharacteristicSpecificationMVO = Extensible & {
  id?: string;
  name: string;
  valueType: string;
  description?: string;
  configurable?: boolean;
  validFor?: TimePeriod;
  minCardinality?: number;
  maxCardinality?: number;
  isUnique?: boolean;
  regex?: string;
  extensible?: boolean;
  "@valueSchemaLocation"?: string;
  charSpecRelationship?: CharacteristicSpecificationRelationshipMVO[];
  characteristicValueSpecification?: CharacteristicValueSpecificationMVO[];
};

export type CharacteristicValueSpecification = Extensible & {
  valueType?: string;
  isDefault?: boolean;
  unitOfMeasure?: string;
  validFor?: TimePeriod;
  valueFrom?: number;
  valueTo?: number;
  rangeInterval?: string;
  regex?: string;
};

export type CharacteristicValueSpecificationFVO = ExtensibleFVO & {
  valueType?: string;
  isDefault?: boolean;
  unitOfMeasure?: string;
  validFor?: TimePeriod;
  valueFrom?: number;
  valueTo?: number;
  rangeInterval?: string;
  regex?: string;
};

export type CharacteristicValueSpecificationMVO = Extensible & {
  valueType?: string;
  isDefault?: boolean;
  unitOfMeasure?: string;
  validFor?: TimePeriod;
  valueFrom?: number;
  valueTo?: number;
  rangeInterval?: string;
  regex?: string;
};

export type CharacteristicFVO = Extensible & {
  id?: string;
  name: string;
  valueType?: string;
  characteristicRelationship?: CharacteristicRelationshipFVO[];
};

export type CharacteristicMVO = Extensible & {
  id?: string;
  name: string;
  valueType?: string;
  characteristicRelationship?: CharacteristicRelationshipMVO[];
};

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
 * Base entity schema for use in TMForum Open-APIs. Property.
 */
export type Entity = Extensible & Addressable;

export type EntityRef = Extensible &
  Addressable & { id: string; href?: string; name?: string; "@referredType"?: string };

export type EntityRefFVO = ExtensibleFVO &
  AddressableFVO & { id: string; href?: string; name?: string; "@referredType"?: string };

/**
 * Base entity schema for use in TMForum Open-APIs. Property.
 */
export type EntityFVO = ExtensibleFVO & AddressableFVO;

/**
 * Base entity schema for use in TMForum Open-APIs. Property.
 */
export type EntityMVO = Extensible;

export type Event = Extensible & {
  href?: string;
  id?: string;
  correlationId?: string;
  domain?: string;
  title?: string;
  description?: string;
  priority?: string;
  timeOccurred?: string;
  source?: EntityRef;
  reportingSystem?: EntityRef;
  relatedParty?: RelatedPartyRefOrPartyRoleRef[];
  analyticCharacteristic?: Characteristic[];
  eventId?: string;
  eventTime?: string;
  eventType?: string;
  event?: object;
};

export type EventFVO = Extensible & {
  href?: string;
  id?: string;
  correlationId?: string;
  domain?: string;
  title?: string;
  description?: string;
  priority?: string;
  timeOccurred?: string;
  source?: EntityRefFVO;
  reportingSystem?: EntityRefFVO;
  relatedParty?: RelatedPartyRefOrPartyRoleRefFVO[];
  analyticCharacteristic?: CharacteristicFVO[];
  eventId: string;
  eventTime: string;
  eventType: string;
  event: object;
};

export type EventMVO = Extensible & {
  href?: string;
  id?: string;
  correlationId?: string;
  domain?: string;
  title?: string;
  description?: string;
  priority?: string;
  timeOccurred?: string;
  source?: EntityRef;
  reportingSystem?: EntityRef;
  relatedParty?: RelatedPartyRefOrPartyRoleRefMVO[];
  analyticCharacteristic?: CharacteristicMVO[];
  eventId: string;
  eventTime: string;
  eventType: string;
  event: object;
};

export type ExportJob = Entity & {
  completionDate?: string;
  contentType?: string;
  creationDate?: string;
  errorLog?: string;
  path?: string;
  query?: string;
  status?: JobStateType;
  url?: string;
  id?: string;
};

export type ExportJobCreateEvent = Event & { event?: ExportJobCreateEventPayload };

/**
 * ExportJobCreateEventPayload generic structure
 */
export interface ExportJobCreateEventPayload {
  /** Represents a task used to export resources to a file */
  exportJob?: ExportJob;
}

export type ExportJobStateChangeEvent = Event & { event?: ExportJobStateChangeEventPayload };

/**
 * ExportJobStateChangeEventPayload generic structure
 */
export interface ExportJobStateChangeEventPayload {
  /** Represents a task used to export resources to a file */
  exportJob?: ExportJob;
}

export type ExportJobFVO = EntityFVO & {
  completionDate?: string;
  contentType?: string;
  creationDate?: string;
  errorLog?: string;
  path?: string;
  query?: string;
  status?: JobStateType;
  url: string;
  id?: string;
};

export type ExportJobMVO = EntityMVO & {
  completionDate?: string;
  contentType?: string;
  creationDate?: string;
  errorLog?: string;
  path?: string;
  query?: string;
  status?: JobStateType;
  url?: string;
  id?: string;
};

/**
 * Base Extensible schema for use in TMForum Open-APIs - When used for in a schema it means that the Entity described by the schema  MUST be extended with the @type
 */
export interface Extensible {
  /** When sub-classing, this defines the sub-class Extensible name */
  "@type": string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /** A URI to a JSON-Schema file that defines additional attributes and relationships */
  "@schemaLocation"?: string;
}

/**
 * Base Extensible schema for use in TMForum Open-APIs - When used for in a schema it means that the Entity described by the schema  MUST be extended with the @type
 */
export interface ExtensibleFVO {
  /** When sub-classing, this defines the sub-class Extensible name */
  "@type": string;

  /** When sub-classing, this defines the super-class */
  "@baseType"?: string;

  /** A URI to a JSON-Schema file that defines additional attributes and relationships */
  "@schemaLocation"?: string;
}

export type ExternalIdentifier = Extensible & { owner?: string; externalIdentifierType?: string; id?: string };

export type ExternalIdentifierFVO = ExtensibleFVO & { owner?: string; externalIdentifierType?: string; id: string };

export type ExternalIdentifierMVO = Extensible & { owner?: string; externalIdentifierType?: string; id?: string };

export type FloatArrayCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: number[] };

export type FloatArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: number[] };

export type FloatArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: number[] };

export type FloatCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: number };

export type FloatCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: number };

export type FloatCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: number };

export type ImportJob = Entity & {
  completionDate?: string;
  contentType?: string;
  creationDate?: string;
  errorLog?: string;
  path?: string;
  status?: JobStateType;
  url?: string;
  id?: string;
};

export type ImportJobCreateEvent = Event & { event?: ImportJobCreateEventPayload };

/**
 * ImportJobCreateEventPayload generic structure
 */
export interface ImportJobCreateEventPayload {
  /** Represents a task used to import resources from a file */
  importJob?: ImportJob;
}

export type ImportJobStateChangeEvent = Event & { event?: ImportJobStateChangeEventPayload };

/**
 * ImportJobStateChangeEventPayload generic structure
 */
export interface ImportJobStateChangeEventPayload {
  /** Represents a task used to import resources from a file */
  importJob?: ImportJob;
}

export type ImportJobFVO = EntityFVO & {
  completionDate?: string;
  contentType?: string;
  creationDate?: string;
  errorLog?: string;
  path?: string;
  status?: JobStateType;
  url: string;
  id?: string;
};

export type ImportJobMVO = EntityMVO & {
  completionDate?: string;
  contentType?: string;
  creationDate?: string;
  errorLog?: string;
  path?: string;
  status?: JobStateType;
  url?: string;
  id?: string;
};

export type IntegerArrayCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: number[] };

export type IntegerArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & {
  value?: number[];
};

export type IntegerArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & {
  value?: number[];
};

export type IntegerCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: number };

export type IntegerCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: number };

export type IntegerCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: number };

export type IntentSpecificationRef = EntityRef;

export type IntentSpecificationRefFVO = EntityRefFVO;

export type IntentSpecificationRefMVO = EntityRef;

/**
 * Valid values for the state of a batch job (e.g. catalog import)
 */
export enum JobStateType {
  NotStarted = "Not Started",
  Running = "Running",
  Succeeded = "Succeeded",
  Failed = "Failed",
}

export type MapArrayCharacteristicValueSpecification = CharacteristicValueSpecification & {
  value?: { value?: Record<string, object> }[];
};

export type MapArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & {
  value?: { value?: Record<string, object> }[];
};

export type MapArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & {
  value?: { value?: Record<string, object> }[];
};

export type MapCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: Record<string, object> };

export type MapCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & {
  value?: Record<string, object>;
};

export type MapCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & {
  value?: Record<string, object>;
};

/**
 * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
 */
export type MarketSegmentRef = Extensible & EntityRef & Entity;

/**
 * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
 */
export type MarketSegmentRefFVO = ExtensibleFVO & EntityRefFVO & EntityFVO;

/**
 * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
 */
export type MarketSegmentRefMVO = Extensible & EntityRef & EntityMVO;

/**
 * A base / value business entity used to represent money
 */
export interface Money {
  /** Currency (ISO4217 norm uses 3 letters to define the currency) */
  unit?: string;

  /**
   * A signed floating point number, the meaning of the sign is according to the context of the API that uses this Data type
   * @format float
   */
  value?: number;
}

export type NumberArrayCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: number[] };

export type NumberArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: number[] };

export type NumberArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: number[] };

export type NumberCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: number };

export type NumberCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: number };

export type NumberCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: number };

export type ObjectArrayCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: object[] };

export type ObjectArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: object[] };

export type ObjectArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: object[] };

export type ObjectCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: object };

export type ObjectCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: object };

export type ObjectCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: object };

/**
 * A Party reference
 */
export type PartyRef = EntityRef;

export type PartyRefOrPartyRoleRef = PartyRef | PartyRoleRef;

export type PartyRefOrPartyRoleRefFVO = PartyRefFVO | PartyRoleRefFVO;

export type PartyRefOrPartyRoleRefMVO = PartyRefMVO | PartyRoleRefMVO;

/**
 * A Party reference
 */
export type PartyRefFVO = EntityRefFVO;

/**
 * A Party reference
 */
export type PartyRefMVO = EntityRef;

export type PartyRoleRef = EntityRef & { partyId?: string; partyName?: string };

export type PartyRoleRefFVO = EntityRefFVO & { partyId?: string; partyName?: string };

export type PartyRoleRefMVO = EntityRef & { partyId?: string; partyName?: string };

/**
 * Place reference.
 */
export type PlaceRef = Extensible & EntityRef;

/**
 * Place reference.
 */
export type PlaceRefFVO = ExtensibleFVO & EntityRefFVO;

/**
 * Place reference.
 */
export type PlaceRefMVO = Extensible & EntityRef;

export type PolicyRef = EntityRef & {
  id?: string;
  href?: string;
  version?: string;
  "@type"?: string;
  "@baseType"?: string;
  "@schemaLocation"?: string;
};

export type PolicyRefFVO = EntityRefFVO & {
  id: string;
  href?: string;
  version?: string;
  "@type"?: string;
  "@baseType"?: string;
  "@schemaLocation"?: string;
};

export type PolicyRefMVO = EntityRef & {
  id?: string;
  href?: string;
  version?: string;
  "@type"?: string;
  "@baseType"?: string;
  "@schemaLocation"?: string;
};

export type PricingLogicAlgorithm = Entity & {
  description?: string;
  name?: string;
  plaSpecId?: string;
  validFor?: TimePeriod;
};

export type PricingLogicAlgorithmFVO = EntityFVO & {
  description?: string;
  name?: string;
  plaSpecId?: string;
  validFor?: TimePeriod;
};

export type PricingLogicAlgorithmMVO = EntityMVO & {
  description?: string;
  name?: string;
  plaSpecId?: string;
  validFor?: TimePeriod;
};

export type ProductCatalog = Catalog & { category?: CategoryRef[] };

export type ProductCatalogAttributeValueChangeEvent = Event & {
  event?: ProductCatalogAttributeValueChangeEventPayload;
};

/**
 * ProductCatalogAttributeValueChangeEventPayload generic structure
 */
export interface ProductCatalogAttributeValueChangeEventPayload {
  /** A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details */
  productCatalog?: ProductCatalog;
}

export type ProductCatalogCreateEvent = Event & { event?: ProductCatalogCreateEventPayload };

/**
 * ProductCatalogCreateEventPayload generic structure
 */
export interface ProductCatalogCreateEventPayload {
  /** A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details */
  productCatalog?: ProductCatalog;
}

export type ProductCatalogDeleteEvent = Event & { event?: ProductCatalogDeleteEventPayload };

/**
 * ProductCatalogDeleteEventPayload generic structure
 */
export interface ProductCatalogDeleteEventPayload {
  /** A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details */
  productCatalog?: ProductCatalog;
}

export type ProductCatalogStateChangeEvent = Event & { event?: ProductCatalogStateChangeEventPayload };

/**
 * ProductCatalogStateChangeEventPayload generic structure
 */
export interface ProductCatalogStateChangeEventPayload {
  /** A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details */
  productCatalog?: ProductCatalog;
}

export type ProductCatalogFVO = CatalogFVO & { category?: CategoryRefFVO[] };

export type ProductCatalogMVO = CatalogMVO & { category?: CategoryRefMVO[] };

export type ProductOffering = Entity & {
  description?: string;
  isBundle?: boolean;
  isSellable?: boolean;
  statusReason?: string;
  validFor?: TimePeriod;
  version?: string;
  place?: PlaceRef[];
  serviceLevelAgreement?: SLARef;
  channel?: ChannelRef[];
  serviceCandidate?: ServiceCandidateRef;
  category?: CategoryRef[];
  resourceCandidate?: ResourceCandidateRef;
  productOfferingTerm?: ProductOfferingTerm[];
  productOfferingPrice?: ProductOfferingPriceRefOrValue[];
  agreement?: AgreementRef[];
  bundledProductOffering?: BundledProductOffering[];
  bundledGroupProductOffering?: BundledGroupProductOffering[];
  attachment?: AttachmentRefOrValue[];
  marketSegment?: MarketSegmentRef[];
  productOfferingRelationship?: ProductOfferingRelationship[];
  productOfferingCharacteristic?: CharacteristicSpecification[];
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];
  policy?: PolicyRef[];
  allowedAction?: AllowedProductAction[];
  lastUpdate?: string;
  lifecycleStatus?: string;
  name?: string;
  productSpecification?: ProductSpecificationRef;
  externalIdentifier?: ExternalIdentifier[];
};

export type ProductOfferingAttributeValueChangeEvent = Event & {
  event?: ProductOfferingAttributeValueChangeEventPayload;
};

/**
 * ProductOfferingAttributeValueChangeEventPayload generic structure
 */
export interface ProductOfferingAttributeValueChangeEventPayload {
  /** Represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOffering;
}

export type ProductOfferingCreateEvent = Event & { event?: ProductOfferingCreateEventPayload };

/**
 * ProductOfferingCreateEventPayload generic structure
 */
export interface ProductOfferingCreateEventPayload {
  /** Represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOffering;
}

export type ProductOfferingDeleteEvent = Event & { event?: ProductOfferingDeleteEventPayload };

/**
 * ProductOfferingDeleteEventPayload generic structure
 */
export interface ProductOfferingDeleteEventPayload {
  /** Represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOffering;
}

export type ProductOfferingPrice = Entity & {
  description?: string;
  version?: string;
  validFor?: TimePeriod;
  unitOfMeasure?: Quantity;
  recurringChargePeriodType?: string;
  recurringChargePeriodLength?: number;
  isBundle?: boolean;
  price?: Money;
  percentage?: number;
  bundledPopRelationship?: BundledProductOfferingPriceRelationship[];
  popRelationship?: ProductOfferingPriceRelationship[];
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUse[];
  productOfferingTerm?: ProductOfferingTerm[];
  place?: PlaceRef[];
  policy?: PolicyRef[];
  pricingLogicAlgorithm?: PricingLogicAlgorithm[];
  tax?: TaxItem[];
  name?: string;
  priceType?: string;
  lastUpdate?: string;
  lifecycleStatus?: string;
  externalIdentifier?: ExternalIdentifier[];
};

export type ProductOfferingPriceAttributeValueChangeEvent = Event & {
  event?: ProductOfferingPriceAttributeValueChangeEventPayload;
};

/**
 * ProductOfferingPriceAttributeValueChangeEventPayload generic structure
 */
export interface ProductOfferingPriceAttributeValueChangeEventPayload {
  /** Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment. */
  productOfferingPrice?: ProductOfferingPrice;
}

export type ProductOfferingPriceCreateEvent = Event & { event?: ProductOfferingPriceCreateEventPayload };

/**
 * ProductOfferingPriceCreateEventPayload generic structure
 */
export interface ProductOfferingPriceCreateEventPayload {
  /** Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment. */
  productOfferingPrice?: ProductOfferingPrice;
}

export type ProductOfferingPriceDeleteEvent = Event & { event?: ProductOfferingPriceDeleteEventPayload };

/**
 * ProductOfferingPriceDeleteEventPayload generic structure
 */
export interface ProductOfferingPriceDeleteEventPayload {
  /** Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment. */
  productOfferingPrice?: ProductOfferingPrice;
}

export type ProductOfferingPriceRef = EntityRef & { version?: string };

/**
 * The polymorphic attributes @type, @schemaLocation & @referredType are related to the ProductOfferingPrice entity and not the ProductOfferingPriceRefOrValue class itself
 */
export type ProductOfferingPriceRefOrValue = ProductOfferingPrice | ProductOfferingPriceRef;

/**
 * The polymorphic attributes @type, @schemaLocation & @referredType are related to the ProductOfferingPrice entity and not the ProductOfferingPriceRefOrValue class itself
 */
export type ProductOfferingPriceRefOrValueFVO = ProductOfferingPriceFVO | ProductOfferingPriceRefFVO;

/**
 * The polymorphic attributes @type, @schemaLocation & @referredType are related to the ProductOfferingPrice entity and not the ProductOfferingPriceRefOrValue class itself
 */
export type ProductOfferingPriceRefOrValueMVO = ProductOfferingPriceMVO | ProductOfferingPriceRefMVO;

export type ProductOfferingPriceRefFVO = EntityRefFVO & { version?: string };

export type ProductOfferingPriceRefMVO = EntityRef & { version?: string };

export type ProductOfferingPriceRelationship = EntityRef & {
  role?: string;
  relationshipType?: string;
  version?: string;
};

export type ProductOfferingPriceRelationshipFVO = EntityRefFVO & {
  role?: string;
  relationshipType: string;
  version?: string;
};

export type ProductOfferingPriceRelationshipMVO = EntityRef & {
  role?: string;
  relationshipType?: string;
  version?: string;
};

export type ProductOfferingPriceStateChangeEvent = Event & { event?: ProductOfferingPriceStateChangeEventPayload };

/**
 * ProductOfferingPriceStateChangeEventPayload generic structure
 */
export interface ProductOfferingPriceStateChangeEventPayload {
  /** Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (a Product Offering Price that reflects an alteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment. */
  productOfferingPrice?: ProductOfferingPrice;
}

export type ProductOfferingPriceFVO = EntityFVO & {
  description?: string;
  version?: string;
  validFor?: TimePeriod;
  unitOfMeasure?: Quantity;
  recurringChargePeriodType?: string;
  recurringChargePeriodLength?: number;
  isBundle?: boolean;
  price?: Money;
  percentage?: number;
  bundledPopRelationship?: BundledProductOfferingPriceRelationshipFVO[];
  popRelationship?: ProductOfferingPriceRelationshipFVO[];
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUseFVO[];
  productOfferingTerm?: ProductOfferingTermFVO[];
  place?: PlaceRefFVO[];
  policy?: PolicyRefFVO[];
  pricingLogicAlgorithm?: PricingLogicAlgorithmFVO[];
  tax?: TaxItemFVO[];
  name: string;
  priceType: string;
  lastUpdate: string;
  lifecycleStatus: string;
  externalIdentifier?: ExternalIdentifierFVO[];
};

export type ProductOfferingPriceMVO = EntityMVO & {
  description?: string;
  version?: string;
  validFor?: TimePeriod;
  unitOfMeasure?: Quantity;
  recurringChargePeriodType?: string;
  recurringChargePeriodLength?: number;
  isBundle?: boolean;
  price?: Money;
  percentage?: number;
  bundledPopRelationship?: BundledProductOfferingPriceRelationshipMVO[];
  popRelationship?: ProductOfferingPriceRelationshipMVO[];
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUseMVO[];
  productOfferingTerm?: ProductOfferingTermMVO[];
  place?: PlaceRefMVO[];
  policy?: PolicyRefMVO[];
  pricingLogicAlgorithm?: PricingLogicAlgorithmMVO[];
  tax?: TaxItemMVO[];
  name?: string;
  priceType?: string;
  lifecycleStatus?: string;
  externalIdentifier?: ExternalIdentifierMVO[];
};

export type ProductOfferingRef = EntityRef & { version?: string };

export type ProductOfferingRefFVO = EntityRefFVO & { version?: string };

export type ProductOfferingRefMVO = EntityRef & { version?: string };

export type ProductOfferingRelationship = EntityRef & {
  role?: string;
  name?: string;
  validFor?: TimePeriod;
  relationshipType?: string;
  version?: string;
};

export type ProductOfferingRelationshipFVO = EntityRefFVO & {
  role?: string;
  name?: string;
  validFor?: TimePeriod;
  relationshipType: string;
  version?: string;
};

export type ProductOfferingRelationshipMVO = EntityRef & {
  role?: string;
  name?: string;
  validFor?: TimePeriod;
  relationshipType: string;
  version?: string;
};

export type ProductOfferingStateChangeEvent = Event & { event?: ProductOfferingStateChangeEventPayload };

/**
 * ProductOfferingStateChangeEventPayload generic structure
 */
export interface ProductOfferingStateChangeEventPayload {
  /** Represents entities that are orderable from the provider of the catalog, this resource includes pricing information. */
  productOffering?: ProductOffering;
}

export type ProductOfferingTerm = Extensible & {
  description?: string;
  duration?: Duration;
  name?: string;
  validFor?: TimePeriod;
};

export type ProductOfferingTermFVO = ExtensibleFVO & {
  description?: string;
  duration?: Duration;
  name: string;
  validFor?: TimePeriod;
};

export type ProductOfferingTermMVO = Extensible & {
  description?: string;
  duration?: Duration;
  name?: string;
  validFor?: TimePeriod;
};

export type ProductOfferingFVO = EntityFVO & {
  description?: string;
  isBundle?: boolean;
  isSellable?: boolean;
  statusReason?: string;
  validFor?: TimePeriod;
  version?: string;
  place?: PlaceRefFVO[];
  serviceLevelAgreement?: SLARefFVO;
  channel?: ChannelRefFVO[];
  serviceCandidate?: ServiceCandidateRefFVO;
  category?: CategoryRefFVO[];
  resourceCandidate?: ResourceCandidateRefFVO;
  productOfferingTerm?: ProductOfferingTermFVO[];
  productOfferingPrice?: ProductOfferingPriceRefOrValueFVO[];
  agreement?: AgreementRefFVO[];
  bundledProductOffering?: BundledProductOfferingFVO[];
  bundledGroupProductOffering?: BundledGroupProductOfferingFVO[];
  attachment?: AttachmentRefOrValueFVO[];
  marketSegment?: MarketSegmentRefFVO[];
  productOfferingRelationship?: ProductOfferingRelationshipFVO[];
  productOfferingCharacteristic?: CharacteristicSpecificationFVO[];
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUseFVO[];
  policy?: PolicyRefFVO[];
  allowedAction?: AllowedProductActionFVO[];
  lastUpdate: string;
  lifecycleStatus: string;
  name: string;
  productSpecification?: ProductSpecificationRefFVO;
  externalIdentifier?: ExternalIdentifierFVO[];
};

export type ProductOfferingMVO = EntityMVO & {
  description?: string;
  isBundle?: boolean;
  isSellable?: boolean;
  statusReason?: string;
  validFor?: TimePeriod;
  version?: string;
  place?: PlaceRefMVO[];
  serviceLevelAgreement?: SLARefMVO;
  channel?: ChannelRefMVO[];
  serviceCandidate?: ServiceCandidateRefMVO;
  category?: CategoryRefMVO[];
  resourceCandidate?: ResourceCandidateRefMVO;
  productOfferingTerm?: ProductOfferingTermMVO[];
  productOfferingPrice?: ProductOfferingPriceRefOrValueMVO[];
  agreement?: AgreementRefMVO[];
  bundledProductOffering?: BundledProductOfferingMVO[];
  bundledGroupProductOffering?: BundledGroupProductOfferingMVO[];
  attachment?: AttachmentRefOrValueMVO[];
  marketSegment?: MarketSegmentRefMVO[];
  productOfferingRelationship?: ProductOfferingRelationshipMVO[];
  productOfferingCharacteristic?: CharacteristicSpecificationMVO[];
  prodSpecCharValueUse?: ProductSpecificationCharacteristicValueUseMVO[];
  policy?: PolicyRefMVO[];
  allowedAction?: AllowedProductActionMVO[];
  lifecycleStatus?: string;
  name?: string;
  productSpecification?: ProductSpecificationRefMVO;
  externalIdentifier?: ExternalIdentifierMVO[];
};

export type ProductSpecification = Entity & {
  brand?: string;
  description?: string;
  isBundle?: boolean;
  productNumber?: string;
  category?: CategoryRef[];
  validFor?: TimePeriod;
  version?: string;
  relatedParty?: RelatedPartyRefOrPartyRoleRef[];
  productSpecCharacteristic?: CharacteristicSpecification[];
  serviceSpecification?: ServiceSpecificationRef[];
  bundledProductSpecification?: BundledProductSpecification[];
  productSpecificationRelationship?: ProductSpecificationRelationship[];
  resourceSpecification?: ResourceSpecificationRef[];
  attachment?: AttachmentRefOrValue[];
  policy?: PolicyRef[];
  targetProductSchema?: TargetProductSchema;
  intentSpecification?: IntentSpecificationRef;
  lastUpdate?: string;
  lifecycleStatus?: string;
  name?: string;
  externalIdentifier?: ExternalIdentifier[];
};

export type ProductSpecificationAttributeValueChangeEvent = Event & {
  event?: ProductSpecificationAttributeValueChangeEventPayload;
};

/**
 * ProductSpecificationAttributeValueChangeEventPayload generic structure
 */
export interface ProductSpecificationAttributeValueChangeEventPayload {
  /** Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecification;
}

export type ProductSpecificationCharacteristicValueUse = Extensible & {
  name?: string;
  id?: string;
  description?: string;
  valueType?: string;
  minCardinality?: number;
  maxCardinality?: number;
  validFor?: TimePeriod;
  productSpecCharacteristicValue?: CharacteristicValueSpecification[];
  productSpecification?: ProductSpecificationRef;
};

export type ProductSpecificationCharacteristicValueUseFVO = ExtensibleFVO & {
  name?: string;
  id?: string;
  description?: string;
  valueType?: string;
  minCardinality?: number;
  maxCardinality?: number;
  validFor?: TimePeriod;
  productSpecCharacteristicValue?: CharacteristicValueSpecificationFVO[];
  productSpecification?: ProductSpecificationRefFVO;
};

export type ProductSpecificationCharacteristicValueUseMVO = Extensible & {
  name?: string;
  id?: string;
  description?: string;
  valueType?: string;
  minCardinality?: number;
  maxCardinality?: number;
  validFor?: TimePeriod;
  productSpecCharacteristicValue?: CharacteristicValueSpecificationMVO[];
  productSpecification?: ProductSpecificationRefMVO;
};

export type ProductSpecificationCreateEvent = Event & { event?: ProductSpecificationCreateEventPayload };

/**
 * ProductSpecificationCreateEventPayload generic structure
 */
export interface ProductSpecificationCreateEventPayload {
  /** Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecification;
}

export type ProductSpecificationDeleteEvent = Event & { event?: ProductSpecificationDeleteEventPayload };

/**
 * ProductSpecificationDeleteEventPayload generic structure
 */
export interface ProductSpecificationDeleteEventPayload {
  /** Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecification;
}

export type ProductSpecificationRef = EntityRef & { version?: string; targetProductSchema?: TargetProductSchema };

export type ProductSpecificationRefFVO = EntityRefFVO & {
  version?: string;
  targetProductSchema?: TargetProductSchemaFVO;
};

export type ProductSpecificationRefMVO = EntityRef & { version?: string; targetProductSchema?: TargetProductSchemaMVO };

export type ProductSpecificationRelationship = EntityRef & {
  characteristic?: CharacteristicSpecification[];
  validFor?: TimePeriod;
  relationshipType?: string;
  version?: string;
};

export type ProductSpecificationRelationshipFVO = EntityRefFVO & {
  characteristic?: CharacteristicSpecificationFVO[];
  validFor?: TimePeriod;
  relationshipType: string;
  version?: string;
};

export type ProductSpecificationRelationshipMVO = EntityRef & {
  characteristic?: CharacteristicSpecificationMVO[];
  validFor?: TimePeriod;
  relationshipType: string;
  version?: string;
};

export type ProductSpecificationStateChangeEvent = Event & { event?: ProductSpecificationStateChangeEventPayload };

/**
 * ProductSpecificationStateChangeEventPayload generic structure
 */
export interface ProductSpecificationStateChangeEventPayload {
  /** Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. */
  productSpecification?: ProductSpecification;
}

export type ProductSpecificationFVO = EntityFVO & {
  brand?: string;
  description?: string;
  isBundle?: boolean;
  productNumber?: string;
  category?: CategoryRefFVO[];
  validFor?: TimePeriod;
  version?: string;
  relatedParty?: RelatedPartyRefOrPartyRoleRefFVO[];
  productSpecCharacteristic?: CharacteristicSpecificationFVO[];
  serviceSpecification?: ServiceSpecificationRefFVO[];
  bundledProductSpecification?: BundledProductSpecificationFVO[];
  productSpecificationRelationship?: ProductSpecificationRelationshipFVO[];
  resourceSpecification?: ResourceSpecificationRefFVO[];
  attachment?: AttachmentRefOrValueFVO[];
  policy?: PolicyRefFVO[];
  targetProductSchema?: TargetProductSchemaFVO;
  intentSpecification?: IntentSpecificationRefFVO;
  lastUpdate: string;
  lifecycleStatus: string;
  name: string;
  externalIdentifier?: ExternalIdentifierFVO[];
};

export type ProductSpecificationMVO = EntityMVO & {
  brand?: string;
  description?: string;
  isBundle?: boolean;
  productNumber?: string;
  category?: CategoryRefMVO[];
  validFor?: TimePeriod;
  version?: string;
  relatedParty?: RelatedPartyRefOrPartyRoleRefMVO[];
  productSpecCharacteristic?: CharacteristicSpecificationMVO[];
  serviceSpecification?: ServiceSpecificationRefMVO[];
  bundledProductSpecification?: BundledProductSpecificationMVO[];
  productSpecificationRelationship?: ProductSpecificationRelationshipMVO[];
  resourceSpecification?: ResourceSpecificationRefMVO[];
  attachment?: AttachmentRefOrValueMVO[];
  policy?: PolicyRefMVO[];
  targetProductSchema?: TargetProductSchemaMVO;
  intentSpecification?: IntentSpecificationRefMVO;
  lifecycleStatus?: string;
  name?: string;
  externalIdentifier?: ExternalIdentifierMVO[];
};

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

export type RelatedPartyRefOrPartyRoleRef = Extensible & { role?: string; partyOrPartyRole?: PartyRefOrPartyRoleRef };

export type RelatedPartyRefOrPartyRoleRefFVO = ExtensibleFVO & {
  role: string;
  partyOrPartyRole?: PartyRefOrPartyRoleRefFVO;
};

export type RelatedPartyRefOrPartyRoleRefMVO = Extensible & {
  role?: string;
  partyOrPartyRole?: PartyRefOrPartyRoleRefMVO;
};

export type ResourceCandidateRef = EntityRef & { version?: string };

export type ResourceCandidateRefFVO = EntityRefFVO & { version?: string };

export type ResourceCandidateRefMVO = EntityRef & { version?: string };

export type ResourceSpecificationRef = EntityRef & { version?: string };

export type ResourceSpecificationRefFVO = EntityRefFVO & { version?: string };

export type ResourceSpecificationRefMVO = EntityRef & { version?: string };

/**
 * ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.
 */
export type SLARef = Extensible & EntityRef & Entity;

/**
 * ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.
 */
export type SLARefFVO = ExtensibleFVO & EntityRefFVO & EntityFVO;

/**
 * ServiceLevelAgreement reference: A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.
 */
export type SLARefMVO = Extensible & EntityRef & EntityMVO;

export type ServiceCandidateRef = Extensible & EntityRef & { version?: string };

export type ServiceCandidateRefFVO = ExtensibleFVO & EntityRefFVO & { version?: string };

export type ServiceCandidateRefMVO = Extensible & EntityRef & { version?: string };

export type ServiceSpecificationRef = Extensible & EntityRef & { version?: string };

export type ServiceSpecificationRefFVO = ExtensibleFVO & EntityRefFVO & { version?: string };

export type ServiceSpecificationRefMVO = Extensible & EntityRef & { version?: string };

export type StringArrayCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: string[] };

export type StringArrayCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: string[] };

export type StringArrayCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: string[] };

export type StringCharacteristicValueSpecification = CharacteristicValueSpecification & { value?: string };

export type StringCharacteristicValueSpecificationFVO = CharacteristicValueSpecificationFVO & { value?: string };

export type StringCharacteristicValueSpecificationMVO = CharacteristicValueSpecificationMVO & { value?: string };

/**
 * The reference object to the schema and type of target product which is described by product specification
 */
export interface TargetProductSchema {
  /** Class type of the target product */
  "@type"?: string;

  /**
   * This field provides a link to the schema describing the target product
   * @format uri
   */
  "@schemaLocation"?: string;
}

/**
 * The reference object to the schema and type of target product which is described by product specification
 */
export interface TargetProductSchemaFVO {
  /** Class type of the target product */
  "@type": string;

  /**
   * This field provides a link to the schema describing the target product
   * @format uri
   */
  "@schemaLocation": string;
}

/**
 * The reference object to the schema and type of target product which is described by product specification
 */
export interface TargetProductSchemaMVO {
  /** Class type of the target product */
  "@type"?: string;

  /**
   * This field provides a link to the schema describing the target product
   * @format uri
   */
  "@schemaLocation"?: string;
}

export type TaxItem = Extensible & { taxAmount?: Money; taxCategory?: string; taxRate?: number };

export type TaxItemFVO = ExtensibleFVO & { taxAmount?: Money; taxCategory?: string; taxRate?: number };

export type TaxItemMVO = Extensible & { taxAmount?: Money; taxCategory?: string; taxRate?: number };

/**
 * A period of time, either as a deadline (endDateTime only) a startDateTime only, or both
 */
export interface TimePeriod {
  /**
   * Start of the time period, using IETC-RFC-3339 format
   * @format date-time
   * @example 1985-04-12T23:20:50.52Z
   */
  startDateTime?: string;

  /**
   * End of the time period, using IETC-RFC-3339 format
   * @format date-time
   * @example 1985-04-12T23:20:50.52Z
   */
  endDateTime?: string;
}

/**
 * Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)
 */
export type Error = Extensible & {
  code: string;
  reason: string;
  message?: string;
  status?: string;
  referenceError?: string;
};

/**
 * Sets the communication endpoint address the service instance must use to deliver notification information
 */
export type HubFVO = Extensible & { callback?: string; query?: string };

/**
 * Sets the communication endpoint address the service instance must use to deliver notification information
 */
export type Hub = Entity & { id?: string; callback: string; query?: string };

/**
 * A JSONPatch document as defined by RFC 6902
 */
export interface JsonPatch {
  /** The operation to be performed */
  op: "add" | "remove" | "replace" | "move" | "copy" | "test";

  /** A JSON-Pointer */
  path: string;

  /** The value to be used within the operations. */
  value?: any;

  /** A string containing a JSON Pointer value. */
  from?: string;
}

/**
 * JSONPatch Operations document as defined by RFC 6902
 */
export type JsonPatchOperations = JsonPatch[];

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
  public baseUrl: string = "https://serverRoot/productCatalogManagement/v5/";
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
 * @version 5.0.0
 * @baseUrl https://serverRoot/productCatalogManagement/v5/
 * Product Catalog API is one of Catalog Management API Family. Product Catalog API goal is to provide a catalog of products.
 * ### Operations
 * Product Catalog API performs the following operations on the resources :
 * - Retrieve an entity or a collection of entities depending on filter criteria
 * - Partial update of an entity (including updating rules)
 * - Create an entity (including default values and creation rules)
 * - Delete an entity
 * - Manage notification of events
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  category = {
    /**
     * @description List or find Category objects
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
    createCategory: (data: CategoryFVO, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<Category, Error>({
        path: `/category`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a Category entity. Attribute selection enabled for all first level attributes.
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
    patchCategory: (id: string, data: CategoryMVO, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<Category, Error>({
        path: `/category/${id}`,
        method: "PATCH",
        query: query,
        body: data,
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
      this.request<any, Error>({
        path: `/category/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  exportJob = {
    /**
     * @description List or find ExportJob objects
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
    createExportJob: (data: ExportJobFVO, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ExportJob, Error>({
        path: `/exportJob`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a ExportJob entity. Attribute selection enabled for all first level attributes.
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
      this.request<any, Error>({
        path: `/exportJob/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  hub = {
    /**
     * @description Sets the communication endpoint to receive Events.
     *
     * @tags events subscription
     * @name CreateHub
     * @summary Create a subscription (hub) to receive Events
     * @request POST:/hub
     */
    createHub: (data: HubFVO, params: RequestParams = {}) =>
      this.request<Hub, Error>({
        path: `/hub`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags events subscription
     * @name HubDelete
     * @summary Remove a subscription (hub) to receive Events
     * @request DELETE:/hub/{id}
     */
    hubDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/hub/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  importJob = {
    /**
     * @description List or find ImportJob objects
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
    createImportJob: (data: ImportJobFVO, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ImportJob, Error>({
        path: `/importJob`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a ImportJob entity. Attribute selection enabled for all first level attributes.
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
      this.request<any, Error>({
        path: `/importJob/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  listener = {
    /**
     * @description Example of a client listener for receiving the notification CategoryAttributeValueChangeEvent
     *
     * @tags notification listener
     * @name CategoryAttributeValueChangeEvent
     * @summary Client listener for entity CategoryAttributeValueChangeEvent
     * @request POST:/listener/categoryAttributeValueChangeEvent
     */
    categoryAttributeValueChangeEvent: (data: CategoryAttributeValueChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/categoryAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryCreateEvent
     *
     * @tags notification listener
     * @name CategoryCreateEvent
     * @summary Client listener for entity CategoryCreateEvent
     * @request POST:/listener/categoryCreateEvent
     */
    categoryCreateEvent: (data: CategoryCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/categoryCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryDeleteEvent
     *
     * @tags notification listener
     * @name CategoryDeleteEvent
     * @summary Client listener for entity CategoryDeleteEvent
     * @request POST:/listener/categoryDeleteEvent
     */
    categoryDeleteEvent: (data: CategoryDeleteEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/categoryDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification CategoryStateChangeEvent
     *
     * @tags notification listener
     * @name CategoryStateChangeEvent
     * @summary Client listener for entity CategoryStateChangeEvent
     * @request POST:/listener/categoryStateChangeEvent
     */
    categoryStateChangeEvent: (data: CategoryStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/categoryStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ExportJobCreateEvent
     *
     * @tags notification listener
     * @name ExportJobCreateEvent
     * @summary Client listener for entity ExportJobCreateEvent
     * @request POST:/listener/exportJobCreateEvent
     */
    exportJobCreateEvent: (data: ExportJobCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/exportJobCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ExportJobStateChangeEvent
     *
     * @tags notification listener
     * @name ExportJobStateChangeEvent
     * @summary Client listener for entity ExportJobStateChangeEvent
     * @request POST:/listener/exportJobStateChangeEvent
     */
    exportJobStateChangeEvent: (data: ExportJobStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/exportJobStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ImportJobCreateEvent
     *
     * @tags notification listener
     * @name ImportJobCreateEvent
     * @summary Client listener for entity ImportJobCreateEvent
     * @request POST:/listener/importJobCreateEvent
     */
    importJobCreateEvent: (data: ImportJobCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/importJobCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ImportJobStateChangeEvent
     *
     * @tags notification listener
     * @name ImportJobStateChangeEvent
     * @summary Client listener for entity ImportJobStateChangeEvent
     * @request POST:/listener/importJobStateChangeEvent
     */
    importJobStateChangeEvent: (data: ImportJobStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/importJobStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductCatalogAttributeValueChangeEvent
     *
     * @tags notification listener
     * @name ProductCatalogAttributeValueChangeEvent
     * @summary Client listener for entity ProductCatalogAttributeValueChangeEvent
     * @request POST:/listener/productCatalogAttributeValueChangeEvent
     */
    productCatalogAttributeValueChangeEvent: (
      data: ProductCatalogAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/listener/productCatalogAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductCatalogCreateEvent
     *
     * @tags notification listener
     * @name ProductCatalogCreateEvent
     * @summary Client listener for entity ProductCatalogCreateEvent
     * @request POST:/listener/productCatalogCreateEvent
     */
    productCatalogCreateEvent: (data: ProductCatalogCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productCatalogCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductCatalogDeleteEvent
     *
     * @tags notification listener
     * @name ProductCatalogDeleteEvent
     * @summary Client listener for entity ProductCatalogDeleteEvent
     * @request POST:/listener/productCatalogDeleteEvent
     */
    productCatalogDeleteEvent: (data: ProductCatalogDeleteEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productCatalogDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductCatalogStateChangeEvent
     *
     * @tags notification listener
     * @name ProductCatalogStateChangeEvent
     * @summary Client listener for entity ProductCatalogStateChangeEvent
     * @request POST:/listener/productCatalogStateChangeEvent
     */
    productCatalogStateChangeEvent: (data: ProductCatalogStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productCatalogStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
     *
     * @tags notification listener
     * @name ProductOfferingAttributeValueChangeEvent
     * @summary Client listener for entity ProductOfferingAttributeValueChangeEvent
     * @request POST:/listener/productOfferingAttributeValueChangeEvent
     */
    productOfferingAttributeValueChangeEvent: (
      data: ProductOfferingAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/listener/productOfferingAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingCreateEvent
     *
     * @tags notification listener
     * @name ProductOfferingCreateEvent
     * @summary Client listener for entity ProductOfferingCreateEvent
     * @request POST:/listener/productOfferingCreateEvent
     */
    productOfferingCreateEvent: (data: ProductOfferingCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productOfferingCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingDeleteEvent
     *
     * @tags notification listener
     * @name ProductOfferingDeleteEvent
     * @summary Client listener for entity ProductOfferingDeleteEvent
     * @request POST:/listener/productOfferingDeleteEvent
     */
    productOfferingDeleteEvent: (data: ProductOfferingDeleteEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productOfferingDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
     *
     * @tags notification listener
     * @name ProductOfferingPriceAttributeValueChangeEvent
     * @summary Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
     * @request POST:/listener/productOfferingPriceAttributeValueChangeEvent
     */
    productOfferingPriceAttributeValueChangeEvent: (
      data: ProductOfferingPriceAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/listener/productOfferingPriceAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
     *
     * @tags notification listener
     * @name ProductOfferingPriceCreateEvent
     * @summary Client listener for entity ProductOfferingPriceCreateEvent
     * @request POST:/listener/productOfferingPriceCreateEvent
     */
    productOfferingPriceCreateEvent: (data: ProductOfferingPriceCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productOfferingPriceCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
     *
     * @tags notification listener
     * @name ProductOfferingPriceDeleteEvent
     * @summary Client listener for entity ProductOfferingPriceDeleteEvent
     * @request POST:/listener/productOfferingPriceDeleteEvent
     */
    productOfferingPriceDeleteEvent: (data: ProductOfferingPriceDeleteEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productOfferingPriceDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
     *
     * @tags notification listener
     * @name ProductOfferingPriceStateChangeEvent
     * @summary Client listener for entity ProductOfferingPriceStateChangeEvent
     * @request POST:/listener/productOfferingPriceStateChangeEvent
     */
    productOfferingPriceStateChangeEvent: (data: ProductOfferingPriceStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productOfferingPriceStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
     *
     * @tags notification listener
     * @name ProductOfferingStateChangeEvent
     * @summary Client listener for entity ProductOfferingStateChangeEvent
     * @request POST:/listener/productOfferingStateChangeEvent
     */
    productOfferingStateChangeEvent: (data: ProductOfferingStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productOfferingStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationAttributeValueChangeEvent
     *
     * @tags notification listener
     * @name ProductSpecificationAttributeValueChangeEvent
     * @summary Client listener for entity ProductSpecificationAttributeValueChangeEvent
     * @request POST:/listener/productSpecificationAttributeValueChangeEvent
     */
    productSpecificationAttributeValueChangeEvent: (
      data: ProductSpecificationAttributeValueChangeEvent,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/listener/productSpecificationAttributeValueChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationCreateEvent
     *
     * @tags notification listener
     * @name ProductSpecificationCreateEvent
     * @summary Client listener for entity ProductSpecificationCreateEvent
     * @request POST:/listener/productSpecificationCreateEvent
     */
    productSpecificationCreateEvent: (data: ProductSpecificationCreateEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productSpecificationCreateEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
     *
     * @tags notification listener
     * @name ProductSpecificationDeleteEvent
     * @summary Client listener for entity ProductSpecificationDeleteEvent
     * @request POST:/listener/productSpecificationDeleteEvent
     */
    productSpecificationDeleteEvent: (data: ProductSpecificationDeleteEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productSpecificationDeleteEvent`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Example of a client listener for receiving the notification ProductSpecificationStateChangeEvent
     *
     * @tags notification listener
     * @name ProductSpecificationStateChangeEvent
     * @summary Client listener for entity ProductSpecificationStateChangeEvent
     * @request POST:/listener/productSpecificationStateChangeEvent
     */
    productSpecificationStateChangeEvent: (data: ProductSpecificationStateChangeEvent, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/listener/productSpecificationStateChangeEvent`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  productCatalog = {
    /**
     * @description List or find ProductCatalog objects
     *
     * @tags productCatalog
     * @name ListProductCatalog
     * @summary List or find ProductCatalog objects
     * @request GET:/productCatalog
     */
    listProductCatalog: (query?: { fields?: string; offset?: number; limit?: number }, params: RequestParams = {}) =>
      this.request<ProductCatalog[], Error>({
        path: `/productCatalog`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation creates a ProductCatalog entity.
     *
     * @tags productCatalog
     * @name CreateProductCatalog
     * @summary Creates a ProductCatalog
     * @request POST:/productCatalog
     */
    createProductCatalog: (data: ProductCatalogFVO, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ProductCatalog, Error>({
        path: `/productCatalog`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductCatalog entity. Attribute selection enabled for all first level attributes.
     *
     * @tags productCatalog
     * @name RetrieveProductCatalog
     * @summary Retrieves a ProductCatalog by ID
     * @request GET:/productCatalog/{id}
     */
    retrieveProductCatalog: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ProductCatalog, Error>({
        path: `/productCatalog/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description This operation updates partially a ProductCatalog entity.
     *
     * @tags productCatalog
     * @name PatchProductCatalog
     * @summary Updates partially a ProductCatalog
     * @request PATCH:/productCatalog/{id}
     */
    patchProductCatalog: (
      id: string,
      data: ProductCatalogMVO,
      query?: { fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProductCatalog, Error>({
        path: `/productCatalog/${id}`,
        method: "PATCH",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation deletes a ProductCatalog entity.
     *
     * @tags productCatalog
     * @name DeleteProductCatalog
     * @summary Deletes a ProductCatalog
     * @request DELETE:/productCatalog/{id}
     */
    deleteProductCatalog: (id: string, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/productCatalog/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  productOffering = {
    /**
     * @description List or find ProductOffering objects
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
    createProductOffering: (data: ProductOfferingFVO, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<ProductOffering, Error>({
        path: `/productOffering`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductOffering entity. Attribute selection enabled for all first level attributes.
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
    patchProductOffering: (
      id: string,
      data: ProductOfferingMVO,
      query?: { fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProductOffering, Error>({
        path: `/productOffering/${id}`,
        method: "PATCH",
        query: query,
        body: data,
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
      this.request<any, Error>({
        path: `/productOffering/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  productOfferingPrice = {
    /**
     * @description List or find ProductOfferingPrice objects
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
    createProductOfferingPrice: (
      data: ProductOfferingPriceFVO,
      query?: { fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProductOfferingPrice, Error>({
        path: `/productOfferingPrice`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductOfferingPrice entity. Attribute selection enabled for all first level attributes.
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
      data: ProductOfferingPriceMVO,
      query?: { fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProductOfferingPrice, Error>({
        path: `/productOfferingPrice/${id}`,
        method: "PATCH",
        query: query,
        body: data,
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
      this.request<any, Error>({
        path: `/productOfferingPrice/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  productSpecification = {
    /**
     * @description List or find ProductSpecification objects
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
    createProductSpecification: (
      data: ProductSpecificationFVO,
      query?: { fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProductSpecification, Error>({
        path: `/productSpecification`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description This operation retrieves a ProductSpecification entity. Attribute selection enabled for all first level attributes.
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
      data: ProductSpecificationMVO,
      query?: { fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<ProductSpecification, Error>({
        path: `/productSpecification/${id}`,
        method: "PATCH",
        query: query,
        body: data,
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
      this.request<any, Error>({
        path: `/productSpecification/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
