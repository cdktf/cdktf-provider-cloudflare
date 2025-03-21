/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustAccessIdentityProvidersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers#account_id DataCloudflareZeroTrustAccessIdentityProviders#account_id}
  */
  readonly accountId?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers#max_items DataCloudflareZeroTrustAccessIdentityProviders#max_items}
  */
  readonly maxItems?: number;
  /**
  * Indicates to Access to only retrieve identity providers that have the System for Cross-Domain Identity Management (SCIM) enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers#scim_enabled DataCloudflareZeroTrustAccessIdentityProviders#scim_enabled}
  */
  readonly scimEnabled?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers#zone_id DataCloudflareZeroTrustAccessIdentityProviders#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes {
}

export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
}

export class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference {
    return new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResultConfig {
}

export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessIdentityProvidersResultConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apps_domain - computed: true, optional: false, required: false
  public get appsDomain() {
    return this.getStringAttribute('apps_domain');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getListAttribute('attributes');
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // authorization_server_id - computed: true, optional: false, required: false
  public get authorizationServerId() {
    return this.getStringAttribute('authorization_server_id');
  }

  // centrify_account - computed: true, optional: false, required: false
  public get centrifyAccount() {
    return this.getStringAttribute('centrify_account');
  }

  // centrify_app_id - computed: true, optional: false, required: false
  public get centrifyAppId() {
    return this.getStringAttribute('centrify_app_id');
  }

  // certs_url - computed: true, optional: false, required: false
  public get certsUrl() {
    return this.getStringAttribute('certs_url');
  }

  // claims - computed: true, optional: false, required: false
  public get claims() {
    return this.getListAttribute('claims');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // conditional_access_enabled - computed: true, optional: false, required: false
  public get conditionalAccessEnabled() {
    return this.getBooleanAttribute('conditional_access_enabled');
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // email_attribute_name - computed: true, optional: false, required: false
  public get emailAttributeName() {
    return this.getStringAttribute('email_attribute_name');
  }

  // email_claim_name - computed: true, optional: false, required: false
  public get emailClaimName() {
    return this.getStringAttribute('email_claim_name');
  }

  // header_attributes - computed: true, optional: false, required: false
  private _headerAttributes = new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigHeaderAttributesList(this, "header_attributes", false);
  public get headerAttributes() {
    return this._headerAttributes;
  }

  // idp_public_certs - computed: true, optional: false, required: false
  public get idpPublicCerts() {
    return this.getListAttribute('idp_public_certs');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // okta_account - computed: true, optional: false, required: false
  public get oktaAccount() {
    return this.getStringAttribute('okta_account');
  }

  // onelogin_account - computed: true, optional: false, required: false
  public get oneloginAccount() {
    return this.getStringAttribute('onelogin_account');
  }

  // ping_env_id - computed: true, optional: false, required: false
  public get pingEnvId() {
    return this.getStringAttribute('ping_env_id');
  }

  // pkce_enabled - computed: true, optional: false, required: false
  public get pkceEnabled() {
    return this.getBooleanAttribute('pkce_enabled');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // sign_request - computed: true, optional: false, required: false
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }

  // sso_target_url - computed: true, optional: false, required: false
  public get ssoTargetUrl() {
    return this.getStringAttribute('sso_target_url');
  }

  // support_groups - computed: true, optional: false, required: false
  public get supportGroups() {
    return this.getBooleanAttribute('support_groups');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig {
}

export function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // identity_update_behavior - computed: true, optional: false, required: false
  public get identityUpdateBehavior() {
    return this.getStringAttribute('identity_update_behavior');
  }

  // scim_base_url - computed: true, optional: false, required: false
  public get scimBaseUrl() {
    return this.getStringAttribute('scim_base_url');
  }

  // seat_deprovision - computed: true, optional: false, required: false
  public get seatDeprovision() {
    return this.getBooleanAttribute('seat_deprovision');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // user_deprovision - computed: true, optional: false, required: false
  public get userDeprovision() {
    return this.getBooleanAttribute('user_deprovision');
  }
}
export interface DataCloudflareZeroTrustAccessIdentityProvidersResult {
}

export function dataCloudflareZeroTrustAccessIdentityProvidersResultToTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessIdentityProvidersResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessIdentityProvidersResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessIdentityProvidersResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessIdentityProvidersResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflareZeroTrustAccessIdentityProvidersResultConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scim_config - computed: true, optional: false, required: false
  private _scimConfig = new DataCloudflareZeroTrustAccessIdentityProvidersResultScimConfigOutputReference(this, "scim_config");
  public get scimConfig() {
    return this._scimConfig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataCloudflareZeroTrustAccessIdentityProvidersResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference {
    return new DataCloudflareZeroTrustAccessIdentityProvidersResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers}
*/
export class DataCloudflareZeroTrustAccessIdentityProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_identity_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessIdentityProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessIdentityProviders to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustAccessIdentityProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessIdentityProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_identity_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/zero_trust_access_identity_providers cloudflare_zero_trust_access_identity_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustAccessIdentityProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessIdentityProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_identity_providers',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._accountId = config.accountId;
    this._maxItems = config.maxItems;
    this._scimEnabled = config.scimEnabled;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

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
  private _result = new DataCloudflareZeroTrustAccessIdentityProvidersResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // scim_enabled - computed: false, optional: true, required: false
  private _scimEnabled?: string; 
  public get scimEnabled() {
    return this.getStringAttribute('scim_enabled');
  }
  public set scimEnabled(value: string) {
    this._scimEnabled = value;
  }
  public resetScimEnabled() {
    this._scimEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimEnabledInput() {
    return this._scimEnabled;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      max_items: cdktf.numberToTerraform(this._maxItems),
      scim_enabled: cdktf.stringToTerraform(this._scimEnabled),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scim_enabled: {
        value: cdktf.stringToHclTerraform(this._scimEnabled),
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
