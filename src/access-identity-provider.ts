// https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#account_id AccessIdentityProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#id AccessIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Friendly name of the Access Identity Provider configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#name AccessIdentityProvider#name}
  */
  readonly name: string;
  /**
  * The provider type to use. Available values: `centrify`, `facebook`, `google-apps`, `oidc`, `github`, `google`, `saml`, `linkedin`, `azureAD`, `okta`, `onetimepin`, `onelogin`, `yandex`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#type AccessIdentityProvider#type}
  */
  readonly type: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  * 
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}
  */
  readonly pkceEnabled?: boolean | cdktf.IResolvable;
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
    pkce_enabled: cdktf.booleanToTerraform(struct!.pkceEnabled),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_target_url: cdktf.stringToTerraform(struct!.ssoTargetUrl),
    support_groups: cdktf.booleanToTerraform(struct!.supportGroups),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}

export class AccessIdentityProviderConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AccessIdentityProviderConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._appsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsDomain = this._appsDomain;
    }
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._centrifyAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.centrifyAccount = this._centrifyAccount;
    }
    if (this._centrifyAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.centrifyAppId = this._centrifyAppId;
    }
    if (this._certsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certsUrl = this._certsUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._directoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryId = this._directoryId;
    }
    if (this._emailAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAttributeName = this._emailAttributeName;
    }
    if (this._idpPublicCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpPublicCert = this._idpPublicCert;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._oktaAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaAccount = this._oktaAccount;
    }
    if (this._oneloginAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneloginAccount = this._oneloginAccount;
    }
    if (this._pkceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkceEnabled = this._pkceEnabled;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._signRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.signRequest = this._signRequest;
    }
    if (this._ssoTargetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoTargetUrl = this._ssoTargetUrl;
    }
    if (this._supportGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportGroups = this._supportGroups;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessIdentityProviderConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._appsDomain = undefined;
      this._attributes = undefined;
      this._authUrl = undefined;
      this._centrifyAccount = undefined;
      this._centrifyAppId = undefined;
      this._certsUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._directoryId = undefined;
      this._emailAttributeName = undefined;
      this._idpPublicCert = undefined;
      this._issuerUrl = undefined;
      this._oktaAccount = undefined;
      this._oneloginAccount = undefined;
      this._pkceEnabled = undefined;
      this._redirectUrl = undefined;
      this._signRequest = undefined;
      this._ssoTargetUrl = undefined;
      this._supportGroups = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._appsDomain = value.appsDomain;
      this._attributes = value.attributes;
      this._authUrl = value.authUrl;
      this._centrifyAccount = value.centrifyAccount;
      this._centrifyAppId = value.centrifyAppId;
      this._certsUrl = value.certsUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._directoryId = value.directoryId;
      this._emailAttributeName = value.emailAttributeName;
      this._idpPublicCert = value.idpPublicCert;
      this._issuerUrl = value.issuerUrl;
      this._oktaAccount = value.oktaAccount;
      this._oneloginAccount = value.oneloginAccount;
      this._pkceEnabled = value.pkceEnabled;
      this._redirectUrl = value.redirectUrl;
      this._signRequest = value.signRequest;
      this._ssoTargetUrl = value.ssoTargetUrl;
      this._supportGroups = value.supportGroups;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // apps_domain - computed: false, optional: true, required: false
  private _appsDomain?: string; 
  public get appsDomain() {
    return this.getStringAttribute('apps_domain');
  }
  public set appsDomain(value: string) {
    this._appsDomain = value;
  }
  public resetAppsDomain() {
    this._appsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsDomainInput() {
    return this._appsDomain;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // centrify_account - computed: false, optional: true, required: false
  private _centrifyAccount?: string; 
  public get centrifyAccount() {
    return this.getStringAttribute('centrify_account');
  }
  public set centrifyAccount(value: string) {
    this._centrifyAccount = value;
  }
  public resetCentrifyAccount() {
    this._centrifyAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centrifyAccountInput() {
    return this._centrifyAccount;
  }

  // centrify_app_id - computed: false, optional: true, required: false
  private _centrifyAppId?: string; 
  public get centrifyAppId() {
    return this.getStringAttribute('centrify_app_id');
  }
  public set centrifyAppId(value: string) {
    this._centrifyAppId = value;
  }
  public resetCentrifyAppId() {
    this._centrifyAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centrifyAppIdInput() {
    return this._centrifyAppId;
  }

  // certs_url - computed: false, optional: true, required: false
  private _certsUrl?: string; 
  public get certsUrl() {
    return this.getStringAttribute('certs_url');
  }
  public set certsUrl(value: string) {
    this._certsUrl = value;
  }
  public resetCertsUrl() {
    this._certsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certsUrlInput() {
    return this._certsUrl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // email_attribute_name - computed: false, optional: true, required: false
  private _emailAttributeName?: string; 
  public get emailAttributeName() {
    return this.getStringAttribute('email_attribute_name');
  }
  public set emailAttributeName(value: string) {
    this._emailAttributeName = value;
  }
  public resetEmailAttributeName() {
    this._emailAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAttributeNameInput() {
    return this._emailAttributeName;
  }

  // idp_public_cert - computed: false, optional: true, required: false
  private _idpPublicCert?: string; 
  public get idpPublicCert() {
    return this.getStringAttribute('idp_public_cert');
  }
  public set idpPublicCert(value: string) {
    this._idpPublicCert = value;
  }
  public resetIdpPublicCert() {
    this._idpPublicCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpPublicCertInput() {
    return this._idpPublicCert;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // okta_account - computed: false, optional: true, required: false
  private _oktaAccount?: string; 
  public get oktaAccount() {
    return this.getStringAttribute('okta_account');
  }
  public set oktaAccount(value: string) {
    this._oktaAccount = value;
  }
  public resetOktaAccount() {
    this._oktaAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaAccountInput() {
    return this._oktaAccount;
  }

  // onelogin_account - computed: false, optional: true, required: false
  private _oneloginAccount?: string; 
  public get oneloginAccount() {
    return this.getStringAttribute('onelogin_account');
  }
  public set oneloginAccount(value: string) {
    this._oneloginAccount = value;
  }
  public resetOneloginAccount() {
    this._oneloginAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneloginAccountInput() {
    return this._oneloginAccount;
  }

  // pkce_enabled - computed: false, optional: true, required: false
  private _pkceEnabled?: boolean | cdktf.IResolvable; 
  public get pkceEnabled() {
    return this.getBooleanAttribute('pkce_enabled');
  }
  public set pkceEnabled(value: boolean | cdktf.IResolvable) {
    this._pkceEnabled = value;
  }
  public resetPkceEnabled() {
    this._pkceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceEnabledInput() {
    return this._pkceEnabled;
  }

  // redirect_url - computed: true, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // sign_request - computed: false, optional: true, required: false
  private _signRequest?: boolean | cdktf.IResolvable; 
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }
  public set signRequest(value: boolean | cdktf.IResolvable) {
    this._signRequest = value;
  }
  public resetSignRequest() {
    this._signRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestInput() {
    return this._signRequest;
  }

  // sso_target_url - computed: false, optional: true, required: false
  private _ssoTargetUrl?: string; 
  public get ssoTargetUrl() {
    return this.getStringAttribute('sso_target_url');
  }
  public set ssoTargetUrl(value: string) {
    this._ssoTargetUrl = value;
  }
  public resetSsoTargetUrl() {
    this._ssoTargetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoTargetUrlInput() {
    return this._ssoTargetUrl;
  }

  // support_groups - computed: false, optional: true, required: false
  private _supportGroups?: boolean | cdktf.IResolvable; 
  public get supportGroups() {
    return this.getBooleanAttribute('support_groups');
  }
  public set supportGroups(value: boolean | cdktf.IResolvable) {
    this._supportGroups = value;
  }
  public resetSupportGroups() {
    this._supportGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportGroupsInput() {
    return this._supportGroups;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}

export class AccessIdentityProviderConfigAList extends cdktf.ComplexList {
  public internalValue? : AccessIdentityProviderConfigA[] | cdktf.IResolvable

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
  public get(index: number): AccessIdentityProviderConfigAOutputReference {
    return new AccessIdentityProviderConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._config.internalValue = config.config;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _config = new AccessIdentityProviderConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: AccessIdentityProviderConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      config: cdktf.listMapper(accessIdentityProviderConfigAToTerraform)(this._config.internalValue),
    };
  }
}
