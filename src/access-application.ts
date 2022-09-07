// https://www.terraform.io/docs/providers/cloudflare/r/access_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#account_id AccessApplication#account_id}
  */
  readonly accountId?: string;
  /**
  * The identity providers selected for the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_idps AccessApplication#allowed_idps}
  */
  readonly allowedIdps?: string[];
  /**
  * Option to show/hide applications in App Launcher. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#app_launcher_visible AccessApplication#app_launcher_visible}
  */
  readonly appLauncherVisible?: boolean | cdktf.IResolvable;
  /**
  * Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * Option that returns a custom error message when a user is denied access to the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#custom_deny_message AccessApplication#custom_deny_message}
  */
  readonly customDenyMessage?: string;
  /**
  * Option that redirects to a custom URL when a user is denied access to the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#custom_deny_url AccessApplication#custom_deny_url}
  */
  readonly customDenyUrl?: string;
  /**
  * The complete URL of the asset you wish to put Cloudflare Access in front of. Can include subdomains or paths. Or both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#domain AccessApplication#domain}
  */
  readonly domain?: string;
  /**
  * Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}
  */
  readonly enableBindingCookie?: boolean | cdktf.IResolvable;
  /**
  * Option to add the `HttpOnly` cookie flag to access tokens.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}
  */
  readonly httpOnlyCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#id AccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image URL for the logo shown in the app launcher dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#logo_url AccessApplication#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Friendly name of the Access Application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#name AccessApplication#name}
  */
  readonly name: string;
  /**
  * Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute?: string;
  /**
  * Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}
  */
  readonly serviceAuth401Redirect?: boolean | cdktf.IResolvable;
  /**
  * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. Defaults to `24h`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#session_duration AccessApplication#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Option to skip the authorization interstitial when using the CLI. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#skip_interstitial AccessApplication#skip_interstitial}
  */
  readonly skipInterstitial?: boolean | cdktf.IResolvable;
  /**
  * The application type. Available values: `self_hosted`, `saas`, `ssh`, `vnc`, `file`. Defaults to `self_hosted`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#type AccessApplication#type}
  */
  readonly type?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#zone_id AccessApplication#zone_id}
  */
  readonly zoneId?: string;
  /**
  * cors_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#cors_headers AccessApplication#cors_headers}
  */
  readonly corsHeaders?: AccessApplicationCorsHeaders[] | cdktf.IResolvable;
  /**
  * saas_app block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#saas_app AccessApplication#saas_app}
  */
  readonly saasApp?: AccessApplicationSaasApp;
}
export interface AccessApplicationCorsHeaders {
  /**
  * Value to determine whether all HTTP headers are exposed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_all_headers AccessApplication#allow_all_headers}
  */
  readonly allowAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Value to determine whether all methods are exposed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_all_methods AccessApplication#allow_all_methods}
  */
  readonly allowAllMethods?: boolean | cdktf.IResolvable;
  /**
  * Value to determine whether all origins are permitted to make CORS requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_all_origins AccessApplication#allow_all_origins}
  */
  readonly allowAllOrigins?: boolean | cdktf.IResolvable;
  /**
  * Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_credentials AccessApplication#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers to expose via CORS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_headers AccessApplication#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * List of methods to expose via CORS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_methods AccessApplication#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * List of origins permitted to make CORS requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_origins AccessApplication#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * The maximum time a preflight request will be cached.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#max_age AccessApplication#max_age}
  */
  readonly maxAge?: number;
}

export function accessApplicationCorsHeadersToTerraform(struct?: AccessApplicationCorsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_headers: cdktf.booleanToTerraform(struct!.allowAllHeaders),
    allow_all_methods: cdktf.booleanToTerraform(struct!.allowAllMethods),
    allow_all_origins: cdktf.booleanToTerraform(struct!.allowAllOrigins),
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}

export class AccessApplicationCorsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessApplicationCorsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllHeaders = this._allowAllHeaders;
    }
    if (this._allowAllMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllMethods = this._allowAllMethods;
    }
    if (this._allowAllOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllOrigins = this._allowAllOrigins;
    }
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessApplicationCorsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAllHeaders = undefined;
      this._allowAllMethods = undefined;
      this._allowAllOrigins = undefined;
      this._allowCredentials = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._maxAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAllHeaders = value.allowAllHeaders;
      this._allowAllMethods = value.allowAllMethods;
      this._allowAllOrigins = value.allowAllOrigins;
      this._allowCredentials = value.allowCredentials;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._maxAge = value.maxAge;
    }
  }

  // allow_all_headers - computed: false, optional: true, required: false
  private _allowAllHeaders?: boolean | cdktf.IResolvable; 
  public get allowAllHeaders() {
    return this.getBooleanAttribute('allow_all_headers');
  }
  public set allowAllHeaders(value: boolean | cdktf.IResolvable) {
    this._allowAllHeaders = value;
  }
  public resetAllowAllHeaders() {
    this._allowAllHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllHeadersInput() {
    return this._allowAllHeaders;
  }

  // allow_all_methods - computed: false, optional: true, required: false
  private _allowAllMethods?: boolean | cdktf.IResolvable; 
  public get allowAllMethods() {
    return this.getBooleanAttribute('allow_all_methods');
  }
  public set allowAllMethods(value: boolean | cdktf.IResolvable) {
    this._allowAllMethods = value;
  }
  public resetAllowAllMethods() {
    this._allowAllMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllMethodsInput() {
    return this._allowAllMethods;
  }

  // allow_all_origins - computed: false, optional: true, required: false
  private _allowAllOrigins?: boolean | cdktf.IResolvable; 
  public get allowAllOrigins() {
    return this.getBooleanAttribute('allow_all_origins');
  }
  public set allowAllOrigins(value: boolean | cdktf.IResolvable) {
    this._allowAllOrigins = value;
  }
  public resetAllowAllOrigins() {
    this._allowAllOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllOriginsInput() {
    return this._allowAllOrigins;
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_headers'));
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}

export class AccessApplicationCorsHeadersList extends cdktf.ComplexList {
  public internalValue? : AccessApplicationCorsHeaders[] | cdktf.IResolvable

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
  public get(index: number): AccessApplicationCorsHeadersOutputReference {
    return new AccessApplicationCorsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessApplicationSaasApp {
  /**
  * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#consumer_service_url AccessApplication#consumer_service_url}
  */
  readonly consumerServiceUrl: string;
  /**
  * The format of the name identifier sent to the SaaS application. Defaults to `email`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#name_id_format AccessApplication#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * A globally unique name for an identity or service provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#sp_entity_id AccessApplication#sp_entity_id}
  */
  readonly spEntityId: string;
}

export function accessApplicationSaasAppToTerraform(struct?: AccessApplicationSaasAppOutputReference | AccessApplicationSaasApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumer_service_url: cdktf.stringToTerraform(struct!.consumerServiceUrl),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
  }
}

export class AccessApplicationSaasAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessApplicationSaasApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumerServiceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerServiceUrl = this._consumerServiceUrl;
    }
    if (this._nameIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdFormat = this._nameIdFormat;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessApplicationSaasApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumerServiceUrl = undefined;
      this._nameIdFormat = undefined;
      this._spEntityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumerServiceUrl = value.consumerServiceUrl;
      this._nameIdFormat = value.nameIdFormat;
      this._spEntityId = value.spEntityId;
    }
  }

  // consumer_service_url - computed: false, optional: false, required: true
  private _consumerServiceUrl?: string; 
  public get consumerServiceUrl() {
    return this.getStringAttribute('consumer_service_url');
  }
  public set consumerServiceUrl(value: string) {
    this._consumerServiceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerServiceUrlInput() {
    return this._consumerServiceUrl;
  }

  // name_id_format - computed: false, optional: true, required: false
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  public resetNameIdFormat() {
    this._nameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // sp_entity_id - computed: false, optional: false, required: true
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application cloudflare_access_application}
*/
export class AccessApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application cloudflare_access_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: AccessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.23.0',
        providerVersionConstraint: '~> 3.14'
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
    this._allowedIdps = config.allowedIdps;
    this._appLauncherVisible = config.appLauncherVisible;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._customDenyMessage = config.customDenyMessage;
    this._customDenyUrl = config.customDenyUrl;
    this._domain = config.domain;
    this._enableBindingCookie = config.enableBindingCookie;
    this._httpOnlyCookieAttribute = config.httpOnlyCookieAttribute;
    this._id = config.id;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
    this._serviceAuth401Redirect = config.serviceAuth401Redirect;
    this._sessionDuration = config.sessionDuration;
    this._skipInterstitial = config.skipInterstitial;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._corsHeaders.internalValue = config.corsHeaders;
    this._saasApp.internalValue = config.saasApp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // allowed_idps - computed: false, optional: true, required: false
  private _allowedIdps?: string[]; 
  public get allowedIdps() {
    return this.getListAttribute('allowed_idps');
  }
  public set allowedIdps(value: string[]) {
    this._allowedIdps = value;
  }
  public resetAllowedIdps() {
    this._allowedIdps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIdpsInput() {
    return this._allowedIdps;
  }

  // app_launcher_visible - computed: false, optional: true, required: false
  private _appLauncherVisible?: boolean | cdktf.IResolvable; 
  public get appLauncherVisible() {
    return this.getBooleanAttribute('app_launcher_visible');
  }
  public set appLauncherVisible(value: boolean | cdktf.IResolvable) {
    this._appLauncherVisible = value;
  }
  public resetAppLauncherVisible() {
    this._appLauncherVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLauncherVisibleInput() {
    return this._appLauncherVisible;
  }

  // aud - computed: true, optional: false, required: false
  public get aud() {
    return this.getStringAttribute('aud');
  }

  // auto_redirect_to_identity - computed: false, optional: true, required: false
  private _autoRedirectToIdentity?: boolean | cdktf.IResolvable; 
  public get autoRedirectToIdentity() {
    return this.getBooleanAttribute('auto_redirect_to_identity');
  }
  public set autoRedirectToIdentity(value: boolean | cdktf.IResolvable) {
    this._autoRedirectToIdentity = value;
  }
  public resetAutoRedirectToIdentity() {
    this._autoRedirectToIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectToIdentityInput() {
    return this._autoRedirectToIdentity;
  }

  // custom_deny_message - computed: false, optional: true, required: false
  private _customDenyMessage?: string; 
  public get customDenyMessage() {
    return this.getStringAttribute('custom_deny_message');
  }
  public set customDenyMessage(value: string) {
    this._customDenyMessage = value;
  }
  public resetCustomDenyMessage() {
    this._customDenyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyMessageInput() {
    return this._customDenyMessage;
  }

  // custom_deny_url - computed: false, optional: true, required: false
  private _customDenyUrl?: string; 
  public get customDenyUrl() {
    return this.getStringAttribute('custom_deny_url');
  }
  public set customDenyUrl(value: string) {
    this._customDenyUrl = value;
  }
  public resetCustomDenyUrl() {
    this._customDenyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyUrlInput() {
    return this._customDenyUrl;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable_binding_cookie - computed: false, optional: true, required: false
  private _enableBindingCookie?: boolean | cdktf.IResolvable; 
  public get enableBindingCookie() {
    return this.getBooleanAttribute('enable_binding_cookie');
  }
  public set enableBindingCookie(value: boolean | cdktf.IResolvable) {
    this._enableBindingCookie = value;
  }
  public resetEnableBindingCookie() {
    this._enableBindingCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBindingCookieInput() {
    return this._enableBindingCookie;
  }

  // http_only_cookie_attribute - computed: false, optional: true, required: false
  private _httpOnlyCookieAttribute?: boolean | cdktf.IResolvable; 
  public get httpOnlyCookieAttribute() {
    return this.getBooleanAttribute('http_only_cookie_attribute');
  }
  public set httpOnlyCookieAttribute(value: boolean | cdktf.IResolvable) {
    this._httpOnlyCookieAttribute = value;
  }
  public resetHttpOnlyCookieAttribute() {
    this._httpOnlyCookieAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyCookieAttributeInput() {
    return this._httpOnlyCookieAttribute;
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

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
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

  // same_site_cookie_attribute - computed: false, optional: true, required: false
  private _sameSiteCookieAttribute?: string; 
  public get sameSiteCookieAttribute() {
    return this.getStringAttribute('same_site_cookie_attribute');
  }
  public set sameSiteCookieAttribute(value: string) {
    this._sameSiteCookieAttribute = value;
  }
  public resetSameSiteCookieAttribute() {
    this._sameSiteCookieAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameSiteCookieAttributeInput() {
    return this._sameSiteCookieAttribute;
  }

  // service_auth_401_redirect - computed: false, optional: true, required: false
  private _serviceAuth401Redirect?: boolean | cdktf.IResolvable; 
  public get serviceAuth401Redirect() {
    return this.getBooleanAttribute('service_auth_401_redirect');
  }
  public set serviceAuth401Redirect(value: boolean | cdktf.IResolvable) {
    this._serviceAuth401Redirect = value;
  }
  public resetServiceAuth401Redirect() {
    this._serviceAuth401Redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAuth401RedirectInput() {
    return this._serviceAuth401Redirect;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // skip_interstitial - computed: false, optional: true, required: false
  private _skipInterstitial?: boolean | cdktf.IResolvable; 
  public get skipInterstitial() {
    return this.getBooleanAttribute('skip_interstitial');
  }
  public set skipInterstitial(value: boolean | cdktf.IResolvable) {
    this._skipInterstitial = value;
  }
  public resetSkipInterstitial() {
    this._skipInterstitial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInterstitialInput() {
    return this._skipInterstitial;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone_id - computed: true, optional: true, required: false
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

  // cors_headers - computed: false, optional: true, required: false
  private _corsHeaders = new AccessApplicationCorsHeadersList(this, "cors_headers", false);
  public get corsHeaders() {
    return this._corsHeaders;
  }
  public putCorsHeaders(value: AccessApplicationCorsHeaders[] | cdktf.IResolvable) {
    this._corsHeaders.internalValue = value;
  }
  public resetCorsHeaders() {
    this._corsHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsHeadersInput() {
    return this._corsHeaders.internalValue;
  }

  // saas_app - computed: false, optional: true, required: false
  private _saasApp = new AccessApplicationSaasAppOutputReference(this, "saas_app");
  public get saasApp() {
    return this._saasApp;
  }
  public putSaasApp(value: AccessApplicationSaasApp) {
    this._saasApp.internalValue = value;
  }
  public resetSaasApp() {
    this._saasApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasAppInput() {
    return this._saasApp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_idps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIdps),
      app_launcher_visible: cdktf.booleanToTerraform(this._appLauncherVisible),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      custom_deny_message: cdktf.stringToTerraform(this._customDenyMessage),
      custom_deny_url: cdktf.stringToTerraform(this._customDenyUrl),
      domain: cdktf.stringToTerraform(this._domain),
      enable_binding_cookie: cdktf.booleanToTerraform(this._enableBindingCookie),
      http_only_cookie_attribute: cdktf.booleanToTerraform(this._httpOnlyCookieAttribute),
      id: cdktf.stringToTerraform(this._id),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
      service_auth_401_redirect: cdktf.booleanToTerraform(this._serviceAuth401Redirect),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      skip_interstitial: cdktf.booleanToTerraform(this._skipInterstitial),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cors_headers: cdktf.listMapper(accessApplicationCorsHeadersToTerraform, true)(this._corsHeaders.internalValue),
      saas_app: accessApplicationSaasAppToTerraform(this._saasApp.internalValue),
    };
  }
}
