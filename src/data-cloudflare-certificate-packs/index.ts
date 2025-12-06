/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareCertificatePacksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs#max_items DataCloudflareCertificatePacks#max_items}
  */
  readonly maxItems?: number;
  /**
  * Include Certificate Packs of all statuses, not just active ones.
  * Available values: "all".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs#status DataCloudflareCertificatePacks#status}
  */
  readonly status?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs#zone_id DataCloudflareCertificatePacks#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareCertificatePacksResultCertificatesGeoRestrictions {
}

export function dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToTerraform(struct?: DataCloudflareCertificatePacksResultCertificatesGeoRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToHclTerraform(struct?: DataCloudflareCertificatePacksResultCertificatesGeoRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareCertificatePacksResultCertificatesGeoRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCertificatePacksResultCertificatesGeoRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }
}
export interface DataCloudflareCertificatePacksResultCertificates {
}

export function dataCloudflareCertificatePacksResultCertificatesToTerraform(struct?: DataCloudflareCertificatePacksResultCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCertificatePacksResultCertificatesToHclTerraform(struct?: DataCloudflareCertificatePacksResultCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCertificatePacksResultCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCertificatePacksResultCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCertificatePacksResultCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_method - computed: true, optional: false, required: false
  public get bundleMethod() {
    return this.getStringAttribute('bundle_method');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // geo_restrictions - computed: true, optional: false, required: false
  private _geoRestrictions = new DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference(this, "geo_restrictions");
  public get geoRestrictions() {
    return this._geoRestrictions;
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataCloudflareCertificatePacksResultCertificatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareCertificatePacksResultCertificatesOutputReference {
    return new DataCloudflareCertificatePacksResultCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareCertificatePacksResultValidationErrors {
}

export function dataCloudflareCertificatePacksResultValidationErrorsToTerraform(struct?: DataCloudflareCertificatePacksResultValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCertificatePacksResultValidationErrorsToHclTerraform(struct?: DataCloudflareCertificatePacksResultValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCertificatePacksResultValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCertificatePacksResultValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCertificatePacksResultValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataCloudflareCertificatePacksResultValidationErrorsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareCertificatePacksResultValidationErrorsOutputReference {
    return new DataCloudflareCertificatePacksResultValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareCertificatePacksResultValidationRecords {
}

export function dataCloudflareCertificatePacksResultValidationRecordsToTerraform(struct?: DataCloudflareCertificatePacksResultValidationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCertificatePacksResultValidationRecordsToHclTerraform(struct?: DataCloudflareCertificatePacksResultValidationRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCertificatePacksResultValidationRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCertificatePacksResultValidationRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCertificatePacksResultValidationRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // txt_name - computed: true, optional: false, required: false
  public get txtName() {
    return this.getStringAttribute('txt_name');
  }

  // txt_value - computed: true, optional: false, required: false
  public get txtValue() {
    return this.getStringAttribute('txt_value');
  }
}

export class DataCloudflareCertificatePacksResultValidationRecordsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareCertificatePacksResultValidationRecordsOutputReference {
    return new DataCloudflareCertificatePacksResultValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareCertificatePacksResult {
}

export function dataCloudflareCertificatePacksResultToTerraform(struct?: DataCloudflareCertificatePacksResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareCertificatePacksResultToHclTerraform(struct?: DataCloudflareCertificatePacksResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareCertificatePacksResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareCertificatePacksResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareCertificatePacksResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority - computed: true, optional: false, required: false
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataCloudflareCertificatePacksResultCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // cloudflare_branding - computed: true, optional: false, required: false
  public get cloudflareBranding() {
    return this.getBooleanAttribute('cloudflare_branding');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_certificate - computed: true, optional: false, required: false
  public get primaryCertificate() {
    return this.getStringAttribute('primary_certificate');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validation_errors - computed: true, optional: false, required: false
  private _validationErrors = new DataCloudflareCertificatePacksResultValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }

  // validation_method - computed: true, optional: false, required: false
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }

  // validation_records - computed: true, optional: false, required: false
  private _validationRecords = new DataCloudflareCertificatePacksResultValidationRecordsList(this, "validation_records", false);
  public get validationRecords() {
    return this._validationRecords;
  }

  // validity_days - computed: true, optional: false, required: false
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
  }
}

export class DataCloudflareCertificatePacksResultList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareCertificatePacksResultOutputReference {
    return new DataCloudflareCertificatePacksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs cloudflare_certificate_packs}
*/
export class DataCloudflareCertificatePacks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_certificate_packs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareCertificatePacks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareCertificatePacks to import
  * @param importFromId The id of the existing DataCloudflareCertificatePacks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareCertificatePacks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_packs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_packs cloudflare_certificate_packs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareCertificatePacksConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareCertificatePacksConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_certificate_packs',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maxItems = config.maxItems;
    this._status = config.status;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareCertificatePacksResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_items: cdktf.numberToTerraform(this._maxItems),
      status: cdktf.stringToTerraform(this._status),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
