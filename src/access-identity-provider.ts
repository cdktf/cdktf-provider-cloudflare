// https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#account_id AccessIdentityProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#name AccessIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#type AccessIdentityProvider#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#zone_id AccessIdentityProvider#zone_id}
  */
  readonly zoneId?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#config AccessIdentityProvider#config}
  */
  readonly config?: AccessIdentityProviderConfigA[] | cdktf.IResolvable;
}
export interface AccessIdentityProviderConfigA {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#api_token AccessIdentityProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}
  */
  readonly appsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#attributes AccessIdentityProvider#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#auth_url AccessIdentityProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}
  */
  readonly centrifyAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}
  */
  readonly centrifyAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#certs_url AccessIdentityProvider#certs_url}
  */
  readonly certsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#client_id AccessIdentityProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#client_secret AccessIdentityProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#directory_id AccessIdentityProvider#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}
  */
  readonly emailAttributeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}
  */
  readonly idpPublicCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#okta_account AccessIdentityProvider#okta_account}
  */
  readonly oktaAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}
  */
  readonly oneloginAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#redirect_url AccessIdentityProvider#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#sign_request AccessIdentityProvider#sign_request}
  */
  readonly signRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}
  */
  readonly ssoTargetUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#support_groups AccessIdentityProvider#support_groups}
  */
  readonly supportGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#token_url AccessIdentityProvider#token_url}
  */
  readonly tokenUrl?: string;
}

export function accessIdentityProviderConfigAToTerraform(struct?: AccessIdentityProviderConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    apps_domain: cdktf.stringToTerraform(struct!.appsDomain),
    attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.attributes),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    centrify_account: cdktf.stringToTerraform(struct!.centrifyAccount),
    centrify_app_id: cdktf.stringToTerraform(struct!.centrifyAppId),
    certs_url: cdktf.stringToTerraform(struct!.certsUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
    email_attribute_name: cdktf.stringToTerraform(struct!.emailAttributeName),
    idp_public_cert: cdktf.stringToTerraform(struct!.idpPublicCert),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    okta_account: cdktf.stringToTerraform(struct!.oktaAccount),
    onelogin_account: cdktf.stringToTerraform(struct!.oneloginAccount),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_target_url: cdktf.stringToTerraform(struct!.ssoTargetUrl),
    support_groups: cdktf.booleanToTerraform(struct!.supportGroups),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider cloudflare_access_identity_provider}
*/
export class AccessIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_identity_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider cloudflare_access_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AccessIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._name = config.name;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._config = config.config;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // config - computed: false, optional: true, required: false
  private _config?: AccessIdentityProviderConfigA[] | cdktf.IResolvable; 
  public get config() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config');
  }
  public set config(value: AccessIdentityProviderConfigA[] | cdktf.IResolvable) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      config: cdktf.listMapper(accessIdentityProviderConfigAToTerraform)(this._config),
    };
  }
}
