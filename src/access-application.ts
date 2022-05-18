// https://www.terraform.io/docs/providers/cloudflare/r/access_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#account_id AccessApplication#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_idps AccessApplication#allowed_idps}
  */
  readonly allowedIdps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#app_launcher_visible AccessApplication#app_launcher_visible}
  */
  readonly appLauncherVisible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#custom_deny_message AccessApplication#custom_deny_message}
  */
  readonly customDenyMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#custom_deny_url AccessApplication#custom_deny_url}
  */
  readonly customDenyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#domain AccessApplication#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}
  */
  readonly enableBindingCookie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}
  */
  readonly httpOnlyCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#logo_url AccessApplication#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#name AccessApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}
  */
  readonly serviceAuth401Redirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#session_duration AccessApplication#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#skip_interstitial AccessApplication#skip_interstitial}
  */
  readonly skipInterstitial?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#type AccessApplication#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#zone_id AccessApplication#zone_id}
  */
  readonly zoneId?: string;
  /**
  * cors_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#cors_headers AccessApplication#cors_headers}
  */
  readonly corsHeaders?: AccessApplicationCorsHeaders[] | cdktf.IResolvable;
}
export interface AccessApplicationCorsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_all_headers AccessApplication#allow_all_headers}
  */
  readonly allowAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_all_methods AccessApplication#allow_all_methods}
  */
  readonly allowAllMethods?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_all_origins AccessApplication#allow_all_origins}
  */
  readonly allowAllOrigins?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allow_credentials AccessApplication#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_headers AccessApplication#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_methods AccessApplication#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_application#allowed_origins AccessApplication#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
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
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
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
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
    this._serviceAuth401Redirect = config.serviceAuth401Redirect;
    this._sessionDuration = config.sessionDuration;
    this._skipInterstitial = config.skipInterstitial;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._corsHeaders = config.corsHeaders;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
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

  // http_only_cookie_attribute - computed: true, optional: true, required: false
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _corsHeaders?: AccessApplicationCorsHeaders[] | cdktf.IResolvable; 
  public get corsHeaders() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors_headers');
  }
  public set corsHeaders(value: AccessApplicationCorsHeaders[] | cdktf.IResolvable) {
    this._corsHeaders = value;
  }
  public resetCorsHeaders() {
    this._corsHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsHeadersInput() {
    return this._corsHeaders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_idps: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedIdps),
      app_launcher_visible: cdktf.booleanToTerraform(this._appLauncherVisible),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      custom_deny_message: cdktf.stringToTerraform(this._customDenyMessage),
      custom_deny_url: cdktf.stringToTerraform(this._customDenyUrl),
      domain: cdktf.stringToTerraform(this._domain),
      enable_binding_cookie: cdktf.booleanToTerraform(this._enableBindingCookie),
      http_only_cookie_attribute: cdktf.booleanToTerraform(this._httpOnlyCookieAttribute),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
      service_auth_401_redirect: cdktf.booleanToTerraform(this._serviceAuth401Redirect),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      skip_interstitial: cdktf.booleanToTerraform(this._skipInterstitial),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cors_headers: cdktf.listMapper(accessApplicationCorsHeadersToTerraform)(this._corsHeaders),
    };
  }
}
