/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#account_id ZeroTrustAccessApplication#account_id}
  */
  readonly accountId?: string;
  /**
  * When set to true, users can authenticate to this application using their WARP session.  When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_authenticate_via_warp ZeroTrustAccessApplication#allow_authenticate_via_warp}
  */
  readonly allowAuthenticateViaWarp?: boolean | cdktf.IResolvable;
  /**
  * Enables loading application content in an iFrame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_iframe ZeroTrustAccessApplication#allow_iframe}
  */
  readonly allowIframe?: boolean | cdktf.IResolvable;
  /**
  * The identity providers your users can select when connecting to this application. Defaults to all IdPs configured in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allowed_idps ZeroTrustAccessApplication#allowed_idps}
  */
  readonly allowedIdps?: string[];
  /**
  * The image URL of the logo shown in the App Launcher header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#app_launcher_logo_url ZeroTrustAccessApplication#app_launcher_logo_url}
  */
  readonly appLauncherLogoUrl?: string;
  /**
  * Displays the application in the App Launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#app_launcher_visible ZeroTrustAccessApplication#app_launcher_visible}
  */
  readonly appLauncherVisible?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, users skip the identity provider selection step during login. You must specify only one identity provider in allowed_idps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auto_redirect_to_identity ZeroTrustAccessApplication#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * The background color of the App Launcher page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#bg_color ZeroTrustAccessApplication#bg_color}
  */
  readonly bgColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#cors_headers ZeroTrustAccessApplication#cors_headers}
  */
  readonly corsHeaders?: ZeroTrustAccessApplicationCorsHeaders;
  /**
  * The custom error message shown to a user when they are denied access to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#custom_deny_message ZeroTrustAccessApplication#custom_deny_message}
  */
  readonly customDenyMessage?: string;
  /**
  * The custom URL a user is redirected to when they are denied access to the application when failing identity-based rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#custom_deny_url ZeroTrustAccessApplication#custom_deny_url}
  */
  readonly customDenyUrl?: string;
  /**
  * The custom URL a user is redirected to when they are denied access to the application when failing non-identity rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#custom_non_identity_deny_url ZeroTrustAccessApplication#custom_non_identity_deny_url}
  */
  readonly customNonIdentityDenyUrl?: string;
  /**
  * The custom pages that will be displayed when applicable for this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#custom_pages ZeroTrustAccessApplication#custom_pages}
  */
  readonly customPages?: string[];
  /**
  * List of destinations secured by Access. This supersedes `self_hosted_domains` to allow for more flexibility in defining different types of domains. If `destinations` are provided, then `self_hosted_domains` will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#destinations ZeroTrustAccessApplication#destinations}
  */
  readonly destinations?: ZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable;
  /**
  * The primary hostname and path secured by Access. This domain will be displayed if the app is visible in the App Launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
  */
  readonly domain?: string;
  /**
  * Enables the binding cookie, which increases security against compromised authorization tokens and CSRF attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#enable_binding_cookie ZeroTrustAccessApplication#enable_binding_cookie}
  */
  readonly enableBindingCookie?: boolean | cdktf.IResolvable;
  /**
  * The links in the App Launcher footer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#footer_links ZeroTrustAccessApplication#footer_links}
  */
  readonly footerLinks?: ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable;
  /**
  * The background color of the App Launcher header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#header_bg_color ZeroTrustAccessApplication#header_bg_color}
  */
  readonly headerBgColor?: string;
  /**
  * Enables the HttpOnly cookie attribute, which increases security against XSS attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#http_only_cookie_attribute ZeroTrustAccessApplication#http_only_cookie_attribute}
  */
  readonly httpOnlyCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * The design of the App Launcher landing page shown to users when they log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#landing_page_design ZeroTrustAccessApplication#landing_page_design}
  */
  readonly landingPageDesign?: ZeroTrustAccessApplicationLandingPageDesign;
  /**
  * The image URL for the logo shown in the App Launcher dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#logo_url ZeroTrustAccessApplication#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * The name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#options_preflight_bypass ZeroTrustAccessApplication#options_preflight_bypass}
  */
  readonly optionsPreflightBypass?: boolean | cdktf.IResolvable;
  /**
  * Enables cookie paths to scope an application's JWT to the application path. If disabled, the JWT will scope to the hostname by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#path_cookie_attribute ZeroTrustAccessApplication#path_cookie_attribute}
  */
  readonly pathCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * The policies that Access applies to the application, in ascending order of precedence. Items can reference existing policies or create new policies exclusive to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#policies ZeroTrustAccessApplication#policies}
  */
  readonly policies?: ZeroTrustAccessApplicationPolicies[] | cdktf.IResolvable;
  /**
  * Allows matching Access Service Tokens passed HTTP in a single header with this name.
  * This works as an alternative to the (CF-Access-Client-Id, CF-Access-Client-Secret) pair of headers.
  * The header value will be interpreted as a json object similar to: 
  *   {
  *     "cf-access-client-id": "88bf3b6d86161464f6509f7219099e57.access.example.com",
  *     "cf-access-client-secret": "bdd31cbc4dec990953e39163fbbb194c93313ca9f0a6e420346af9d326b1d2a5"
  *   }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#read_service_tokens_from_header ZeroTrustAccessApplication#read_service_tokens_from_header}
  */
  readonly readServiceTokensFromHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#saas_app ZeroTrustAccessApplication#saas_app}
  */
  readonly saasApp?: ZeroTrustAccessApplicationSaasApp;
  /**
  * Sets the SameSite cookie setting, which provides increased security against CSRF attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#same_site_cookie_attribute ZeroTrustAccessApplication#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute?: string;
  /**
  * Configuration for provisioning to this application via SCIM. This is currently in closed beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#scim_config ZeroTrustAccessApplication#scim_config}
  */
  readonly scimConfig?: ZeroTrustAccessApplicationScimConfig;
  /**
  * List of public domains that Access will secure. This field is deprecated in favor of `destinations` and will be supported until **November 21, 2025.** If `destinations` are provided, then `self_hosted_domains` will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#self_hosted_domains ZeroTrustAccessApplication#self_hosted_domains}
  */
  readonly selfHostedDomains?: string[];
  /**
  * Returns a 401 status code when the request is blocked by a Service Auth policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#service_auth_401_redirect ZeroTrustAccessApplication#service_auth_401_redirect}
  */
  readonly serviceAuth401Redirect?: boolean | cdktf.IResolvable;
  /**
  * The amount of time that tokens issued for this application will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. Note: unsupported for infrastructure type applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Determines when to skip the App Launcher landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#skip_app_launcher_login_page ZeroTrustAccessApplication#skip_app_launcher_login_page}
  */
  readonly skipAppLauncherLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Enables automatic authentication through cloudflared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#skip_interstitial ZeroTrustAccessApplication#skip_interstitial}
  */
  readonly skipInterstitial?: boolean | cdktf.IResolvable;
  /**
  * The tags you want assigned to an application. Tags are used to filter applications in the App Launcher dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#tags ZeroTrustAccessApplication#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#target_criteria ZeroTrustAccessApplication#target_criteria}
  */
  readonly targetCriteria?: ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable;
  /**
  * The application type.
  * Available values: "self_hosted", "saas", "ssh", "vnc", "app_launcher", "warp", "biso", "bookmark", "dash_sso", "infrastructure", "rdp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}
  */
  readonly type?: string;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#zone_id ZeroTrustAccessApplication#zone_id}
  */
  readonly zoneId?: string;
}
export interface ZeroTrustAccessApplicationCorsHeaders {
  /**
  * Allows all HTTP request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_all_headers ZeroTrustAccessApplication#allow_all_headers}
  */
  readonly allowAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Allows all HTTP request methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_all_methods ZeroTrustAccessApplication#allow_all_methods}
  */
  readonly allowAllMethods?: boolean | cdktf.IResolvable;
  /**
  * Allows all origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_all_origins ZeroTrustAccessApplication#allow_all_origins}
  */
  readonly allowAllOrigins?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, includes credentials (cookies, authorization headers, or TLS client certificates) with requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_credentials ZeroTrustAccessApplication#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Allowed HTTP request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allowed_headers ZeroTrustAccessApplication#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Allowed HTTP request methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allowed_methods ZeroTrustAccessApplication#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Allowed origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allowed_origins ZeroTrustAccessApplication#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * The maximum number of seconds the results of a preflight request can be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#max_age ZeroTrustAccessApplication#max_age}
  */
  readonly maxAge?: number;
}

export function zeroTrustAccessApplicationCorsHeadersToTerraform(struct?: ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable): any {
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


export function zeroTrustAccessApplicationCorsHeadersToHclTerraform(struct?: ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_headers: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_all_methods: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_all_origins: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationCorsHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationCorsHeaders | cdktf.IResolvable | undefined) {
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
export interface ZeroTrustAccessApplicationDestinations {
  /**
  * The CIDR range of the destination. Single IPs will be computed as /32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#cidr ZeroTrustAccessApplication#cidr}
  */
  readonly cidr?: string;
  /**
  * The hostname of the destination. Matches a valid SNI served by an HTTPS origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#hostname ZeroTrustAccessApplication#hostname}
  */
  readonly hostname?: string;
  /**
  * The L4 protocol of the destination. When omitted, both UDP and TCP traffic will match.
  * Available values: "tcp", "udp".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#l4_protocol ZeroTrustAccessApplication#l4_protocol}
  */
  readonly l4Protocol?: string;
  /**
  * The port range of the destination. Can be a single port or a range of ports. When omitted, all ports will match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#port_range ZeroTrustAccessApplication#port_range}
  */
  readonly portRange?: string;
  /**
  * Available values: "public", "private".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}
  */
  readonly type?: string;
  /**
  * The URI of the destination. Public destinations' URIs can include a domain and path with [wildcards](https://developers.cloudflare.com/cloudflare-one/policies/access/app-paths/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#uri ZeroTrustAccessApplication#uri}
  */
  readonly uri?: string;
  /**
  * The VNET ID to match the destination. When omitted, all VNETs will match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#vnet_id ZeroTrustAccessApplication#vnet_id}
  */
  readonly vnetId?: string;
}

export function zeroTrustAccessApplicationDestinationsToTerraform(struct?: ZeroTrustAccessApplicationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    l4_protocol: cdktf.stringToTerraform(struct!.l4Protocol),
    port_range: cdktf.stringToTerraform(struct!.portRange),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}


export function zeroTrustAccessApplicationDestinationsToHclTerraform(struct?: ZeroTrustAccessApplicationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_protocol: {
      value: cdktf.stringToHclTerraform(struct!.l4Protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_range: {
      value: cdktf.stringToHclTerraform(struct!.portRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_id: {
      value: cdktf.stringToHclTerraform(struct!.vnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._l4Protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Protocol = this._l4Protocol;
    }
    if (this._portRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRange = this._portRange;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._hostname = undefined;
      this._l4Protocol = undefined;
      this._portRange = undefined;
      this._type = undefined;
      this._uri = undefined;
      this._vnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._hostname = value.hostname;
      this._l4Protocol = value.l4Protocol;
      this._portRange = value.portRange;
      this._type = value.type;
      this._uri = value.uri;
      this._vnetId = value.vnetId;
    }
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // l4_protocol - computed: true, optional: true, required: false
  private _l4Protocol?: string; 
  public get l4Protocol() {
    return this.getStringAttribute('l4_protocol');
  }
  public set l4Protocol(value: string) {
    this._l4Protocol = value;
  }
  public resetL4Protocol() {
    this._l4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProtocolInput() {
    return this._l4Protocol;
  }

  // port_range - computed: true, optional: true, required: false
  private _portRange?: string; 
  public get portRange() {
    return this.getStringAttribute('port_range');
  }
  public set portRange(value: string) {
    this._portRange = value;
  }
  public resetPortRange() {
    this._portRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange;
  }

  // type - computed: true, optional: true, required: false
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

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // vnet_id - computed: true, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

export class ZeroTrustAccessApplicationDestinationsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationDestinationsOutputReference {
    return new ZeroTrustAccessApplicationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationFooterLinks {
  /**
  * The hypertext in the footer link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * the hyperlink in the footer link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#url ZeroTrustAccessApplication#url}
  */
  readonly url: string;
}

export function zeroTrustAccessApplicationFooterLinksToTerraform(struct?: ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function zeroTrustAccessApplicationFooterLinksToHclTerraform(struct?: ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationFooterLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationFooterLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._url = value.url;
    }
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ZeroTrustAccessApplicationFooterLinksList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationFooterLinksOutputReference {
    return new ZeroTrustAccessApplicationFooterLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationLandingPageDesign {
  /**
  * The background color of the log in button on the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#button_color ZeroTrustAccessApplication#button_color}
  */
  readonly buttonColor?: string;
  /**
  * The color of the text in the log in button on the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#button_text_color ZeroTrustAccessApplication#button_text_color}
  */
  readonly buttonTextColor?: string;
  /**
  * The URL of the image shown on the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#image_url ZeroTrustAccessApplication#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The message shown on the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#message ZeroTrustAccessApplication#message}
  */
  readonly message?: string;
  /**
  * The title shown on the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#title ZeroTrustAccessApplication#title}
  */
  readonly title?: string;
}

export function zeroTrustAccessApplicationLandingPageDesignToTerraform(struct?: ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    button_color: cdktf.stringToTerraform(struct!.buttonColor),
    button_text_color: cdktf.stringToTerraform(struct!.buttonTextColor),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function zeroTrustAccessApplicationLandingPageDesignToHclTerraform(struct?: ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    button_color: {
      value: cdktf.stringToHclTerraform(struct!.buttonColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_text_color: {
      value: cdktf.stringToHclTerraform(struct!.buttonTextColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationLandingPageDesignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buttonColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonColor = this._buttonColor;
    }
    if (this._buttonTextColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonTextColor = this._buttonTextColor;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationLandingPageDesign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buttonColor = undefined;
      this._buttonTextColor = undefined;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buttonColor = value.buttonColor;
      this._buttonTextColor = value.buttonTextColor;
      this._imageUrl = value.imageUrl;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // button_color - computed: false, optional: true, required: false
  private _buttonColor?: string; 
  public get buttonColor() {
    return this.getStringAttribute('button_color');
  }
  public set buttonColor(value: string) {
    this._buttonColor = value;
  }
  public resetButtonColor() {
    this._buttonColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonColorInput() {
    return this._buttonColor;
  }

  // button_text_color - computed: false, optional: true, required: false
  private _buttonTextColor?: string; 
  public get buttonTextColor() {
    return this.getStringAttribute('button_text_color');
  }
  public set buttonTextColor(value: string) {
    this._buttonTextColor = value;
  }
  public resetButtonTextColor() {
    this._buttonTextColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextColorInput() {
    return this._buttonTextColor;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface ZeroTrustAccessApplicationPoliciesConnectionRulesSsh {
  /**
  * Enables using Identity Provider email alias as SSH username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_email_alias ZeroTrustAccessApplication#allow_email_alias}
  */
  readonly allowEmailAlias?: boolean | cdktf.IResolvable;
  /**
  * Contains the Unix usernames that may be used when connecting over SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#usernames ZeroTrustAccessApplication#usernames}
  */
  readonly usernames: string[];
}

export function zeroTrustAccessApplicationPoliciesConnectionRulesSshToTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_email_alias: cdktf.booleanToTerraform(struct!.allowEmailAlias),
    usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usernames),
  }
}


export function zeroTrustAccessApplicationPoliciesConnectionRulesSshToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_email_alias: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmailAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usernames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usernames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmailAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmailAlias = this._allowEmailAlias;
    }
    if (this._usernames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernames = this._usernames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmailAlias = undefined;
      this._usernames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmailAlias = value.allowEmailAlias;
      this._usernames = value.usernames;
    }
  }

  // allow_email_alias - computed: false, optional: true, required: false
  private _allowEmailAlias?: boolean | cdktf.IResolvable; 
  public get allowEmailAlias() {
    return this.getBooleanAttribute('allow_email_alias');
  }
  public set allowEmailAlias(value: boolean | cdktf.IResolvable) {
    this._allowEmailAlias = value;
  }
  public resetAllowEmailAlias() {
    this._allowEmailAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmailAliasInput() {
    return this._allowEmailAlias;
  }

  // usernames - computed: false, optional: false, required: true
  private _usernames?: string[]; 
  public get usernames() {
    return this.getListAttribute('usernames');
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }
}
export interface ZeroTrustAccessApplicationPoliciesConnectionRules {
  /**
  * The SSH-specific rules that define how users may connect to the targets secured by your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ssh ZeroTrustAccessApplication#ssh}
  */
  readonly ssh?: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh;
}

export function zeroTrustAccessApplicationPoliciesConnectionRulesToTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh: zeroTrustAccessApplicationPoliciesConnectionRulesSshToTerraform(struct!.ssh),
  }
}


export function zeroTrustAccessApplicationPoliciesConnectionRulesToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh: {
      value: zeroTrustAccessApplicationPoliciesConnectionRulesSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesConnectionRulesSsh",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesConnectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssh.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssh.internalValue = value.ssh;
    }
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new ZeroTrustAccessApplicationPoliciesConnectionRulesSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: ZeroTrustAccessApplicationPoliciesConnectionRulesSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken {
}

export function zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAuthContext {
  /**
  * The ACID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ac_id ZeroTrustAccessApplication#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeAuthContextToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_id: cdktf.stringToTerraform(struct!.acId),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeAuthContextToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_id: {
      value: cdktf.stringToHclTerraform(struct!.acId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acId = this._acId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAuthContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acId = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acId = value.acId;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // ac_id - computed: false, optional: false, required: true
  private _acId?: string; 
  public get acId() {
    return this.getStringAttribute('ac_id');
  }
  public set acId(value: string) {
    this._acId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acIdInput() {
    return this._acId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAuthMethod {
  /**
  * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
  */
  readonly authMethod: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeAuthMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
    }
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeAzureAd {
  /**
  * The ID of an Azure group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeAzureAdToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeAzureAdToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeCertificate {
}

export function zeroTrustAccessApplicationPoliciesExcludeCertificateToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeCertificateToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeCommonName {
  /**
  * The common name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
  */
  readonly commonName: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeCommonNameToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeCommonNameToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeDevicePosture {
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#integration_uid ZeroTrustAccessApplication#integration_uid}
  */
  readonly integrationUid: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeDevicePostureToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_uid: cdktf.stringToTerraform(struct!.integrationUid),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_uid: {
      value: cdktf.stringToHclTerraform(struct!.integrationUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUid = this._integrationUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationUid = value.integrationUid;
    }
  }

  // integration_uid - computed: false, optional: false, required: true
  private _integrationUid?: string; 
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
  public set integrationUid(value: string) {
    this._integrationUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUidInput() {
    return this._integrationUid;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEmail {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeEmailToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeEmailToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEmailDomain {
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
  */
  readonly domain: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeEmailDomainToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
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
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct {
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeEmailListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeEveryone {
}

export function zeroTrustAccessApplicationPoliciesExcludeEveryoneToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeEveryoneToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeEveryone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#evaluate_url ZeroTrustAccessApplication#evaluate_url}
  */
  readonly evaluateUrl: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#keys_url ZeroTrustAccessApplication#keys_url}
  */
  readonly keysUrl: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_url: {
      value: cdktf.stringToHclTerraform(struct!.evaluateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys_url: {
      value: cdktf.stringToHclTerraform(struct!.keysUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateUrl = this._evaluateUrl;
    }
    if (this._keysUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysUrl = this._keysUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: false, required: true
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: false, required: true
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGeo {
  /**
  * The country code that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#country_code ZeroTrustAccessApplication#country_code}
  */
  readonly countryCode: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeGeoToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeGeoToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#team ZeroTrustAccessApplication#team}
  */
  readonly team?: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
      this._team = value.team;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGroup {
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeGroupToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeGroupToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email: string;
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeGsuiteToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeGsuiteToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeGsuite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeIp {
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
  */
  readonly ip: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeIpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeIpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeIpListStruct {
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeIpListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeIpListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken {
  /**
  * The ID of an Access OIDC SaaS application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#app_uid ZeroTrustAccessApplication#app_uid}
  */
  readonly appUid: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_uid: cdktf.stringToTerraform(struct!.appUid),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_uid: {
      value: cdktf.stringToHclTerraform(struct!.appUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUid = this._appUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appUid = value.appUid;
    }
  }

  // app_uid - computed: false, optional: false, required: true
  private _appUid?: string; 
  public get appUid() {
    return this.getStringAttribute('app_uid');
  }
  public set appUid(value: string) {
    this._appUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUidInput() {
    return this._appUid;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeLoginMethod {
  /**
  * The ID of an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeLoginMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeOidc {
  /**
  * The name of the OIDC claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#claim_name ZeroTrustAccessApplication#claim_name}
  */
  readonly claimName: string;
  /**
  * The OIDC claim value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#claim_value ZeroTrustAccessApplication#claim_value}
  */
  readonly claimValue: string;
  /**
  * The ID of your OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeOidcToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeOidcToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimValue = value.claimValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the Okta group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeOktaToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeOktaToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeOkta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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
}
export interface ZeroTrustAccessApplicationPoliciesExcludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#attribute_name ZeroTrustAccessApplication#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#attribute_value ZeroTrustAccessApplication#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeSamlToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeSamlToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExcludeServiceToken {
  /**
  * The ID of a Service Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#token_id ZeroTrustAccessApplication#token_id}
  */
  readonly tokenId: string;
}

export function zeroTrustAccessApplicationPoliciesExcludeServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_id: cdktf.stringToTerraform(struct!.tokenId),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExcludeServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenId = value.tokenId;
    }
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesExclude {
  /**
  * An empty object which matches on all service tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#any_valid_service_token ZeroTrustAccessApplication#any_valid_service_token}
  */
  readonly anyValidServiceToken?: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_context ZeroTrustAccessApplication#auth_context}
  */
  readonly authContext?: ZeroTrustAccessApplicationPoliciesExcludeAuthContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
  */
  readonly authMethod?: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#azure_ad ZeroTrustAccessApplication#azure_ad}
  */
  readonly azureAd?: ZeroTrustAccessApplicationPoliciesExcludeAzureAd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#certificate ZeroTrustAccessApplication#certificate}
  */
  readonly certificate?: ZeroTrustAccessApplicationPoliciesExcludeCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
  */
  readonly commonName?: ZeroTrustAccessApplicationPoliciesExcludeCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#device_posture ZeroTrustAccessApplication#device_posture}
  */
  readonly devicePosture?: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email?: ZeroTrustAccessApplicationPoliciesExcludeEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email_domain ZeroTrustAccessApplication#email_domain}
  */
  readonly emailDomain?: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email_list ZeroTrustAccessApplication#email_list}
  */
  readonly emailList?: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct;
  /**
  * An empty object which matches on all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#everyone ZeroTrustAccessApplication#everyone}
  */
  readonly everyone?: ZeroTrustAccessApplicationPoliciesExcludeEveryone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#external_evaluation ZeroTrustAccessApplication#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#geo ZeroTrustAccessApplication#geo}
  */
  readonly geo?: ZeroTrustAccessApplicationPoliciesExcludeGeo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#github_organization ZeroTrustAccessApplication#github_organization}
  */
  readonly githubOrganization?: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#group ZeroTrustAccessApplication#group}
  */
  readonly group?: ZeroTrustAccessApplicationPoliciesExcludeGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#gsuite ZeroTrustAccessApplication#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessApplicationPoliciesExcludeGsuite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
  */
  readonly ip?: ZeroTrustAccessApplicationPoliciesExcludeIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip_list ZeroTrustAccessApplication#ip_list}
  */
  readonly ipList?: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#linked_app_token ZeroTrustAccessApplication#linked_app_token}
  */
  readonly linkedAppToken?: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#login_method ZeroTrustAccessApplication#login_method}
  */
  readonly loginMethod?: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#oidc ZeroTrustAccessApplication#oidc}
  */
  readonly oidc?: ZeroTrustAccessApplicationPoliciesExcludeOidc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#okta ZeroTrustAccessApplication#okta}
  */
  readonly okta?: ZeroTrustAccessApplicationPoliciesExcludeOkta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#saml ZeroTrustAccessApplication#saml}
  */
  readonly saml?: ZeroTrustAccessApplicationPoliciesExcludeSaml;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#service_token ZeroTrustAccessApplication#service_token}
  */
  readonly serviceToken?: ZeroTrustAccessApplicationPoliciesExcludeServiceToken;
}

export function zeroTrustAccessApplicationPoliciesExcludeToTerraform(struct?: ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToTerraform(struct!.anyValidServiceToken),
    auth_context: zeroTrustAccessApplicationPoliciesExcludeAuthContextToTerraform(struct!.authContext),
    auth_method: zeroTrustAccessApplicationPoliciesExcludeAuthMethodToTerraform(struct!.authMethod),
    azure_ad: zeroTrustAccessApplicationPoliciesExcludeAzureAdToTerraform(struct!.azureAd),
    certificate: zeroTrustAccessApplicationPoliciesExcludeCertificateToTerraform(struct!.certificate),
    common_name: zeroTrustAccessApplicationPoliciesExcludeCommonNameToTerraform(struct!.commonName),
    device_posture: zeroTrustAccessApplicationPoliciesExcludeDevicePostureToTerraform(struct!.devicePosture),
    email: zeroTrustAccessApplicationPoliciesExcludeEmailToTerraform(struct!.email),
    email_domain: zeroTrustAccessApplicationPoliciesExcludeEmailDomainToTerraform(struct!.emailDomain),
    email_list: zeroTrustAccessApplicationPoliciesExcludeEmailListStructToTerraform(struct!.emailList),
    everyone: zeroTrustAccessApplicationPoliciesExcludeEveryoneToTerraform(struct!.everyone),
    external_evaluation: zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    geo: zeroTrustAccessApplicationPoliciesExcludeGeoToTerraform(struct!.geo),
    github_organization: zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToTerraform(struct!.githubOrganization),
    group: zeroTrustAccessApplicationPoliciesExcludeGroupToTerraform(struct!.group),
    gsuite: zeroTrustAccessApplicationPoliciesExcludeGsuiteToTerraform(struct!.gsuite),
    ip: zeroTrustAccessApplicationPoliciesExcludeIpToTerraform(struct!.ip),
    ip_list: zeroTrustAccessApplicationPoliciesExcludeIpListStructToTerraform(struct!.ipList),
    linked_app_token: zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToTerraform(struct!.linkedAppToken),
    login_method: zeroTrustAccessApplicationPoliciesExcludeLoginMethodToTerraform(struct!.loginMethod),
    oidc: zeroTrustAccessApplicationPoliciesExcludeOidcToTerraform(struct!.oidc),
    okta: zeroTrustAccessApplicationPoliciesExcludeOktaToTerraform(struct!.okta),
    saml: zeroTrustAccessApplicationPoliciesExcludeSamlToTerraform(struct!.saml),
    service_token: zeroTrustAccessApplicationPoliciesExcludeServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function zeroTrustAccessApplicationPoliciesExcludeToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: zeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenToHclTerraform(struct!.anyValidServiceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken",
    },
    auth_context: {
      value: zeroTrustAccessApplicationPoliciesExcludeAuthContextToHclTerraform(struct!.authContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAuthContext",
    },
    auth_method: {
      value: zeroTrustAccessApplicationPoliciesExcludeAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAuthMethod",
    },
    azure_ad: {
      value: zeroTrustAccessApplicationPoliciesExcludeAzureAdToHclTerraform(struct!.azureAd),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeAzureAd",
    },
    certificate: {
      value: zeroTrustAccessApplicationPoliciesExcludeCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeCertificate",
    },
    common_name: {
      value: zeroTrustAccessApplicationPoliciesExcludeCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeCommonName",
    },
    device_posture: {
      value: zeroTrustAccessApplicationPoliciesExcludeDevicePostureToHclTerraform(struct!.devicePosture),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeDevicePosture",
    },
    email: {
      value: zeroTrustAccessApplicationPoliciesExcludeEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEmail",
    },
    email_domain: {
      value: zeroTrustAccessApplicationPoliciesExcludeEmailDomainToHclTerraform(struct!.emailDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEmailDomain",
    },
    email_list: {
      value: zeroTrustAccessApplicationPoliciesExcludeEmailListStructToHclTerraform(struct!.emailList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct",
    },
    everyone: {
      value: zeroTrustAccessApplicationPoliciesExcludeEveryoneToHclTerraform(struct!.everyone),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeEveryone",
    },
    external_evaluation: {
      value: zeroTrustAccessApplicationPoliciesExcludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation",
    },
    geo: {
      value: zeroTrustAccessApplicationPoliciesExcludeGeoToHclTerraform(struct!.geo),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGeo",
    },
    github_organization: {
      value: zeroTrustAccessApplicationPoliciesExcludeGithubOrganizationToHclTerraform(struct!.githubOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization",
    },
    group: {
      value: zeroTrustAccessApplicationPoliciesExcludeGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGroup",
    },
    gsuite: {
      value: zeroTrustAccessApplicationPoliciesExcludeGsuiteToHclTerraform(struct!.gsuite),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeGsuite",
    },
    ip: {
      value: zeroTrustAccessApplicationPoliciesExcludeIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeIp",
    },
    ip_list: {
      value: zeroTrustAccessApplicationPoliciesExcludeIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeIpListStruct",
    },
    linked_app_token: {
      value: zeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenToHclTerraform(struct!.linkedAppToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken",
    },
    login_method: {
      value: zeroTrustAccessApplicationPoliciesExcludeLoginMethodToHclTerraform(struct!.loginMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeLoginMethod",
    },
    oidc: {
      value: zeroTrustAccessApplicationPoliciesExcludeOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeOidc",
    },
    okta: {
      value: zeroTrustAccessApplicationPoliciesExcludeOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeOkta",
    },
    saml: {
      value: zeroTrustAccessApplicationPoliciesExcludeSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeSaml",
    },
    service_token: {
      value: zeroTrustAccessApplicationPoliciesExcludeServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeServiceToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._azureAd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAd = this._azureAd?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._devicePosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._emailDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain?.internalValue;
    }
    if (this._emailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList?.internalValue;
    }
    if (this._everyone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._githubOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._linkedAppToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
    }
    if (this._loginMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = undefined;
      this._authContext.internalValue = undefined;
      this._authMethod.internalValue = undefined;
      this._azureAd.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._commonName.internalValue = undefined;
      this._devicePosture.internalValue = undefined;
      this._email.internalValue = undefined;
      this._emailDomain.internalValue = undefined;
      this._emailList.internalValue = undefined;
      this._everyone.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._geo.internalValue = undefined;
      this._githubOrganization.internalValue = undefined;
      this._group.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._linkedAppToken.internalValue = undefined;
      this._loginMethod.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
      this._authContext.internalValue = value.authContext;
      this._authMethod.internalValue = value.authMethod;
      this._azureAd.internalValue = value.azureAd;
      this._certificate.internalValue = value.certificate;
      this._commonName.internalValue = value.commonName;
      this._devicePosture.internalValue = value.devicePosture;
      this._email.internalValue = value.email;
      this._emailDomain.internalValue = value.emailDomain;
      this._emailList.internalValue = value.emailList;
      this._everyone.internalValue = value.everyone;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._geo.internalValue = value.geo;
      this._githubOrganization.internalValue = value.githubOrganization;
      this._group.internalValue = value.group;
      this._gsuite.internalValue = value.gsuite;
      this._ip.internalValue = value.ip;
      this._ipList.internalValue = value.ipList;
      this._linkedAppToken.internalValue = value.linkedAppToken;
      this._loginMethod.internalValue = value.loginMethod;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken = new ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }
  public putAnyValidServiceToken(value: ZeroTrustAccessApplicationPoliciesExcludeAnyValidServiceToken) {
    this._anyValidServiceToken.internalValue = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken.internalValue;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new ZeroTrustAccessApplicationPoliciesExcludeAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessApplicationPoliciesExcludeAuthContext) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new ZeroTrustAccessApplicationPoliciesExcludeAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: ZeroTrustAccessApplicationPoliciesExcludeAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new ZeroTrustAccessApplicationPoliciesExcludeAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: ZeroTrustAccessApplicationPoliciesExcludeAzureAd) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ZeroTrustAccessApplicationPoliciesExcludeCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustAccessApplicationPoliciesExcludeCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ZeroTrustAccessApplicationPoliciesExcludeCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ZeroTrustAccessApplicationPoliciesExcludeCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture = new ZeroTrustAccessApplicationPoliciesExcludeDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }
  public putDevicePosture(value: ZeroTrustAccessApplicationPoliciesExcludeDevicePosture) {
    this._devicePosture.internalValue = value;
  }
  public resetDevicePosture() {
    this._devicePosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ZeroTrustAccessApplicationPoliciesExcludeEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ZeroTrustAccessApplicationPoliciesExcludeEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain = new ZeroTrustAccessApplicationPoliciesExcludeEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }
  public putEmailDomain(value: ZeroTrustAccessApplicationPoliciesExcludeEmailDomain) {
    this._emailDomain.internalValue = value;
  }
  public resetEmailDomain() {
    this._emailDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain.internalValue;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList = new ZeroTrustAccessApplicationPoliciesExcludeEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }
  public putEmailList(value: ZeroTrustAccessApplicationPoliciesExcludeEmailListStruct) {
    this._emailList.internalValue = value;
  }
  public resetEmailList() {
    this._emailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList.internalValue;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone = new ZeroTrustAccessApplicationPoliciesExcludeEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }
  public putEveryone(value: ZeroTrustAccessApplicationPoliciesExcludeEveryone) {
    this._everyone.internalValue = value;
  }
  public resetEveryone() {
    this._everyone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessApplicationPoliciesExcludeExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new ZeroTrustAccessApplicationPoliciesExcludeGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: ZeroTrustAccessApplicationPoliciesExcludeGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // github_organization - computed: false, optional: true, required: false
  private _githubOrganization = new ZeroTrustAccessApplicationPoliciesExcludeGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }
  public putGithubOrganization(value: ZeroTrustAccessApplicationPoliciesExcludeGithubOrganization) {
    this._githubOrganization.internalValue = value;
  }
  public resetGithubOrganization() {
    this._githubOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ZeroTrustAccessApplicationPoliciesExcludeGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: ZeroTrustAccessApplicationPoliciesExcludeGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new ZeroTrustAccessApplicationPoliciesExcludeGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessApplicationPoliciesExcludeGsuite) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZeroTrustAccessApplicationPoliciesExcludeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessApplicationPoliciesExcludeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new ZeroTrustAccessApplicationPoliciesExcludeIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: ZeroTrustAccessApplicationPoliciesExcludeIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // linked_app_token - computed: false, optional: true, required: false
  private _linkedAppToken = new ZeroTrustAccessApplicationPoliciesExcludeLinkedAppTokenOutputReference(this, "linked_app_token");
  public get linkedAppToken() {
    return this._linkedAppToken;
  }
  public putLinkedAppToken(value: ZeroTrustAccessApplicationPoliciesExcludeLinkedAppToken) {
    this._linkedAppToken.internalValue = value;
  }
  public resetLinkedAppToken() {
    this._linkedAppToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAppTokenInput() {
    return this._linkedAppToken.internalValue;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod = new ZeroTrustAccessApplicationPoliciesExcludeLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }
  public putLoginMethod(value: ZeroTrustAccessApplicationPoliciesExcludeLoginMethod) {
    this._loginMethod.internalValue = value;
  }
  public resetLoginMethod() {
    this._loginMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ZeroTrustAccessApplicationPoliciesExcludeOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ZeroTrustAccessApplicationPoliciesExcludeOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ZeroTrustAccessApplicationPoliciesExcludeOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessApplicationPoliciesExcludeOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ZeroTrustAccessApplicationPoliciesExcludeSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessApplicationPoliciesExcludeSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new ZeroTrustAccessApplicationPoliciesExcludeServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: ZeroTrustAccessApplicationPoliciesExcludeServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

export class ZeroTrustAccessApplicationPoliciesExcludeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationPoliciesExclude[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationPoliciesExcludeOutputReference {
    return new ZeroTrustAccessApplicationPoliciesExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken {
}

export function zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAuthContext {
  /**
  * The ACID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ac_id ZeroTrustAccessApplication#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeAuthContextToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_id: cdktf.stringToTerraform(struct!.acId),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeAuthContextToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_id: {
      value: cdktf.stringToHclTerraform(struct!.acId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acId = this._acId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAuthContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acId = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acId = value.acId;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // ac_id - computed: false, optional: false, required: true
  private _acId?: string; 
  public get acId() {
    return this.getStringAttribute('ac_id');
  }
  public set acId(value: string) {
    this._acId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acIdInput() {
    return this._acId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAuthMethod {
  /**
  * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
  */
  readonly authMethod: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeAuthMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeAuthMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
    }
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeAzureAd {
  /**
  * The ID of an Azure group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeAzureAdToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeAzureAdToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeCertificate {
}

export function zeroTrustAccessApplicationPoliciesIncludeCertificateToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeCertificateToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeCommonName {
  /**
  * The common name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
  */
  readonly commonName: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeCommonNameToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeCommonNameToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeDevicePosture {
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#integration_uid ZeroTrustAccessApplication#integration_uid}
  */
  readonly integrationUid: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeDevicePostureToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_uid: cdktf.stringToTerraform(struct!.integrationUid),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeDevicePostureToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_uid: {
      value: cdktf.stringToHclTerraform(struct!.integrationUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUid = this._integrationUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationUid = value.integrationUid;
    }
  }

  // integration_uid - computed: false, optional: false, required: true
  private _integrationUid?: string; 
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
  public set integrationUid(value: string) {
    this._integrationUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUidInput() {
    return this._integrationUid;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEmail {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeEmailToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeEmailToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEmailDomain {
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
  */
  readonly domain: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeEmailDomainToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeEmailDomainToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
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
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct {
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeEmailListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeEmailListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeEveryone {
}

export function zeroTrustAccessApplicationPoliciesIncludeEveryoneToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeEveryoneToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeEveryone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#evaluate_url ZeroTrustAccessApplication#evaluate_url}
  */
  readonly evaluateUrl: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#keys_url ZeroTrustAccessApplication#keys_url}
  */
  readonly keysUrl: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_url: {
      value: cdktf.stringToHclTerraform(struct!.evaluateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys_url: {
      value: cdktf.stringToHclTerraform(struct!.keysUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateUrl = this._evaluateUrl;
    }
    if (this._keysUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysUrl = this._keysUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: false, required: true
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: false, required: true
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGeo {
  /**
  * The country code that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#country_code ZeroTrustAccessApplication#country_code}
  */
  readonly countryCode: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeGeoToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeGeoToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#team ZeroTrustAccessApplication#team}
  */
  readonly team?: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
      this._team = value.team;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGroup {
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeGroupToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeGroupToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email: string;
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeGsuiteToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeGsuiteToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeGsuite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeIp {
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
  */
  readonly ip: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeIpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeIpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeIpListStruct {
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeIpListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeIpListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken {
  /**
  * The ID of an Access OIDC SaaS application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#app_uid ZeroTrustAccessApplication#app_uid}
  */
  readonly appUid: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_uid: cdktf.stringToTerraform(struct!.appUid),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_uid: {
      value: cdktf.stringToHclTerraform(struct!.appUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUid = this._appUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appUid = value.appUid;
    }
  }

  // app_uid - computed: false, optional: false, required: true
  private _appUid?: string; 
  public get appUid() {
    return this.getStringAttribute('app_uid');
  }
  public set appUid(value: string) {
    this._appUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUidInput() {
    return this._appUid;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeLoginMethod {
  /**
  * The ID of an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeLoginMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeLoginMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeOidc {
  /**
  * The name of the OIDC claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#claim_name ZeroTrustAccessApplication#claim_name}
  */
  readonly claimName: string;
  /**
  * The OIDC claim value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#claim_value ZeroTrustAccessApplication#claim_value}
  */
  readonly claimValue: string;
  /**
  * The ID of your OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeOidcToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeOidcToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimValue = value.claimValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the Okta group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeOktaToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeOktaToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeOkta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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
}
export interface ZeroTrustAccessApplicationPoliciesIncludeSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#attribute_name ZeroTrustAccessApplication#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#attribute_value ZeroTrustAccessApplication#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeSamlToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeSamlToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesIncludeServiceToken {
  /**
  * The ID of a Service Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#token_id ZeroTrustAccessApplication#token_id}
  */
  readonly tokenId: string;
}

export function zeroTrustAccessApplicationPoliciesIncludeServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_id: cdktf.stringToTerraform(struct!.tokenId),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesIncludeServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenId = value.tokenId;
    }
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesInclude {
  /**
  * An empty object which matches on all service tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#any_valid_service_token ZeroTrustAccessApplication#any_valid_service_token}
  */
  readonly anyValidServiceToken?: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_context ZeroTrustAccessApplication#auth_context}
  */
  readonly authContext?: ZeroTrustAccessApplicationPoliciesIncludeAuthContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
  */
  readonly authMethod?: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#azure_ad ZeroTrustAccessApplication#azure_ad}
  */
  readonly azureAd?: ZeroTrustAccessApplicationPoliciesIncludeAzureAd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#certificate ZeroTrustAccessApplication#certificate}
  */
  readonly certificate?: ZeroTrustAccessApplicationPoliciesIncludeCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
  */
  readonly commonName?: ZeroTrustAccessApplicationPoliciesIncludeCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#device_posture ZeroTrustAccessApplication#device_posture}
  */
  readonly devicePosture?: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email?: ZeroTrustAccessApplicationPoliciesIncludeEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email_domain ZeroTrustAccessApplication#email_domain}
  */
  readonly emailDomain?: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email_list ZeroTrustAccessApplication#email_list}
  */
  readonly emailList?: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct;
  /**
  * An empty object which matches on all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#everyone ZeroTrustAccessApplication#everyone}
  */
  readonly everyone?: ZeroTrustAccessApplicationPoliciesIncludeEveryone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#external_evaluation ZeroTrustAccessApplication#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#geo ZeroTrustAccessApplication#geo}
  */
  readonly geo?: ZeroTrustAccessApplicationPoliciesIncludeGeo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#github_organization ZeroTrustAccessApplication#github_organization}
  */
  readonly githubOrganization?: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#group ZeroTrustAccessApplication#group}
  */
  readonly group?: ZeroTrustAccessApplicationPoliciesIncludeGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#gsuite ZeroTrustAccessApplication#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessApplicationPoliciesIncludeGsuite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
  */
  readonly ip?: ZeroTrustAccessApplicationPoliciesIncludeIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip_list ZeroTrustAccessApplication#ip_list}
  */
  readonly ipList?: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#linked_app_token ZeroTrustAccessApplication#linked_app_token}
  */
  readonly linkedAppToken?: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#login_method ZeroTrustAccessApplication#login_method}
  */
  readonly loginMethod?: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#oidc ZeroTrustAccessApplication#oidc}
  */
  readonly oidc?: ZeroTrustAccessApplicationPoliciesIncludeOidc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#okta ZeroTrustAccessApplication#okta}
  */
  readonly okta?: ZeroTrustAccessApplicationPoliciesIncludeOkta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#saml ZeroTrustAccessApplication#saml}
  */
  readonly saml?: ZeroTrustAccessApplicationPoliciesIncludeSaml;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#service_token ZeroTrustAccessApplication#service_token}
  */
  readonly serviceToken?: ZeroTrustAccessApplicationPoliciesIncludeServiceToken;
}

export function zeroTrustAccessApplicationPoliciesIncludeToTerraform(struct?: ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToTerraform(struct!.anyValidServiceToken),
    auth_context: zeroTrustAccessApplicationPoliciesIncludeAuthContextToTerraform(struct!.authContext),
    auth_method: zeroTrustAccessApplicationPoliciesIncludeAuthMethodToTerraform(struct!.authMethod),
    azure_ad: zeroTrustAccessApplicationPoliciesIncludeAzureAdToTerraform(struct!.azureAd),
    certificate: zeroTrustAccessApplicationPoliciesIncludeCertificateToTerraform(struct!.certificate),
    common_name: zeroTrustAccessApplicationPoliciesIncludeCommonNameToTerraform(struct!.commonName),
    device_posture: zeroTrustAccessApplicationPoliciesIncludeDevicePostureToTerraform(struct!.devicePosture),
    email: zeroTrustAccessApplicationPoliciesIncludeEmailToTerraform(struct!.email),
    email_domain: zeroTrustAccessApplicationPoliciesIncludeEmailDomainToTerraform(struct!.emailDomain),
    email_list: zeroTrustAccessApplicationPoliciesIncludeEmailListStructToTerraform(struct!.emailList),
    everyone: zeroTrustAccessApplicationPoliciesIncludeEveryoneToTerraform(struct!.everyone),
    external_evaluation: zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToTerraform(struct!.externalEvaluation),
    geo: zeroTrustAccessApplicationPoliciesIncludeGeoToTerraform(struct!.geo),
    github_organization: zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToTerraform(struct!.githubOrganization),
    group: zeroTrustAccessApplicationPoliciesIncludeGroupToTerraform(struct!.group),
    gsuite: zeroTrustAccessApplicationPoliciesIncludeGsuiteToTerraform(struct!.gsuite),
    ip: zeroTrustAccessApplicationPoliciesIncludeIpToTerraform(struct!.ip),
    ip_list: zeroTrustAccessApplicationPoliciesIncludeIpListStructToTerraform(struct!.ipList),
    linked_app_token: zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToTerraform(struct!.linkedAppToken),
    login_method: zeroTrustAccessApplicationPoliciesIncludeLoginMethodToTerraform(struct!.loginMethod),
    oidc: zeroTrustAccessApplicationPoliciesIncludeOidcToTerraform(struct!.oidc),
    okta: zeroTrustAccessApplicationPoliciesIncludeOktaToTerraform(struct!.okta),
    saml: zeroTrustAccessApplicationPoliciesIncludeSamlToTerraform(struct!.saml),
    service_token: zeroTrustAccessApplicationPoliciesIncludeServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function zeroTrustAccessApplicationPoliciesIncludeToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: zeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenToHclTerraform(struct!.anyValidServiceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken",
    },
    auth_context: {
      value: zeroTrustAccessApplicationPoliciesIncludeAuthContextToHclTerraform(struct!.authContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAuthContext",
    },
    auth_method: {
      value: zeroTrustAccessApplicationPoliciesIncludeAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAuthMethod",
    },
    azure_ad: {
      value: zeroTrustAccessApplicationPoliciesIncludeAzureAdToHclTerraform(struct!.azureAd),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeAzureAd",
    },
    certificate: {
      value: zeroTrustAccessApplicationPoliciesIncludeCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeCertificate",
    },
    common_name: {
      value: zeroTrustAccessApplicationPoliciesIncludeCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeCommonName",
    },
    device_posture: {
      value: zeroTrustAccessApplicationPoliciesIncludeDevicePostureToHclTerraform(struct!.devicePosture),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeDevicePosture",
    },
    email: {
      value: zeroTrustAccessApplicationPoliciesIncludeEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEmail",
    },
    email_domain: {
      value: zeroTrustAccessApplicationPoliciesIncludeEmailDomainToHclTerraform(struct!.emailDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEmailDomain",
    },
    email_list: {
      value: zeroTrustAccessApplicationPoliciesIncludeEmailListStructToHclTerraform(struct!.emailList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct",
    },
    everyone: {
      value: zeroTrustAccessApplicationPoliciesIncludeEveryoneToHclTerraform(struct!.everyone),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeEveryone",
    },
    external_evaluation: {
      value: zeroTrustAccessApplicationPoliciesIncludeExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation",
    },
    geo: {
      value: zeroTrustAccessApplicationPoliciesIncludeGeoToHclTerraform(struct!.geo),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGeo",
    },
    github_organization: {
      value: zeroTrustAccessApplicationPoliciesIncludeGithubOrganizationToHclTerraform(struct!.githubOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization",
    },
    group: {
      value: zeroTrustAccessApplicationPoliciesIncludeGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGroup",
    },
    gsuite: {
      value: zeroTrustAccessApplicationPoliciesIncludeGsuiteToHclTerraform(struct!.gsuite),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeGsuite",
    },
    ip: {
      value: zeroTrustAccessApplicationPoliciesIncludeIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeIp",
    },
    ip_list: {
      value: zeroTrustAccessApplicationPoliciesIncludeIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeIpListStruct",
    },
    linked_app_token: {
      value: zeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenToHclTerraform(struct!.linkedAppToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken",
    },
    login_method: {
      value: zeroTrustAccessApplicationPoliciesIncludeLoginMethodToHclTerraform(struct!.loginMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeLoginMethod",
    },
    oidc: {
      value: zeroTrustAccessApplicationPoliciesIncludeOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeOidc",
    },
    okta: {
      value: zeroTrustAccessApplicationPoliciesIncludeOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeOkta",
    },
    saml: {
      value: zeroTrustAccessApplicationPoliciesIncludeSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeSaml",
    },
    service_token: {
      value: zeroTrustAccessApplicationPoliciesIncludeServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeServiceToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._azureAd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAd = this._azureAd?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._devicePosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._emailDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain?.internalValue;
    }
    if (this._emailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList?.internalValue;
    }
    if (this._everyone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._githubOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._linkedAppToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
    }
    if (this._loginMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = undefined;
      this._authContext.internalValue = undefined;
      this._authMethod.internalValue = undefined;
      this._azureAd.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._commonName.internalValue = undefined;
      this._devicePosture.internalValue = undefined;
      this._email.internalValue = undefined;
      this._emailDomain.internalValue = undefined;
      this._emailList.internalValue = undefined;
      this._everyone.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._geo.internalValue = undefined;
      this._githubOrganization.internalValue = undefined;
      this._group.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._linkedAppToken.internalValue = undefined;
      this._loginMethod.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
      this._authContext.internalValue = value.authContext;
      this._authMethod.internalValue = value.authMethod;
      this._azureAd.internalValue = value.azureAd;
      this._certificate.internalValue = value.certificate;
      this._commonName.internalValue = value.commonName;
      this._devicePosture.internalValue = value.devicePosture;
      this._email.internalValue = value.email;
      this._emailDomain.internalValue = value.emailDomain;
      this._emailList.internalValue = value.emailList;
      this._everyone.internalValue = value.everyone;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._geo.internalValue = value.geo;
      this._githubOrganization.internalValue = value.githubOrganization;
      this._group.internalValue = value.group;
      this._gsuite.internalValue = value.gsuite;
      this._ip.internalValue = value.ip;
      this._ipList.internalValue = value.ipList;
      this._linkedAppToken.internalValue = value.linkedAppToken;
      this._loginMethod.internalValue = value.loginMethod;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken = new ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }
  public putAnyValidServiceToken(value: ZeroTrustAccessApplicationPoliciesIncludeAnyValidServiceToken) {
    this._anyValidServiceToken.internalValue = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken.internalValue;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new ZeroTrustAccessApplicationPoliciesIncludeAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessApplicationPoliciesIncludeAuthContext) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new ZeroTrustAccessApplicationPoliciesIncludeAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: ZeroTrustAccessApplicationPoliciesIncludeAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new ZeroTrustAccessApplicationPoliciesIncludeAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: ZeroTrustAccessApplicationPoliciesIncludeAzureAd) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ZeroTrustAccessApplicationPoliciesIncludeCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustAccessApplicationPoliciesIncludeCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ZeroTrustAccessApplicationPoliciesIncludeCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ZeroTrustAccessApplicationPoliciesIncludeCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture = new ZeroTrustAccessApplicationPoliciesIncludeDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }
  public putDevicePosture(value: ZeroTrustAccessApplicationPoliciesIncludeDevicePosture) {
    this._devicePosture.internalValue = value;
  }
  public resetDevicePosture() {
    this._devicePosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ZeroTrustAccessApplicationPoliciesIncludeEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ZeroTrustAccessApplicationPoliciesIncludeEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain = new ZeroTrustAccessApplicationPoliciesIncludeEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }
  public putEmailDomain(value: ZeroTrustAccessApplicationPoliciesIncludeEmailDomain) {
    this._emailDomain.internalValue = value;
  }
  public resetEmailDomain() {
    this._emailDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain.internalValue;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList = new ZeroTrustAccessApplicationPoliciesIncludeEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }
  public putEmailList(value: ZeroTrustAccessApplicationPoliciesIncludeEmailListStruct) {
    this._emailList.internalValue = value;
  }
  public resetEmailList() {
    this._emailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList.internalValue;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone = new ZeroTrustAccessApplicationPoliciesIncludeEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }
  public putEveryone(value: ZeroTrustAccessApplicationPoliciesIncludeEveryone) {
    this._everyone.internalValue = value;
  }
  public resetEveryone() {
    this._everyone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessApplicationPoliciesIncludeExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new ZeroTrustAccessApplicationPoliciesIncludeGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: ZeroTrustAccessApplicationPoliciesIncludeGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // github_organization - computed: false, optional: true, required: false
  private _githubOrganization = new ZeroTrustAccessApplicationPoliciesIncludeGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }
  public putGithubOrganization(value: ZeroTrustAccessApplicationPoliciesIncludeGithubOrganization) {
    this._githubOrganization.internalValue = value;
  }
  public resetGithubOrganization() {
    this._githubOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ZeroTrustAccessApplicationPoliciesIncludeGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: ZeroTrustAccessApplicationPoliciesIncludeGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new ZeroTrustAccessApplicationPoliciesIncludeGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessApplicationPoliciesIncludeGsuite) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZeroTrustAccessApplicationPoliciesIncludeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessApplicationPoliciesIncludeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new ZeroTrustAccessApplicationPoliciesIncludeIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: ZeroTrustAccessApplicationPoliciesIncludeIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // linked_app_token - computed: false, optional: true, required: false
  private _linkedAppToken = new ZeroTrustAccessApplicationPoliciesIncludeLinkedAppTokenOutputReference(this, "linked_app_token");
  public get linkedAppToken() {
    return this._linkedAppToken;
  }
  public putLinkedAppToken(value: ZeroTrustAccessApplicationPoliciesIncludeLinkedAppToken) {
    this._linkedAppToken.internalValue = value;
  }
  public resetLinkedAppToken() {
    this._linkedAppToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAppTokenInput() {
    return this._linkedAppToken.internalValue;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod = new ZeroTrustAccessApplicationPoliciesIncludeLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }
  public putLoginMethod(value: ZeroTrustAccessApplicationPoliciesIncludeLoginMethod) {
    this._loginMethod.internalValue = value;
  }
  public resetLoginMethod() {
    this._loginMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ZeroTrustAccessApplicationPoliciesIncludeOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ZeroTrustAccessApplicationPoliciesIncludeOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ZeroTrustAccessApplicationPoliciesIncludeOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessApplicationPoliciesIncludeOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ZeroTrustAccessApplicationPoliciesIncludeSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessApplicationPoliciesIncludeSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new ZeroTrustAccessApplicationPoliciesIncludeServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: ZeroTrustAccessApplicationPoliciesIncludeServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

export class ZeroTrustAccessApplicationPoliciesIncludeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationPoliciesInclude[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationPoliciesIncludeOutputReference {
    return new ZeroTrustAccessApplicationPoliciesIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken {
}

export function zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireAuthContext {
  /**
  * The ACID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ac_id ZeroTrustAccessApplication#ac_id}
  */
  readonly acId: string;
  /**
  * The ID of an Authentication context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesRequireAuthContextToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_id: cdktf.stringToTerraform(struct!.acId),
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireAuthContextToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_id: {
      value: cdktf.stringToHclTerraform(struct!.acId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acId = this._acId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAuthContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acId = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acId = value.acId;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // ac_id - computed: false, optional: false, required: true
  private _acId?: string; 
  public get acId() {
    return this.getStringAttribute('ac_id');
  }
  public set acId(value: string) {
    this._acId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acIdInput() {
    return this._acId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireAuthMethod {
  /**
  * The type of authentication method https://datatracker.ietf.org/doc/html/rfc8176#section-2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
  */
  readonly authMethod: string;
}

export function zeroTrustAccessApplicationPoliciesRequireAuthMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireAuthMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
    }
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireAzureAd {
  /**
  * The ID of an Azure group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of your Azure identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesRequireAzureAdToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireAzureAdToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireCertificate {
}

export function zeroTrustAccessApplicationPoliciesRequireCertificateToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesRequireCertificateToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireCommonName {
  /**
  * The common name to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
  */
  readonly commonName: string;
}

export function zeroTrustAccessApplicationPoliciesRequireCommonNameToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireCommonNameToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireCommonName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireDevicePosture {
  /**
  * The ID of a device posture integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#integration_uid ZeroTrustAccessApplication#integration_uid}
  */
  readonly integrationUid: string;
}

export function zeroTrustAccessApplicationPoliciesRequireDevicePostureToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_uid: cdktf.stringToTerraform(struct!.integrationUid),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireDevicePostureToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_uid: {
      value: cdktf.stringToHclTerraform(struct!.integrationUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationUid = this._integrationUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireDevicePosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationUid = value.integrationUid;
    }
  }

  // integration_uid - computed: false, optional: false, required: true
  private _integrationUid?: string; 
  public get integrationUid() {
    return this.getStringAttribute('integration_uid');
  }
  public set integrationUid(value: string) {
    this._integrationUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUidInput() {
    return this._integrationUid;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireEmail {
  /**
  * The email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email: string;
}

export function zeroTrustAccessApplicationPoliciesRequireEmailToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireEmailToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireEmailDomain {
  /**
  * The email domain to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
  */
  readonly domain: string;
}

export function zeroTrustAccessApplicationPoliciesRequireEmailDomainToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireEmailDomainToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEmailDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
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
}
export interface ZeroTrustAccessApplicationPoliciesRequireEmailListStruct {
  /**
  * The ID of a previously created email list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesRequireEmailListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireEmailListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireEveryone {
}

export function zeroTrustAccessApplicationPoliciesRequireEveryoneToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustAccessApplicationPoliciesRequireEveryoneToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireEveryone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation {
  /**
  * The API endpoint containing your business logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#evaluate_url ZeroTrustAccessApplication#evaluate_url}
  */
  readonly evaluateUrl: string;
  /**
  * The API endpoint containing the key that Access uses to verify that the response came from your API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#keys_url ZeroTrustAccessApplication#keys_url}
  */
  readonly keysUrl: string;
}

export function zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_url: cdktf.stringToTerraform(struct!.evaluateUrl),
    keys_url: cdktf.stringToTerraform(struct!.keysUrl),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluate_url: {
      value: cdktf.stringToHclTerraform(struct!.evaluateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys_url: {
      value: cdktf.stringToHclTerraform(struct!.keysUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateUrl = this._evaluateUrl;
    }
    if (this._keysUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keysUrl = this._keysUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluateUrl = undefined;
      this._keysUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluateUrl = value.evaluateUrl;
      this._keysUrl = value.keysUrl;
    }
  }

  // evaluate_url - computed: false, optional: false, required: true
  private _evaluateUrl?: string; 
  public get evaluateUrl() {
    return this.getStringAttribute('evaluate_url');
  }
  public set evaluateUrl(value: string) {
    this._evaluateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateUrlInput() {
    return this._evaluateUrl;
  }

  // keys_url - computed: false, optional: false, required: true
  private _keysUrl?: string; 
  public get keysUrl() {
    return this.getStringAttribute('keys_url');
  }
  public set keysUrl(value: string) {
    this._keysUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysUrlInput() {
    return this._keysUrl;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireGeo {
  /**
  * The country code that should be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#country_code ZeroTrustAccessApplication#country_code}
  */
  readonly countryCode: string;
}

export function zeroTrustAccessApplicationPoliciesRequireGeoToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_code: cdktf.stringToTerraform(struct!.countryCode),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireGeoToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireGeoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCode = value.countryCode;
    }
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireGithubOrganization {
  /**
  * The ID of your Github identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * The name of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#team ZeroTrustAccessApplication#team}
  */
  readonly team?: string;
}

export function zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    team: cdktf.stringToTerraform(struct!.team),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team: {
      value: cdktf.stringToHclTerraform(struct!.team),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._team !== undefined) {
      hasAnyValues = true;
      internalValueResult.team = this._team;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
      this._team = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
      this._team = value.team;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireGroup {
  /**
  * The ID of a previously created Access group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesRequireGroupToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireGroupToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireGsuite {
  /**
  * The email of the Google Workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email: string;
  /**
  * The ID of your Google Workspace identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesRequireGsuiteToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireGsuiteToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireGsuite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireIp {
  /**
  * An IPv4 or IPv6 CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
  */
  readonly ip: string;
}

export function zeroTrustAccessApplicationPoliciesRequireIpToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireIpToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireIpListStruct {
  /**
  * The ID of a previously created IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesRequireIpListStructToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireIpListStructToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken {
  /**
  * The ID of an Access OIDC SaaS application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#app_uid ZeroTrustAccessApplication#app_uid}
  */
  readonly appUid: string;
}

export function zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_uid: cdktf.stringToTerraform(struct!.appUid),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_uid: {
      value: cdktf.stringToHclTerraform(struct!.appUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUid = this._appUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appUid = value.appUid;
    }
  }

  // app_uid - computed: false, optional: false, required: true
  private _appUid?: string; 
  public get appUid() {
    return this.getStringAttribute('app_uid');
  }
  public set appUid(value: string) {
    this._appUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUidInput() {
    return this._appUid;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireLoginMethod {
  /**
  * The ID of an identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function zeroTrustAccessApplicationPoliciesRequireLoginMethodToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireLoginMethodToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireLoginMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireOidc {
  /**
  * The name of the OIDC claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#claim_name ZeroTrustAccessApplication#claim_name}
  */
  readonly claimName: string;
  /**
  * The OIDC claim value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#claim_value ZeroTrustAccessApplication#claim_value}
  */
  readonly claimValue: string;
  /**
  * The ID of your OIDC identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesRequireOidcToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    claim_value: cdktf.stringToTerraform(struct!.claimValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireOidcToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_value: {
      value: cdktf.stringToHclTerraform(struct!.claimValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._claimValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimValue = this._claimValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._claimValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._claimValue = value.claimValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // claim_value - computed: false, optional: false, required: true
  private _claimValue?: string; 
  public get claimValue() {
    return this.getStringAttribute('claim_value');
  }
  public set claimValue(value: string) {
    this._claimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimValueInput() {
    return this._claimValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireOkta {
  /**
  * The ID of your Okta identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * The name of the Okta group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
}

export function zeroTrustAccessApplicationPoliciesRequireOktaToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireOktaToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireOktaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireOkta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityProviderId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityProviderId = value.identityProviderId;
      this._name = value.name;
    }
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
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
}
export interface ZeroTrustAccessApplicationPoliciesRequireSaml {
  /**
  * The name of the SAML attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#attribute_name ZeroTrustAccessApplication#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The SAML attribute value to look for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#attribute_value ZeroTrustAccessApplication#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The ID of your SAML identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#identity_provider_id ZeroTrustAccessApplication#identity_provider_id}
  */
  readonly identityProviderId: string;
}

export function zeroTrustAccessApplicationPoliciesRequireSamlToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireSamlToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._identityProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderId = this._identityProviderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._identityProviderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._identityProviderId = value.identityProviderId;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequireServiceToken {
  /**
  * The ID of a Service Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#token_id ZeroTrustAccessApplication#token_id}
  */
  readonly tokenId: string;
}

export function zeroTrustAccessApplicationPoliciesRequireServiceTokenToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_id: cdktf.stringToTerraform(struct!.tokenId),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireServiceTokenToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequireServiceToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenId = value.tokenId;
    }
  }

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }
}
export interface ZeroTrustAccessApplicationPoliciesRequire {
  /**
  * An empty object which matches on all service tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#any_valid_service_token ZeroTrustAccessApplication#any_valid_service_token}
  */
  readonly anyValidServiceToken?: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_context ZeroTrustAccessApplication#auth_context}
  */
  readonly authContext?: ZeroTrustAccessApplicationPoliciesRequireAuthContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_method ZeroTrustAccessApplication#auth_method}
  */
  readonly authMethod?: ZeroTrustAccessApplicationPoliciesRequireAuthMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#azure_ad ZeroTrustAccessApplication#azure_ad}
  */
  readonly azureAd?: ZeroTrustAccessApplicationPoliciesRequireAzureAd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#certificate ZeroTrustAccessApplication#certificate}
  */
  readonly certificate?: ZeroTrustAccessApplicationPoliciesRequireCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#common_name ZeroTrustAccessApplication#common_name}
  */
  readonly commonName?: ZeroTrustAccessApplicationPoliciesRequireCommonName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#device_posture ZeroTrustAccessApplication#device_posture}
  */
  readonly devicePosture?: ZeroTrustAccessApplicationPoliciesRequireDevicePosture;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email ZeroTrustAccessApplication#email}
  */
  readonly email?: ZeroTrustAccessApplicationPoliciesRequireEmail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email_domain ZeroTrustAccessApplication#email_domain}
  */
  readonly emailDomain?: ZeroTrustAccessApplicationPoliciesRequireEmailDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#email_list ZeroTrustAccessApplication#email_list}
  */
  readonly emailList?: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct;
  /**
  * An empty object which matches on all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#everyone ZeroTrustAccessApplication#everyone}
  */
  readonly everyone?: ZeroTrustAccessApplicationPoliciesRequireEveryone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#external_evaluation ZeroTrustAccessApplication#external_evaluation}
  */
  readonly externalEvaluation?: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#geo ZeroTrustAccessApplication#geo}
  */
  readonly geo?: ZeroTrustAccessApplicationPoliciesRequireGeo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#github_organization ZeroTrustAccessApplication#github_organization}
  */
  readonly githubOrganization?: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#group ZeroTrustAccessApplication#group}
  */
  readonly group?: ZeroTrustAccessApplicationPoliciesRequireGroup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#gsuite ZeroTrustAccessApplication#gsuite}
  */
  readonly gsuite?: ZeroTrustAccessApplicationPoliciesRequireGsuite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip ZeroTrustAccessApplication#ip}
  */
  readonly ip?: ZeroTrustAccessApplicationPoliciesRequireIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#ip_list ZeroTrustAccessApplication#ip_list}
  */
  readonly ipList?: ZeroTrustAccessApplicationPoliciesRequireIpListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#linked_app_token ZeroTrustAccessApplication#linked_app_token}
  */
  readonly linkedAppToken?: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#login_method ZeroTrustAccessApplication#login_method}
  */
  readonly loginMethod?: ZeroTrustAccessApplicationPoliciesRequireLoginMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#oidc ZeroTrustAccessApplication#oidc}
  */
  readonly oidc?: ZeroTrustAccessApplicationPoliciesRequireOidc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#okta ZeroTrustAccessApplication#okta}
  */
  readonly okta?: ZeroTrustAccessApplicationPoliciesRequireOkta;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#saml ZeroTrustAccessApplication#saml}
  */
  readonly saml?: ZeroTrustAccessApplicationPoliciesRequireSaml;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#service_token ZeroTrustAccessApplication#service_token}
  */
  readonly serviceToken?: ZeroTrustAccessApplicationPoliciesRequireServiceToken;
}

export function zeroTrustAccessApplicationPoliciesRequireToTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_valid_service_token: zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToTerraform(struct!.anyValidServiceToken),
    auth_context: zeroTrustAccessApplicationPoliciesRequireAuthContextToTerraform(struct!.authContext),
    auth_method: zeroTrustAccessApplicationPoliciesRequireAuthMethodToTerraform(struct!.authMethod),
    azure_ad: zeroTrustAccessApplicationPoliciesRequireAzureAdToTerraform(struct!.azureAd),
    certificate: zeroTrustAccessApplicationPoliciesRequireCertificateToTerraform(struct!.certificate),
    common_name: zeroTrustAccessApplicationPoliciesRequireCommonNameToTerraform(struct!.commonName),
    device_posture: zeroTrustAccessApplicationPoliciesRequireDevicePostureToTerraform(struct!.devicePosture),
    email: zeroTrustAccessApplicationPoliciesRequireEmailToTerraform(struct!.email),
    email_domain: zeroTrustAccessApplicationPoliciesRequireEmailDomainToTerraform(struct!.emailDomain),
    email_list: zeroTrustAccessApplicationPoliciesRequireEmailListStructToTerraform(struct!.emailList),
    everyone: zeroTrustAccessApplicationPoliciesRequireEveryoneToTerraform(struct!.everyone),
    external_evaluation: zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToTerraform(struct!.externalEvaluation),
    geo: zeroTrustAccessApplicationPoliciesRequireGeoToTerraform(struct!.geo),
    github_organization: zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToTerraform(struct!.githubOrganization),
    group: zeroTrustAccessApplicationPoliciesRequireGroupToTerraform(struct!.group),
    gsuite: zeroTrustAccessApplicationPoliciesRequireGsuiteToTerraform(struct!.gsuite),
    ip: zeroTrustAccessApplicationPoliciesRequireIpToTerraform(struct!.ip),
    ip_list: zeroTrustAccessApplicationPoliciesRequireIpListStructToTerraform(struct!.ipList),
    linked_app_token: zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToTerraform(struct!.linkedAppToken),
    login_method: zeroTrustAccessApplicationPoliciesRequireLoginMethodToTerraform(struct!.loginMethod),
    oidc: zeroTrustAccessApplicationPoliciesRequireOidcToTerraform(struct!.oidc),
    okta: zeroTrustAccessApplicationPoliciesRequireOktaToTerraform(struct!.okta),
    saml: zeroTrustAccessApplicationPoliciesRequireSamlToTerraform(struct!.saml),
    service_token: zeroTrustAccessApplicationPoliciesRequireServiceTokenToTerraform(struct!.serviceToken),
  }
}


export function zeroTrustAccessApplicationPoliciesRequireToHclTerraform(struct?: ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_valid_service_token: {
      value: zeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenToHclTerraform(struct!.anyValidServiceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken",
    },
    auth_context: {
      value: zeroTrustAccessApplicationPoliciesRequireAuthContextToHclTerraform(struct!.authContext),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAuthContext",
    },
    auth_method: {
      value: zeroTrustAccessApplicationPoliciesRequireAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAuthMethod",
    },
    azure_ad: {
      value: zeroTrustAccessApplicationPoliciesRequireAzureAdToHclTerraform(struct!.azureAd),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireAzureAd",
    },
    certificate: {
      value: zeroTrustAccessApplicationPoliciesRequireCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireCertificate",
    },
    common_name: {
      value: zeroTrustAccessApplicationPoliciesRequireCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireCommonName",
    },
    device_posture: {
      value: zeroTrustAccessApplicationPoliciesRequireDevicePostureToHclTerraform(struct!.devicePosture),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireDevicePosture",
    },
    email: {
      value: zeroTrustAccessApplicationPoliciesRequireEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEmail",
    },
    email_domain: {
      value: zeroTrustAccessApplicationPoliciesRequireEmailDomainToHclTerraform(struct!.emailDomain),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEmailDomain",
    },
    email_list: {
      value: zeroTrustAccessApplicationPoliciesRequireEmailListStructToHclTerraform(struct!.emailList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEmailListStruct",
    },
    everyone: {
      value: zeroTrustAccessApplicationPoliciesRequireEveryoneToHclTerraform(struct!.everyone),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireEveryone",
    },
    external_evaluation: {
      value: zeroTrustAccessApplicationPoliciesRequireExternalEvaluationToHclTerraform(struct!.externalEvaluation),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation",
    },
    geo: {
      value: zeroTrustAccessApplicationPoliciesRequireGeoToHclTerraform(struct!.geo),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGeo",
    },
    github_organization: {
      value: zeroTrustAccessApplicationPoliciesRequireGithubOrganizationToHclTerraform(struct!.githubOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGithubOrganization",
    },
    group: {
      value: zeroTrustAccessApplicationPoliciesRequireGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGroup",
    },
    gsuite: {
      value: zeroTrustAccessApplicationPoliciesRequireGsuiteToHclTerraform(struct!.gsuite),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireGsuite",
    },
    ip: {
      value: zeroTrustAccessApplicationPoliciesRequireIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireIp",
    },
    ip_list: {
      value: zeroTrustAccessApplicationPoliciesRequireIpListStructToHclTerraform(struct!.ipList),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireIpListStruct",
    },
    linked_app_token: {
      value: zeroTrustAccessApplicationPoliciesRequireLinkedAppTokenToHclTerraform(struct!.linkedAppToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken",
    },
    login_method: {
      value: zeroTrustAccessApplicationPoliciesRequireLoginMethodToHclTerraform(struct!.loginMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireLoginMethod",
    },
    oidc: {
      value: zeroTrustAccessApplicationPoliciesRequireOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireOidc",
    },
    okta: {
      value: zeroTrustAccessApplicationPoliciesRequireOktaToHclTerraform(struct!.okta),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireOkta",
    },
    saml: {
      value: zeroTrustAccessApplicationPoliciesRequireSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireSaml",
    },
    service_token: {
      value: zeroTrustAccessApplicationPoliciesRequireServiceTokenToHclTerraform(struct!.serviceToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireServiceToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesRequireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyValidServiceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyValidServiceToken = this._anyValidServiceToken?.internalValue;
    }
    if (this._authContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authContext = this._authContext?.internalValue;
    }
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._azureAd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAd = this._azureAd?.internalValue;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    if (this._devicePosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePosture = this._devicePosture?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._emailDomain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailDomain = this._emailDomain?.internalValue;
    }
    if (this._emailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList?.internalValue;
    }
    if (this._everyone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyone = this._everyone?.internalValue;
    }
    if (this._externalEvaluation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalEvaluation = this._externalEvaluation?.internalValue;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._githubOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrganization = this._githubOrganization?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._gsuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsuite = this._gsuite?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._linkedAppToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedAppToken = this._linkedAppToken?.internalValue;
    }
    if (this._loginMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMethod = this._loginMethod?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._okta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.okta = this._okta?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._serviceToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToken = this._serviceToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPoliciesRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = undefined;
      this._authContext.internalValue = undefined;
      this._authMethod.internalValue = undefined;
      this._azureAd.internalValue = undefined;
      this._certificate.internalValue = undefined;
      this._commonName.internalValue = undefined;
      this._devicePosture.internalValue = undefined;
      this._email.internalValue = undefined;
      this._emailDomain.internalValue = undefined;
      this._emailList.internalValue = undefined;
      this._everyone.internalValue = undefined;
      this._externalEvaluation.internalValue = undefined;
      this._geo.internalValue = undefined;
      this._githubOrganization.internalValue = undefined;
      this._group.internalValue = undefined;
      this._gsuite.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._linkedAppToken.internalValue = undefined;
      this._loginMethod.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._okta.internalValue = undefined;
      this._saml.internalValue = undefined;
      this._serviceToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyValidServiceToken.internalValue = value.anyValidServiceToken;
      this._authContext.internalValue = value.authContext;
      this._authMethod.internalValue = value.authMethod;
      this._azureAd.internalValue = value.azureAd;
      this._certificate.internalValue = value.certificate;
      this._commonName.internalValue = value.commonName;
      this._devicePosture.internalValue = value.devicePosture;
      this._email.internalValue = value.email;
      this._emailDomain.internalValue = value.emailDomain;
      this._emailList.internalValue = value.emailList;
      this._everyone.internalValue = value.everyone;
      this._externalEvaluation.internalValue = value.externalEvaluation;
      this._geo.internalValue = value.geo;
      this._githubOrganization.internalValue = value.githubOrganization;
      this._group.internalValue = value.group;
      this._gsuite.internalValue = value.gsuite;
      this._ip.internalValue = value.ip;
      this._ipList.internalValue = value.ipList;
      this._linkedAppToken.internalValue = value.linkedAppToken;
      this._loginMethod.internalValue = value.loginMethod;
      this._oidc.internalValue = value.oidc;
      this._okta.internalValue = value.okta;
      this._saml.internalValue = value.saml;
      this._serviceToken.internalValue = value.serviceToken;
    }
  }

  // any_valid_service_token - computed: false, optional: true, required: false
  private _anyValidServiceToken = new ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceTokenOutputReference(this, "any_valid_service_token");
  public get anyValidServiceToken() {
    return this._anyValidServiceToken;
  }
  public putAnyValidServiceToken(value: ZeroTrustAccessApplicationPoliciesRequireAnyValidServiceToken) {
    this._anyValidServiceToken.internalValue = value;
  }
  public resetAnyValidServiceToken() {
    this._anyValidServiceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyValidServiceTokenInput() {
    return this._anyValidServiceToken.internalValue;
  }

  // auth_context - computed: false, optional: true, required: false
  private _authContext = new ZeroTrustAccessApplicationPoliciesRequireAuthContextOutputReference(this, "auth_context");
  public get authContext() {
    return this._authContext;
  }
  public putAuthContext(value: ZeroTrustAccessApplicationPoliciesRequireAuthContext) {
    this._authContext.internalValue = value;
  }
  public resetAuthContext() {
    this._authContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authContextInput() {
    return this._authContext.internalValue;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new ZeroTrustAccessApplicationPoliciesRequireAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: ZeroTrustAccessApplicationPoliciesRequireAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new ZeroTrustAccessApplicationPoliciesRequireAzureAdOutputReference(this, "azure_ad");
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: ZeroTrustAccessApplicationPoliciesRequireAzureAd) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new ZeroTrustAccessApplicationPoliciesRequireCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ZeroTrustAccessApplicationPoliciesRequireCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ZeroTrustAccessApplicationPoliciesRequireCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ZeroTrustAccessApplicationPoliciesRequireCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }

  // device_posture - computed: false, optional: true, required: false
  private _devicePosture = new ZeroTrustAccessApplicationPoliciesRequireDevicePostureOutputReference(this, "device_posture");
  public get devicePosture() {
    return this._devicePosture;
  }
  public putDevicePosture(value: ZeroTrustAccessApplicationPoliciesRequireDevicePosture) {
    this._devicePosture.internalValue = value;
  }
  public resetDevicePosture() {
    this._devicePosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureInput() {
    return this._devicePosture.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ZeroTrustAccessApplicationPoliciesRequireEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ZeroTrustAccessApplicationPoliciesRequireEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // email_domain - computed: false, optional: true, required: false
  private _emailDomain = new ZeroTrustAccessApplicationPoliciesRequireEmailDomainOutputReference(this, "email_domain");
  public get emailDomain() {
    return this._emailDomain;
  }
  public putEmailDomain(value: ZeroTrustAccessApplicationPoliciesRequireEmailDomain) {
    this._emailDomain.internalValue = value;
  }
  public resetEmailDomain() {
    this._emailDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain.internalValue;
  }

  // email_list - computed: false, optional: true, required: false
  private _emailList = new ZeroTrustAccessApplicationPoliciesRequireEmailListStructOutputReference(this, "email_list");
  public get emailList() {
    return this._emailList;
  }
  public putEmailList(value: ZeroTrustAccessApplicationPoliciesRequireEmailListStruct) {
    this._emailList.internalValue = value;
  }
  public resetEmailList() {
    this._emailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList.internalValue;
  }

  // everyone - computed: false, optional: true, required: false
  private _everyone = new ZeroTrustAccessApplicationPoliciesRequireEveryoneOutputReference(this, "everyone");
  public get everyone() {
    return this._everyone;
  }
  public putEveryone(value: ZeroTrustAccessApplicationPoliciesRequireEveryone) {
    this._everyone.internalValue = value;
  }
  public resetEveryone() {
    this._everyone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyoneInput() {
    return this._everyone.internalValue;
  }

  // external_evaluation - computed: false, optional: true, required: false
  private _externalEvaluation = new ZeroTrustAccessApplicationPoliciesRequireExternalEvaluationOutputReference(this, "external_evaluation");
  public get externalEvaluation() {
    return this._externalEvaluation;
  }
  public putExternalEvaluation(value: ZeroTrustAccessApplicationPoliciesRequireExternalEvaluation) {
    this._externalEvaluation.internalValue = value;
  }
  public resetExternalEvaluation() {
    this._externalEvaluation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEvaluationInput() {
    return this._externalEvaluation.internalValue;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new ZeroTrustAccessApplicationPoliciesRequireGeoOutputReference(this, "geo");
  public get geo() {
    return this._geo;
  }
  public putGeo(value: ZeroTrustAccessApplicationPoliciesRequireGeo) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // github_organization - computed: false, optional: true, required: false
  private _githubOrganization = new ZeroTrustAccessApplicationPoliciesRequireGithubOrganizationOutputReference(this, "github_organization");
  public get githubOrganization() {
    return this._githubOrganization;
  }
  public putGithubOrganization(value: ZeroTrustAccessApplicationPoliciesRequireGithubOrganization) {
    this._githubOrganization.internalValue = value;
  }
  public resetGithubOrganization() {
    this._githubOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationInput() {
    return this._githubOrganization.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new ZeroTrustAccessApplicationPoliciesRequireGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: ZeroTrustAccessApplicationPoliciesRequireGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // gsuite - computed: false, optional: true, required: false
  private _gsuite = new ZeroTrustAccessApplicationPoliciesRequireGsuiteOutputReference(this, "gsuite");
  public get gsuite() {
    return this._gsuite;
  }
  public putGsuite(value: ZeroTrustAccessApplicationPoliciesRequireGsuite) {
    this._gsuite.internalValue = value;
  }
  public resetGsuite() {
    this._gsuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsuiteInput() {
    return this._gsuite.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZeroTrustAccessApplicationPoliciesRequireIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZeroTrustAccessApplicationPoliciesRequireIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new ZeroTrustAccessApplicationPoliciesRequireIpListStructOutputReference(this, "ip_list");
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: ZeroTrustAccessApplicationPoliciesRequireIpListStruct) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // linked_app_token - computed: false, optional: true, required: false
  private _linkedAppToken = new ZeroTrustAccessApplicationPoliciesRequireLinkedAppTokenOutputReference(this, "linked_app_token");
  public get linkedAppToken() {
    return this._linkedAppToken;
  }
  public putLinkedAppToken(value: ZeroTrustAccessApplicationPoliciesRequireLinkedAppToken) {
    this._linkedAppToken.internalValue = value;
  }
  public resetLinkedAppToken() {
    this._linkedAppToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedAppTokenInput() {
    return this._linkedAppToken.internalValue;
  }

  // login_method - computed: false, optional: true, required: false
  private _loginMethod = new ZeroTrustAccessApplicationPoliciesRequireLoginMethodOutputReference(this, "login_method");
  public get loginMethod() {
    return this._loginMethod;
  }
  public putLoginMethod(value: ZeroTrustAccessApplicationPoliciesRequireLoginMethod) {
    this._loginMethod.internalValue = value;
  }
  public resetLoginMethod() {
    this._loginMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMethodInput() {
    return this._loginMethod.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new ZeroTrustAccessApplicationPoliciesRequireOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: ZeroTrustAccessApplicationPoliciesRequireOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ZeroTrustAccessApplicationPoliciesRequireOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ZeroTrustAccessApplicationPoliciesRequireOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ZeroTrustAccessApplicationPoliciesRequireSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ZeroTrustAccessApplicationPoliciesRequireSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // service_token - computed: false, optional: true, required: false
  private _serviceToken = new ZeroTrustAccessApplicationPoliciesRequireServiceTokenOutputReference(this, "service_token");
  public get serviceToken() {
    return this._serviceToken;
  }
  public putServiceToken(value: ZeroTrustAccessApplicationPoliciesRequireServiceToken) {
    this._serviceToken.internalValue = value;
  }
  public resetServiceToken() {
    this._serviceToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenInput() {
    return this._serviceToken.internalValue;
  }
}

export class ZeroTrustAccessApplicationPoliciesRequireList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationPoliciesRequire[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationPoliciesRequireOutputReference {
    return new ZeroTrustAccessApplicationPoliciesRequireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationPolicies {
  /**
  * The rules that define how users may connect to the targets secured by your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#connection_rules ZeroTrustAccessApplication#connection_rules}
  */
  readonly connectionRules?: ZeroTrustAccessApplicationPoliciesConnectionRules;
  /**
  * The action Access will take if a user matches this policy. Infrastructure application policies can only use the Allow action.
  * Available values: "allow", "deny", "non_identity", "bypass".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#decision ZeroTrustAccessApplication#decision}
  */
  readonly decision?: string;
  /**
  * Rules evaluated with a NOT logical operator. To match the policy, a user cannot meet any of the Exclude rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#exclude ZeroTrustAccessApplication#exclude}
  */
  readonly exclude?: ZeroTrustAccessApplicationPoliciesExclude[] | cdktf.IResolvable;
  /**
  * The UUID of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rules evaluated with an OR logical operator. A user needs to meet only one of the Include rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#include ZeroTrustAccessApplication#include}
  */
  readonly include?: ZeroTrustAccessApplicationPoliciesInclude[] | cdktf.IResolvable;
  /**
  * The name of the Access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * The order of execution for this policy. Must be unique for each policy within an app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#precedence ZeroTrustAccessApplication#precedence}
  */
  readonly precedence?: number;
  /**
  * Rules evaluated with an AND logical operator. To match the policy, a user must meet all of the Require rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#require ZeroTrustAccessApplication#require}
  */
  readonly require?: ZeroTrustAccessApplicationPoliciesRequire[] | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationPoliciesToTerraform(struct?: ZeroTrustAccessApplicationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_rules: zeroTrustAccessApplicationPoliciesConnectionRulesToTerraform(struct!.connectionRules),
    decision: cdktf.stringToTerraform(struct!.decision),
    exclude: cdktf.listMapper(zeroTrustAccessApplicationPoliciesExcludeToTerraform, false)(struct!.exclude),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.listMapper(zeroTrustAccessApplicationPoliciesIncludeToTerraform, false)(struct!.include),
    name: cdktf.stringToTerraform(struct!.name),
    precedence: cdktf.numberToTerraform(struct!.precedence),
    require: cdktf.listMapper(zeroTrustAccessApplicationPoliciesRequireToTerraform, false)(struct!.require),
  }
}


export function zeroTrustAccessApplicationPoliciesToHclTerraform(struct?: ZeroTrustAccessApplicationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_rules: {
      value: zeroTrustAccessApplicationPoliciesConnectionRulesToHclTerraform(struct!.connectionRules),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationPoliciesConnectionRules",
    },
    decision: {
      value: cdktf.stringToHclTerraform(struct!.decision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "set",
      storageClassType: "ZeroTrustAccessApplicationPoliciesExcludeList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesIncludeToHclTerraform, false)(struct!.include),
      isBlock: true,
      type: "set",
      storageClassType: "ZeroTrustAccessApplicationPoliciesIncludeList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesRequireToHclTerraform, false)(struct!.require),
      isBlock: true,
      type: "set",
      storageClassType: "ZeroTrustAccessApplicationPoliciesRequireList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRules = this._connectionRules?.internalValue;
    }
    if (this._decision !== undefined) {
      hasAnyValues = true;
      internalValueResult.decision = this._decision;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._require?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionRules.internalValue = undefined;
      this._decision = undefined;
      this._exclude.internalValue = undefined;
      this._id = undefined;
      this._include.internalValue = undefined;
      this._name = undefined;
      this._precedence = undefined;
      this._require.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionRules.internalValue = value.connectionRules;
      this._decision = value.decision;
      this._exclude.internalValue = value.exclude;
      this._id = value.id;
      this._include.internalValue = value.include;
      this._name = value.name;
      this._precedence = value.precedence;
      this._require.internalValue = value.require;
    }
  }

  // connection_rules - computed: false, optional: true, required: false
  private _connectionRules = new ZeroTrustAccessApplicationPoliciesConnectionRulesOutputReference(this, "connection_rules");
  public get connectionRules() {
    return this._connectionRules;
  }
  public putConnectionRules(value: ZeroTrustAccessApplicationPoliciesConnectionRules) {
    this._connectionRules.internalValue = value;
  }
  public resetConnectionRules() {
    this._connectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRulesInput() {
    return this._connectionRules.internalValue;
  }

  // decision - computed: false, optional: true, required: false
  private _decision?: string; 
  public get decision() {
    return this.getStringAttribute('decision');
  }
  public set decision(value: string) {
    this._decision = value;
  }
  public resetDecision() {
    this._decision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionInput() {
    return this._decision;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new ZeroTrustAccessApplicationPoliciesExcludeList(this, "exclude", true);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: ZeroTrustAccessApplicationPoliciesExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // id - computed: false, optional: true, required: false
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

  // include - computed: false, optional: true, required: false
  private _include = new ZeroTrustAccessApplicationPoliciesIncludeList(this, "include", true);
  public get include() {
    return this._include;
  }
  public putInclude(value: ZeroTrustAccessApplicationPoliciesInclude[] | cdktf.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // precedence - computed: true, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // require - computed: false, optional: true, required: false
  private _require = new ZeroTrustAccessApplicationPoliciesRequireList(this, "require", true);
  public get require() {
    return this._require;
  }
  public putRequire(value: ZeroTrustAccessApplicationPoliciesRequire[] | cdktf.IResolvable) {
    this._require.internalValue = value;
  }
  public resetRequire() {
    this._require.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require.internalValue;
  }
}

export class ZeroTrustAccessApplicationPoliciesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationPolicies[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationPoliciesOutputReference {
    return new ZeroTrustAccessApplicationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp {
  /**
  * The UID of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#idp_id ZeroTrustAccessApplication#idp_id}
  */
  readonly idpId?: string;
  /**
  * The name of the IdP provided attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#source_name ZeroTrustAccessApplication#source_name}
  */
  readonly sourceName?: string;
}

export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_id: cdktf.stringToTerraform(struct!.idpId),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_id: {
      value: cdktf.stringToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpId = undefined;
      this._sourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpId = value.idpId;
      this._sourceName = value.sourceName;
    }
  }

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference {
    return new ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasAppCustomAttributesSource {
  /**
  * The name of the IdP attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * A mapping from IdP ID to attribute name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}
  */
  readonly nameByIdp?: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp[] | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_by_idp: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToTerraform, false)(struct!.nameByIdp),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomAttributesSourceToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_by_idp: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpToHclTerraform, false)(struct!.nameByIdp),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameByIdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameByIdp = this._nameByIdp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameByIdp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameByIdp.internalValue = value.nameByIdp;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_by_idp - computed: false, optional: true, required: false
  private _nameByIdp = new ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdpList(this, "name_by_idp", false);
  public get nameByIdp() {
    return this._nameByIdp;
  }
  public putNameByIdp(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSourceNameByIdp[] | cdktf.IResolvable) {
    this._nameByIdp.internalValue = value;
  }
  public resetNameByIdp() {
    this._nameByIdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameByIdpInput() {
    return this._nameByIdp.internalValue;
  }
}
export interface ZeroTrustAccessApplicationSaasAppCustomAttributes {
  /**
  * The SAML FriendlyName of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#friendly_name ZeroTrustAccessApplication#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The name of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * A globally unique name for an identity or service provider.
  * Available values: "urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified", "urn:oasis:names:tc:SAML:2.0:attrname-format:basic", "urn:oasis:names:tc:SAML:2.0:attrname-format:uri".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name_format ZeroTrustAccessApplication#name_format}
  */
  readonly nameFormat?: string;
  /**
  * If the attribute is required when building a SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}
  */
  readonly source?: ZeroTrustAccessApplicationSaasAppCustomAttributesSource;
}

export function zeroTrustAccessApplicationSaasAppCustomAttributesToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    name: cdktf.stringToTerraform(struct!.name),
    name_format: cdktf.stringToTerraform(struct!.nameFormat),
    required: cdktf.booleanToTerraform(struct!.required),
    source: zeroTrustAccessApplicationSaasAppCustomAttributesSourceToTerraform(struct!.source),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomAttributesToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_format: {
      value: cdktf.stringToHclTerraform(struct!.nameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: zeroTrustAccessApplicationSaasAppCustomAttributesSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributesSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFormat = this._nameFormat;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._friendlyName = undefined;
      this._name = undefined;
      this._nameFormat = undefined;
      this._required = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._friendlyName = value.friendlyName;
      this._name = value.name;
      this._nameFormat = value.nameFormat;
      this._required = value.required;
      this._source.internalValue = value.source;
    }
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_format - computed: false, optional: true, required: false
  private _nameFormat?: string; 
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }
  public set nameFormat(value: string) {
    this._nameFormat = value;
  }
  public resetNameFormat() {
    this._nameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFormatInput() {
    return this._nameFormat;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ZeroTrustAccessApplicationSaasAppCustomAttributesSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ZeroTrustAccessApplicationSaasAppCustomAttributesSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationSaasAppCustomAttributes[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference {
    return new ZeroTrustAccessApplicationSaasAppCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasAppCustomClaimsSource {
  /**
  * The name of the IdP claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * A mapping from IdP ID to claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}
  */
  readonly nameByIdp?: { [key: string]: string };
}

export function zeroTrustAccessApplicationSaasAppCustomClaimsSourceToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_by_idp: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nameByIdp),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomClaimsSourceToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_by_idp: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nameByIdp),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameByIdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameByIdp = this._nameByIdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomClaimsSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameByIdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameByIdp = value.nameByIdp;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_by_idp - computed: false, optional: true, required: false
  private _nameByIdp?: { [key: string]: string }; 
  public get nameByIdp() {
    return this.getStringMapAttribute('name_by_idp');
  }
  public set nameByIdp(value: { [key: string]: string }) {
    this._nameByIdp = value;
  }
  public resetNameByIdp() {
    this._nameByIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameByIdpInput() {
    return this._nameByIdp;
  }
}
export interface ZeroTrustAccessApplicationSaasAppCustomClaims {
  /**
  * The name of the claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * If the claim is required when building an OIDC token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The scope of the claim.
  * Available values: "groups", "profile", "email", "openid".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#scope ZeroTrustAccessApplication#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}
  */
  readonly source?: ZeroTrustAccessApplicationSaasAppCustomClaimsSource;
}

export function zeroTrustAccessApplicationSaasAppCustomClaimsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    scope: cdktf.stringToTerraform(struct!.scope),
    source: zeroTrustAccessApplicationSaasAppCustomClaimsSourceToTerraform(struct!.source),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomClaimsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: zeroTrustAccessApplicationSaasAppCustomClaimsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomClaimsSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._scope = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
      this._scope = value.scope;
      this._source.internalValue = value.source;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ZeroTrustAccessApplicationSaasAppCustomClaimsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ZeroTrustAccessApplicationSaasAppCustomClaimsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ZeroTrustAccessApplicationSaasAppCustomClaimsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationSaasAppCustomClaims[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference {
    return new ZeroTrustAccessApplicationSaasAppCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions {
  /**
  * If an Access Token should be returned from the OIDC Authorization endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#return_access_token_from_authorization_endpoint ZeroTrustAccessApplication#return_access_token_from_authorization_endpoint}
  */
  readonly returnAccessTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable;
  /**
  * If an ID Token should be returned from the OIDC Authorization endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#return_id_token_from_authorization_endpoint ZeroTrustAccessApplication#return_id_token_from_authorization_endpoint}
  */
  readonly returnIdTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_access_token_from_authorization_endpoint: cdktf.booleanToTerraform(struct!.returnAccessTokenFromAuthorizationEndpoint),
    return_id_token_from_authorization_endpoint: cdktf.booleanToTerraform(struct!.returnIdTokenFromAuthorizationEndpoint),
  }
}


export function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_access_token_from_authorization_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.returnAccessTokenFromAuthorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_id_token_from_authorization_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.returnIdTokenFromAuthorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnAccessTokenFromAuthorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnAccessTokenFromAuthorizationEndpoint = this._returnAccessTokenFromAuthorizationEndpoint;
    }
    if (this._returnIdTokenFromAuthorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnIdTokenFromAuthorizationEndpoint = this._returnIdTokenFromAuthorizationEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._returnAccessTokenFromAuthorizationEndpoint = undefined;
      this._returnIdTokenFromAuthorizationEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._returnAccessTokenFromAuthorizationEndpoint = value.returnAccessTokenFromAuthorizationEndpoint;
      this._returnIdTokenFromAuthorizationEndpoint = value.returnIdTokenFromAuthorizationEndpoint;
    }
  }

  // return_access_token_from_authorization_endpoint - computed: false, optional: true, required: false
  private _returnAccessTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable; 
  public get returnAccessTokenFromAuthorizationEndpoint() {
    return this.getBooleanAttribute('return_access_token_from_authorization_endpoint');
  }
  public set returnAccessTokenFromAuthorizationEndpoint(value: boolean | cdktf.IResolvable) {
    this._returnAccessTokenFromAuthorizationEndpoint = value;
  }
  public resetReturnAccessTokenFromAuthorizationEndpoint() {
    this._returnAccessTokenFromAuthorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnAccessTokenFromAuthorizationEndpointInput() {
    return this._returnAccessTokenFromAuthorizationEndpoint;
  }

  // return_id_token_from_authorization_endpoint - computed: false, optional: true, required: false
  private _returnIdTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable; 
  public get returnIdTokenFromAuthorizationEndpoint() {
    return this.getBooleanAttribute('return_id_token_from_authorization_endpoint');
  }
  public set returnIdTokenFromAuthorizationEndpoint(value: boolean | cdktf.IResolvable) {
    this._returnIdTokenFromAuthorizationEndpoint = value;
  }
  public resetReturnIdTokenFromAuthorizationEndpoint() {
    this._returnIdTokenFromAuthorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnIdTokenFromAuthorizationEndpointInput() {
    return this._returnIdTokenFromAuthorizationEndpoint;
  }
}
export interface ZeroTrustAccessApplicationSaasAppRefreshTokenOptions {
  /**
  * How long a refresh token will be valid for after creation. Valid units are m,h,d. Must be longer than 1m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#lifetime ZeroTrustAccessApplication#lifetime}
  */
  readonly lifetime?: string;
}

export function zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.stringToTerraform(struct!.lifetime),
  }
}


export function zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.stringToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
    }
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }
}
export interface ZeroTrustAccessApplicationSaasApp {
  /**
  * The lifetime of the OIDC Access Token after creation. Valid units are m,h. Must be greater than or equal to 1m and less than or equal to 24h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}
  */
  readonly accessTokenLifetime?: string;
  /**
  * If client secret should be required on the token endpoint when authorization_code_with_pkce grant is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#allow_pkce_without_client_secret ZeroTrustAccessApplication#allow_pkce_without_client_secret}
  */
  readonly allowPkceWithoutClientSecret?: boolean | cdktf.IResolvable;
  /**
  * The URL where this applications tile redirects users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#app_launcher_url ZeroTrustAccessApplication#app_launcher_url}
  */
  readonly appLauncherUrl?: string;
  /**
  * Optional identifier indicating the authentication protocol used for the saas app. Required for OIDC. Default if unset is "saml"
  * Available values: "saml", "oidc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#auth_type ZeroTrustAccessApplication#auth_type}
  */
  readonly authType?: string;
  /**
  * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#consumer_service_url ZeroTrustAccessApplication#consumer_service_url}
  */
  readonly consumerServiceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#custom_attributes ZeroTrustAccessApplication#custom_attributes}
  */
  readonly customAttributes?: ZeroTrustAccessApplicationSaasAppCustomAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#custom_claims ZeroTrustAccessApplication#custom_claims}
  */
  readonly customClaims?: ZeroTrustAccessApplicationSaasAppCustomClaims[] | cdktf.IResolvable;
  /**
  * The URL that the user will be redirected to after a successful login for IDP initiated logins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#default_relay_state ZeroTrustAccessApplication#default_relay_state}
  */
  readonly defaultRelayState?: string;
  /**
  * The OIDC flows supported by this application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#grant_types ZeroTrustAccessApplication#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#group_filter_regex ZeroTrustAccessApplication#group_filter_regex}
  */
  readonly groupFilterRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#hybrid_and_implicit_options ZeroTrustAccessApplication#hybrid_and_implicit_options}
  */
  readonly hybridAndImplicitOptions?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions;
  /**
  * The unique identifier for your SaaS application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#idp_entity_id ZeroTrustAccessApplication#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * The format of the name identifier sent to the SaaS application.
  * Available values: "id", "email".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name_id_format ZeroTrustAccessApplication#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#name_id_transform_jsonata ZeroTrustAccessApplication#name_id_transform_jsonata}
  */
  readonly nameIdTransformJsonata?: string;
  /**
  * The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#redirect_uris ZeroTrustAccessApplication#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#refresh_token_options ZeroTrustAccessApplication#refresh_token_options}
  */
  readonly refreshTokenOptions?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions;
  /**
  * A [JSONata] (https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#saml_attribute_transform_jsonata ZeroTrustAccessApplication#saml_attribute_transform_jsonata}
  */
  readonly samlAttributeTransformJsonata?: string;
  /**
  * Define the user information shared with access, "offline_access" scope will be automatically enabled if refresh tokens are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}
  */
  readonly scopes?: string[];
  /**
  * A globally unique name for an identity or service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#sp_entity_id ZeroTrustAccessApplication#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * The endpoint where your SaaS application will send login requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#sso_endpoint ZeroTrustAccessApplication#sso_endpoint}
  */
  readonly ssoEndpoint?: string;
}

export function zeroTrustAccessApplicationSaasAppToTerraform(struct?: ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_lifetime: cdktf.stringToTerraform(struct!.accessTokenLifetime),
    allow_pkce_without_client_secret: cdktf.booleanToTerraform(struct!.allowPkceWithoutClientSecret),
    app_launcher_url: cdktf.stringToTerraform(struct!.appLauncherUrl),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    consumer_service_url: cdktf.stringToTerraform(struct!.consumerServiceUrl),
    custom_attributes: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomAttributesToTerraform, false)(struct!.customAttributes),
    custom_claims: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomClaimsToTerraform, false)(struct!.customClaims),
    default_relay_state: cdktf.stringToTerraform(struct!.defaultRelayState),
    grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grantTypes),
    group_filter_regex: cdktf.stringToTerraform(struct!.groupFilterRegex),
    hybrid_and_implicit_options: zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct!.hybridAndImplicitOptions),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    name_id_transform_jsonata: cdktf.stringToTerraform(struct!.nameIdTransformJsonata),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    refresh_token_options: zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform(struct!.refreshTokenOptions),
    saml_attribute_transform_jsonata: cdktf.stringToTerraform(struct!.samlAttributeTransformJsonata),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    sso_endpoint: cdktf.stringToTerraform(struct!.ssoEndpoint),
  }
}


export function zeroTrustAccessApplicationSaasAppToHclTerraform(struct?: ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_pkce_without_client_secret: {
      value: cdktf.booleanToHclTerraform(struct!.allowPkceWithoutClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_launcher_url: {
      value: cdktf.stringToHclTerraform(struct!.appLauncherUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_service_url: {
      value: cdktf.stringToHclTerraform(struct!.consumerServiceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributesList",
    },
    custom_claims: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomClaimsToHclTerraform, false)(struct!.customClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomClaimsList",
    },
    default_relay_state: {
      value: cdktf.stringToHclTerraform(struct!.defaultRelayState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grantTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.groupFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hybrid_and_implicit_options: {
      value: zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct!.hybridAndImplicitOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions",
    },
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_transform_jsonata: {
      value: cdktf.stringToHclTerraform(struct!.nameIdTransformJsonata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refresh_token_options: {
      value: zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform(struct!.refreshTokenOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationSaasAppRefreshTokenOptions",
    },
    saml_attribute_transform_jsonata: {
      value: cdktf.stringToHclTerraform(struct!.samlAttributeTransformJsonata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.ssoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenLifetime = this._accessTokenLifetime;
    }
    if (this._allowPkceWithoutClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPkceWithoutClientSecret = this._allowPkceWithoutClientSecret;
    }
    if (this._appLauncherUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLauncherUrl = this._appLauncherUrl;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._consumerServiceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerServiceUrl = this._consumerServiceUrl;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._customClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaims = this._customClaims?.internalValue;
    }
    if (this._defaultRelayState !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRelayState = this._defaultRelayState;
    }
    if (this._grantTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantTypes = this._grantTypes;
    }
    if (this._groupFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFilterRegex = this._groupFilterRegex;
    }
    if (this._hybridAndImplicitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAndImplicitOptions = this._hybridAndImplicitOptions?.internalValue;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._nameIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdFormat = this._nameIdFormat;
    }
    if (this._nameIdTransformJsonata !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdTransformJsonata = this._nameIdTransformJsonata;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._refreshTokenOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenOptions = this._refreshTokenOptions?.internalValue;
    }
    if (this._samlAttributeTransformJsonata !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlAttributeTransformJsonata = this._samlAttributeTransformJsonata;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._ssoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoEndpoint = this._ssoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenLifetime = undefined;
      this._allowPkceWithoutClientSecret = undefined;
      this._appLauncherUrl = undefined;
      this._authType = undefined;
      this._consumerServiceUrl = undefined;
      this._customAttributes.internalValue = undefined;
      this._customClaims.internalValue = undefined;
      this._defaultRelayState = undefined;
      this._grantTypes = undefined;
      this._groupFilterRegex = undefined;
      this._hybridAndImplicitOptions.internalValue = undefined;
      this._idpEntityId = undefined;
      this._nameIdFormat = undefined;
      this._nameIdTransformJsonata = undefined;
      this._redirectUris = undefined;
      this._refreshTokenOptions.internalValue = undefined;
      this._samlAttributeTransformJsonata = undefined;
      this._scopes = undefined;
      this._spEntityId = undefined;
      this._ssoEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenLifetime = value.accessTokenLifetime;
      this._allowPkceWithoutClientSecret = value.allowPkceWithoutClientSecret;
      this._appLauncherUrl = value.appLauncherUrl;
      this._authType = value.authType;
      this._consumerServiceUrl = value.consumerServiceUrl;
      this._customAttributes.internalValue = value.customAttributes;
      this._customClaims.internalValue = value.customClaims;
      this._defaultRelayState = value.defaultRelayState;
      this._grantTypes = value.grantTypes;
      this._groupFilterRegex = value.groupFilterRegex;
      this._hybridAndImplicitOptions.internalValue = value.hybridAndImplicitOptions;
      this._idpEntityId = value.idpEntityId;
      this._nameIdFormat = value.nameIdFormat;
      this._nameIdTransformJsonata = value.nameIdTransformJsonata;
      this._redirectUris = value.redirectUris;
      this._refreshTokenOptions.internalValue = value.refreshTokenOptions;
      this._samlAttributeTransformJsonata = value.samlAttributeTransformJsonata;
      this._scopes = value.scopes;
      this._spEntityId = value.spEntityId;
      this._ssoEndpoint = value.ssoEndpoint;
    }
  }

  // access_token_lifetime - computed: true, optional: true, required: false
  private _accessTokenLifetime?: string; 
  public get accessTokenLifetime() {
    return this.getStringAttribute('access_token_lifetime');
  }
  public set accessTokenLifetime(value: string) {
    this._accessTokenLifetime = value;
  }
  public resetAccessTokenLifetime() {
    this._accessTokenLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifetimeInput() {
    return this._accessTokenLifetime;
  }

  // allow_pkce_without_client_secret - computed: false, optional: true, required: false
  private _allowPkceWithoutClientSecret?: boolean | cdktf.IResolvable; 
  public get allowPkceWithoutClientSecret() {
    return this.getBooleanAttribute('allow_pkce_without_client_secret');
  }
  public set allowPkceWithoutClientSecret(value: boolean | cdktf.IResolvable) {
    this._allowPkceWithoutClientSecret = value;
  }
  public resetAllowPkceWithoutClientSecret() {
    this._allowPkceWithoutClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPkceWithoutClientSecretInput() {
    return this._allowPkceWithoutClientSecret;
  }

  // app_launcher_url - computed: false, optional: true, required: false
  private _appLauncherUrl?: string; 
  public get appLauncherUrl() {
    return this.getStringAttribute('app_launcher_url');
  }
  public set appLauncherUrl(value: string) {
    this._appLauncherUrl = value;
  }
  public resetAppLauncherUrl() {
    this._appLauncherUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLauncherUrlInput() {
    return this._appLauncherUrl;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // consumer_service_url - computed: false, optional: true, required: false
  private _consumerServiceUrl?: string; 
  public get consumerServiceUrl() {
    return this.getStringAttribute('consumer_service_url');
  }
  public set consumerServiceUrl(value: string) {
    this._consumerServiceUrl = value;
  }
  public resetConsumerServiceUrl() {
    this._consumerServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerServiceUrlInput() {
    return this._consumerServiceUrl;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes = new ZeroTrustAccessApplicationSaasAppCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: ZeroTrustAccessApplicationSaasAppCustomAttributes[] | cdktf.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // custom_claims - computed: false, optional: true, required: false
  private _customClaims = new ZeroTrustAccessApplicationSaasAppCustomClaimsList(this, "custom_claims", false);
  public get customClaims() {
    return this._customClaims;
  }
  public putCustomClaims(value: ZeroTrustAccessApplicationSaasAppCustomClaims[] | cdktf.IResolvable) {
    this._customClaims.internalValue = value;
  }
  public resetCustomClaims() {
    this._customClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsInput() {
    return this._customClaims.internalValue;
  }

  // default_relay_state - computed: false, optional: true, required: false
  private _defaultRelayState?: string; 
  public get defaultRelayState() {
    return this.getStringAttribute('default_relay_state');
  }
  public set defaultRelayState(value: string) {
    this._defaultRelayState = value;
  }
  public resetDefaultRelayState() {
    this._defaultRelayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRelayStateInput() {
    return this._defaultRelayState;
  }

  // grant_types - computed: false, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  public resetGrantTypes() {
    this._grantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // group_filter_regex - computed: false, optional: true, required: false
  private _groupFilterRegex?: string; 
  public get groupFilterRegex() {
    return this.getStringAttribute('group_filter_regex');
  }
  public set groupFilterRegex(value: string) {
    this._groupFilterRegex = value;
  }
  public resetGroupFilterRegex() {
    this._groupFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterRegexInput() {
    return this._groupFilterRegex;
  }

  // hybrid_and_implicit_options - computed: false, optional: true, required: false
  private _hybridAndImplicitOptions = new ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(this, "hybrid_and_implicit_options");
  public get hybridAndImplicitOptions() {
    return this._hybridAndImplicitOptions;
  }
  public putHybridAndImplicitOptions(value: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions) {
    this._hybridAndImplicitOptions.internalValue = value;
  }
  public resetHybridAndImplicitOptions() {
    this._hybridAndImplicitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAndImplicitOptionsInput() {
    return this._hybridAndImplicitOptions.internalValue;
  }

  // idp_entity_id - computed: true, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // name_id_format - computed: true, optional: true, required: false
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

  // name_id_transform_jsonata - computed: false, optional: true, required: false
  private _nameIdTransformJsonata?: string; 
  public get nameIdTransformJsonata() {
    return this.getStringAttribute('name_id_transform_jsonata');
  }
  public set nameIdTransformJsonata(value: string) {
    this._nameIdTransformJsonata = value;
  }
  public resetNameIdTransformJsonata() {
    this._nameIdTransformJsonata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdTransformJsonataInput() {
    return this._nameIdTransformJsonata;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return this.getListAttribute('redirect_uris');
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_options - computed: false, optional: true, required: false
  private _refreshTokenOptions = new ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference(this, "refresh_token_options");
  public get refreshTokenOptions() {
    return this._refreshTokenOptions;
  }
  public putRefreshTokenOptions(value: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions) {
    this._refreshTokenOptions.internalValue = value;
  }
  public resetRefreshTokenOptions() {
    this._refreshTokenOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenOptionsInput() {
    return this._refreshTokenOptions.internalValue;
  }

  // saml_attribute_transform_jsonata - computed: false, optional: true, required: false
  private _samlAttributeTransformJsonata?: string; 
  public get samlAttributeTransformJsonata() {
    return this.getStringAttribute('saml_attribute_transform_jsonata');
  }
  public set samlAttributeTransformJsonata(value: string) {
    this._samlAttributeTransformJsonata = value;
  }
  public resetSamlAttributeTransformJsonata() {
    this._samlAttributeTransformJsonata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAttributeTransformJsonataInput() {
    return this._samlAttributeTransformJsonata;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // sp_entity_id - computed: false, optional: true, required: false
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  public resetSpEntityId() {
    this._spEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // sso_endpoint - computed: true, optional: true, required: false
  private _ssoEndpoint?: string; 
  public get ssoEndpoint() {
    return this.getStringAttribute('sso_endpoint');
  }
  public set ssoEndpoint(value: string) {
    this._ssoEndpoint = value;
  }
  public resetSsoEndpoint() {
    this._ssoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoEndpointInput() {
    return this._ssoEndpoint;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface ZeroTrustAccessApplicationScimConfigAuthentication {
  /**
  * URL used to generate the auth code used during token generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#authorization_url ZeroTrustAccessApplication#authorization_url}
  */
  readonly authorizationUrl?: string;
  /**
  * Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#client_id ZeroTrustAccessApplication#client_id}
  */
  readonly clientId?: string;
  /**
  * Secret used to authenticate when generating a token for authenticating with the remove SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#client_secret ZeroTrustAccessApplication#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Password used to authenticate with the remote SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}
  */
  readonly password?: string;
  /**
  * The authentication scheme to use when making SCIM requests to this application.
  * Available values: "httpbasic", "oauthbearertoken", "oauth2", "access_service_token".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#scheme ZeroTrustAccessApplication#scheme}
  */
  readonly scheme: string;
  /**
  * The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}
  */
  readonly scopes?: string[];
  /**
  * Token used to authenticate with the remote SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#token ZeroTrustAccessApplication#token}
  */
  readonly token?: string;
  /**
  * URL used to generate the token used to authenticate with the remote SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#token_url ZeroTrustAccessApplication#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * User name used to authenticate with the remote SCIM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#user ZeroTrustAccessApplication#user}
  */
  readonly user?: string;
}

export function zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct?: ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_url: cdktf.stringToTerraform(struct!.authorizationUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    password: cdktf.stringToTerraform(struct!.password),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token: cdktf.stringToTerraform(struct!.token),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_url: {
      value: cdktf.stringToHclTerraform(struct!.authorizationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationUrl = this._authorizationUrl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationScimConfigAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationUrl = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._password = undefined;
      this._scheme = undefined;
      this._scopes = undefined;
      this._token = undefined;
      this._tokenUrl = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationUrl = value.authorizationUrl;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._password = value.password;
      this._scheme = value.scheme;
      this._scopes = value.scopes;
      this._token = value.token;
      this._tokenUrl = value.tokenUrl;
      this._user = value.user;
    }
  }

  // authorization_url - computed: false, optional: true, required: false
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  public resetAuthorizationUrl() {
    this._authorizationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ZeroTrustAccessApplicationScimConfigMappingsOperations {
  /**
  * Whether or not this mapping applies to create (POST) operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#create ZeroTrustAccessApplication#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this mapping applies to DELETE operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#delete ZeroTrustAccessApplication#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this mapping applies to update (PATCH/PUT) operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#update ZeroTrustAccessApplication#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    delete: cdktf.booleanToTerraform(struct!.delete),
    update: cdktf.booleanToTerraform(struct!.update),
  }
}


export function zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationScimConfigMappingsOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ZeroTrustAccessApplicationScimConfigMappings {
  /**
  * Whether or not this mapping is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#filter ZeroTrustAccessApplication#filter}
  */
  readonly filter?: string;
  /**
  * Whether or not this mapping applies to creates, updates, or deletes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#operations ZeroTrustAccessApplication#operations}
  */
  readonly operations?: ZeroTrustAccessApplicationScimConfigMappingsOperations;
  /**
  * Which SCIM resource type this mapping applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#schema ZeroTrustAccessApplication#schema}
  */
  readonly schema: string;
  /**
  * The level of adherence to outbound resource schemas when provisioning to this mapping. ‘Strict’ removes unknown values, while ‘passthrough’ passes unknown values to the target.
  * Available values: "strict", "passthrough".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#strictness ZeroTrustAccessApplication#strictness}
  */
  readonly strictness?: string;
  /**
  * A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#transform_jsonata ZeroTrustAccessApplication#transform_jsonata}
  */
  readonly transformJsonata?: string;
}

export function zeroTrustAccessApplicationScimConfigMappingsToTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    operations: zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct!.operations),
    schema: cdktf.stringToTerraform(struct!.schema),
    strictness: cdktf.stringToTerraform(struct!.strictness),
    transform_jsonata: cdktf.stringToTerraform(struct!.transformJsonata),
  }
}


export function zeroTrustAccessApplicationScimConfigMappingsToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct!.operations),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationScimConfigMappingsOperations",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strictness: {
      value: cdktf.stringToHclTerraform(struct!.strictness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_jsonata: {
      value: cdktf.stringToHclTerraform(struct!.transformJsonata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationScimConfigMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._strictness !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictness = this._strictness;
    }
    if (this._transformJsonata !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformJsonata = this._transformJsonata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._filter = undefined;
      this._operations.internalValue = undefined;
      this._schema = undefined;
      this._strictness = undefined;
      this._transformJsonata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._filter = value.filter;
      this._operations.internalValue = value.operations;
      this._schema = value.schema;
      this._strictness = value.strictness;
      this._transformJsonata = value.transformJsonata;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference(this, "operations");
  public get operations() {
    return this._operations;
  }
  public putOperations(value: ZeroTrustAccessApplicationScimConfigMappingsOperations) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // strictness - computed: false, optional: true, required: false
  private _strictness?: string; 
  public get strictness() {
    return this.getStringAttribute('strictness');
  }
  public set strictness(value: string) {
    this._strictness = value;
  }
  public resetStrictness() {
    this._strictness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictnessInput() {
    return this._strictness;
  }

  // transform_jsonata - computed: false, optional: true, required: false
  private _transformJsonata?: string; 
  public get transformJsonata() {
    return this.getStringAttribute('transform_jsonata');
  }
  public set transformJsonata(value: string) {
    this._transformJsonata = value;
  }
  public resetTransformJsonata() {
    this._transformJsonata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformJsonataInput() {
    return this._transformJsonata;
  }
}

export class ZeroTrustAccessApplicationScimConfigMappingsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationScimConfigMappingsOutputReference {
    return new ZeroTrustAccessApplicationScimConfigMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationScimConfig {
  /**
  * Attributes for configuring HTTP Basic authentication scheme for SCIM provisioning to an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#authentication ZeroTrustAccessApplication#authentication}
  */
  readonly authentication?: ZeroTrustAccessApplicationScimConfigAuthentication;
  /**
  * If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#deactivate_on_delete ZeroTrustAccessApplication#deactivate_on_delete}
  */
  readonly deactivateOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether SCIM provisioning is turned on for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The UID of the IdP to use as the source for SCIM resources to provision to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#idp_uid ZeroTrustAccessApplication#idp_uid}
  */
  readonly idpUid: string;
  /**
  * A list of mappings to apply to SCIM resources before provisioning them in this application. These can transform or filter the resources to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#mappings ZeroTrustAccessApplication#mappings}
  */
  readonly mappings?: ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable;
  /**
  * The base URI for the application's SCIM-compatible API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#remote_uri ZeroTrustAccessApplication#remote_uri}
  */
  readonly remoteUri: string;
}

export function zeroTrustAccessApplicationScimConfigToTerraform(struct?: ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct!.authentication),
    deactivate_on_delete: cdktf.booleanToTerraform(struct!.deactivateOnDelete),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idp_uid: cdktf.stringToTerraform(struct!.idpUid),
    mappings: cdktf.listMapper(zeroTrustAccessApplicationScimConfigMappingsToTerraform, false)(struct!.mappings),
    remote_uri: cdktf.stringToTerraform(struct!.remoteUri),
  }
}


export function zeroTrustAccessApplicationScimConfigToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustAccessApplicationScimConfigAuthentication",
    },
    deactivate_on_delete: {
      value: cdktf.booleanToHclTerraform(struct!.deactivateOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_uid: {
      value: cdktf.stringToHclTerraform(struct!.idpUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappings: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationScimConfigMappingsToHclTerraform, false)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationScimConfigMappingsList",
    },
    remote_uri: {
      value: cdktf.stringToHclTerraform(struct!.remoteUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationScimConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._deactivateOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivateOnDelete = this._deactivateOnDelete;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idpUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpUid = this._idpUid;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._remoteUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUri = this._remoteUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationScimConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._deactivateOnDelete = undefined;
      this._enabled = undefined;
      this._idpUid = undefined;
      this._mappings.internalValue = undefined;
      this._remoteUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._deactivateOnDelete = value.deactivateOnDelete;
      this._enabled = value.enabled;
      this._idpUid = value.idpUid;
      this._mappings.internalValue = value.mappings;
      this._remoteUri = value.remoteUri;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ZeroTrustAccessApplicationScimConfigAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // deactivate_on_delete - computed: false, optional: true, required: false
  private _deactivateOnDelete?: boolean | cdktf.IResolvable; 
  public get deactivateOnDelete() {
    return this.getBooleanAttribute('deactivate_on_delete');
  }
  public set deactivateOnDelete(value: boolean | cdktf.IResolvable) {
    this._deactivateOnDelete = value;
  }
  public resetDeactivateOnDelete() {
    this._deactivateOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateOnDeleteInput() {
    return this._deactivateOnDelete;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idp_uid - computed: false, optional: false, required: true
  private _idpUid?: string; 
  public get idpUid() {
    return this.getStringAttribute('idp_uid');
  }
  public set idpUid(value: string) {
    this._idpUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpUidInput() {
    return this._idpUid;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new ZeroTrustAccessApplicationScimConfigMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // remote_uri - computed: false, optional: false, required: true
  private _remoteUri?: string; 
  public get remoteUri() {
    return this.getStringAttribute('remote_uri');
  }
  public set remoteUri(value: string) {
    this._remoteUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUriInput() {
    return this._remoteUri;
  }
}
export interface ZeroTrustAccessApplicationTargetCriteria {
  /**
  * The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#port ZeroTrustAccessApplication#port}
  */
  readonly port: number;
  /**
  * The communication protocol your application secures.
  * Available values: "SSH", "RDP".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#protocol ZeroTrustAccessApplication#protocol}
  */
  readonly protocol: string;
  /**
  * Contains a map of target attribute keys to target attribute values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#target_attributes ZeroTrustAccessApplication#target_attributes}
  */
  readonly targetAttributes: { [key: string]: string[] } | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationTargetCriteriaToTerraform(struct?: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_attributes: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.targetAttributes),
  }
}


export function zeroTrustAccessApplicationTargetCriteriaToHclTerraform(struct?: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_attributes: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.targetAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationTargetCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAttributes = this._targetAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetAttributes = value.targetAttributes;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // target_attributes - computed: false, optional: false, required: true
  private _targetAttributes?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get targetAttributes() {
    return this.interpolationForAttribute('target_attributes');
  }
  public set targetAttributes(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._targetAttributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributesInput() {
    return this._targetAttributes;
  }
}

export class ZeroTrustAccessApplicationTargetCriteriaList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationTargetCriteriaOutputReference {
    return new ZeroTrustAccessApplicationTargetCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}
*/
export class ZeroTrustAccessApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustAccessApplication to import
  * @param importFromId The id of the existing ZeroTrustAccessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustAccessApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustAccessApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.1',
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
    this._allowAuthenticateViaWarp = config.allowAuthenticateViaWarp;
    this._allowIframe = config.allowIframe;
    this._allowedIdps = config.allowedIdps;
    this._appLauncherLogoUrl = config.appLauncherLogoUrl;
    this._appLauncherVisible = config.appLauncherVisible;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._bgColor = config.bgColor;
    this._corsHeaders.internalValue = config.corsHeaders;
    this._customDenyMessage = config.customDenyMessage;
    this._customDenyUrl = config.customDenyUrl;
    this._customNonIdentityDenyUrl = config.customNonIdentityDenyUrl;
    this._customPages = config.customPages;
    this._destinations.internalValue = config.destinations;
    this._domain = config.domain;
    this._enableBindingCookie = config.enableBindingCookie;
    this._footerLinks.internalValue = config.footerLinks;
    this._headerBgColor = config.headerBgColor;
    this._httpOnlyCookieAttribute = config.httpOnlyCookieAttribute;
    this._landingPageDesign.internalValue = config.landingPageDesign;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._optionsPreflightBypass = config.optionsPreflightBypass;
    this._pathCookieAttribute = config.pathCookieAttribute;
    this._policies.internalValue = config.policies;
    this._readServiceTokensFromHeader = config.readServiceTokensFromHeader;
    this._saasApp.internalValue = config.saasApp;
    this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
    this._scimConfig.internalValue = config.scimConfig;
    this._selfHostedDomains = config.selfHostedDomains;
    this._serviceAuth401Redirect = config.serviceAuth401Redirect;
    this._sessionDuration = config.sessionDuration;
    this._skipAppLauncherLoginPage = config.skipAppLauncherLoginPage;
    this._skipInterstitial = config.skipInterstitial;
    this._tags = config.tags;
    this._targetCriteria.internalValue = config.targetCriteria;
    this._type = config.type;
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

  // allow_authenticate_via_warp - computed: false, optional: true, required: false
  private _allowAuthenticateViaWarp?: boolean | cdktf.IResolvable; 
  public get allowAuthenticateViaWarp() {
    return this.getBooleanAttribute('allow_authenticate_via_warp');
  }
  public set allowAuthenticateViaWarp(value: boolean | cdktf.IResolvable) {
    this._allowAuthenticateViaWarp = value;
  }
  public resetAllowAuthenticateViaWarp() {
    this._allowAuthenticateViaWarp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticateViaWarpInput() {
    return this._allowAuthenticateViaWarp;
  }

  // allow_iframe - computed: false, optional: true, required: false
  private _allowIframe?: boolean | cdktf.IResolvable; 
  public get allowIframe() {
    return this.getBooleanAttribute('allow_iframe');
  }
  public set allowIframe(value: boolean | cdktf.IResolvable) {
    this._allowIframe = value;
  }
  public resetAllowIframe() {
    this._allowIframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIframeInput() {
    return this._allowIframe;
  }

  // allowed_idps - computed: false, optional: true, required: false
  private _allowedIdps?: string[]; 
  public get allowedIdps() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_idps'));
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

  // app_launcher_logo_url - computed: false, optional: true, required: false
  private _appLauncherLogoUrl?: string; 
  public get appLauncherLogoUrl() {
    return this.getStringAttribute('app_launcher_logo_url');
  }
  public set appLauncherLogoUrl(value: string) {
    this._appLauncherLogoUrl = value;
  }
  public resetAppLauncherLogoUrl() {
    this._appLauncherLogoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLauncherLogoUrlInput() {
    return this._appLauncherLogoUrl;
  }

  // app_launcher_visible - computed: true, optional: true, required: false
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

  // bg_color - computed: false, optional: true, required: false
  private _bgColor?: string; 
  public get bgColor() {
    return this.getStringAttribute('bg_color');
  }
  public set bgColor(value: string) {
    this._bgColor = value;
  }
  public resetBgColor() {
    this._bgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgColorInput() {
    return this._bgColor;
  }

  // cors_headers - computed: false, optional: true, required: false
  private _corsHeaders = new ZeroTrustAccessApplicationCorsHeadersOutputReference(this, "cors_headers");
  public get corsHeaders() {
    return this._corsHeaders;
  }
  public putCorsHeaders(value: ZeroTrustAccessApplicationCorsHeaders) {
    this._corsHeaders.internalValue = value;
  }
  public resetCorsHeaders() {
    this._corsHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsHeadersInput() {
    return this._corsHeaders.internalValue;
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

  // custom_non_identity_deny_url - computed: false, optional: true, required: false
  private _customNonIdentityDenyUrl?: string; 
  public get customNonIdentityDenyUrl() {
    return this.getStringAttribute('custom_non_identity_deny_url');
  }
  public set customNonIdentityDenyUrl(value: string) {
    this._customNonIdentityDenyUrl = value;
  }
  public resetCustomNonIdentityDenyUrl() {
    this._customNonIdentityDenyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNonIdentityDenyUrlInput() {
    return this._customNonIdentityDenyUrl;
  }

  // custom_pages - computed: false, optional: true, required: false
  private _customPages?: string[]; 
  public get customPages() {
    return this.getListAttribute('custom_pages');
  }
  public set customPages(value: string[]) {
    this._customPages = value;
  }
  public resetCustomPages() {
    this._customPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPagesInput() {
    return this._customPages;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new ZeroTrustAccessApplicationDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: ZeroTrustAccessApplicationDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
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

  // footer_links - computed: false, optional: true, required: false
  private _footerLinks = new ZeroTrustAccessApplicationFooterLinksList(this, "footer_links", false);
  public get footerLinks() {
    return this._footerLinks;
  }
  public putFooterLinks(value: ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable) {
    this._footerLinks.internalValue = value;
  }
  public resetFooterLinks() {
    this._footerLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerLinksInput() {
    return this._footerLinks.internalValue;
  }

  // header_bg_color - computed: false, optional: true, required: false
  private _headerBgColor?: string; 
  public get headerBgColor() {
    return this.getStringAttribute('header_bg_color');
  }
  public set headerBgColor(value: string) {
    this._headerBgColor = value;
  }
  public resetHeaderBgColor() {
    this._headerBgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBgColorInput() {
    return this._headerBgColor;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // landing_page_design - computed: false, optional: true, required: false
  private _landingPageDesign = new ZeroTrustAccessApplicationLandingPageDesignOutputReference(this, "landing_page_design");
  public get landingPageDesign() {
    return this._landingPageDesign;
  }
  public putLandingPageDesign(value: ZeroTrustAccessApplicationLandingPageDesign) {
    this._landingPageDesign.internalValue = value;
  }
  public resetLandingPageDesign() {
    this._landingPageDesign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landingPageDesignInput() {
    return this._landingPageDesign.internalValue;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // options_preflight_bypass - computed: false, optional: true, required: false
  private _optionsPreflightBypass?: boolean | cdktf.IResolvable; 
  public get optionsPreflightBypass() {
    return this.getBooleanAttribute('options_preflight_bypass');
  }
  public set optionsPreflightBypass(value: boolean | cdktf.IResolvable) {
    this._optionsPreflightBypass = value;
  }
  public resetOptionsPreflightBypass() {
    this._optionsPreflightBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsPreflightBypassInput() {
    return this._optionsPreflightBypass;
  }

  // path_cookie_attribute - computed: false, optional: true, required: false
  private _pathCookieAttribute?: boolean | cdktf.IResolvable; 
  public get pathCookieAttribute() {
    return this.getBooleanAttribute('path_cookie_attribute');
  }
  public set pathCookieAttribute(value: boolean | cdktf.IResolvable) {
    this._pathCookieAttribute = value;
  }
  public resetPathCookieAttribute() {
    this._pathCookieAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCookieAttributeInput() {
    return this._pathCookieAttribute;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new ZeroTrustAccessApplicationPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: ZeroTrustAccessApplicationPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // read_service_tokens_from_header - computed: false, optional: true, required: false
  private _readServiceTokensFromHeader?: string; 
  public get readServiceTokensFromHeader() {
    return this.getStringAttribute('read_service_tokens_from_header');
  }
  public set readServiceTokensFromHeader(value: string) {
    this._readServiceTokensFromHeader = value;
  }
  public resetReadServiceTokensFromHeader() {
    this._readServiceTokensFromHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readServiceTokensFromHeaderInput() {
    return this._readServiceTokensFromHeader;
  }

  // saas_app - computed: false, optional: true, required: false
  private _saasApp = new ZeroTrustAccessApplicationSaasAppOutputReference(this, "saas_app");
  public get saasApp() {
    return this._saasApp;
  }
  public putSaasApp(value: ZeroTrustAccessApplicationSaasApp) {
    this._saasApp.internalValue = value;
  }
  public resetSaasApp() {
    this._saasApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasAppInput() {
    return this._saasApp.internalValue;
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

  // scim_config - computed: false, optional: true, required: false
  private _scimConfig = new ZeroTrustAccessApplicationScimConfigOutputReference(this, "scim_config");
  public get scimConfig() {
    return this._scimConfig;
  }
  public putScimConfig(value: ZeroTrustAccessApplicationScimConfig) {
    this._scimConfig.internalValue = value;
  }
  public resetScimConfig() {
    this._scimConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimConfigInput() {
    return this._scimConfig.internalValue;
  }

  // self_hosted_domains - computed: true, optional: true, required: false
  private _selfHostedDomains?: string[]; 
  public get selfHostedDomains() {
    return this.getListAttribute('self_hosted_domains');
  }
  public set selfHostedDomains(value: string[]) {
    this._selfHostedDomains = value;
  }
  public resetSelfHostedDomains() {
    this._selfHostedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHostedDomainsInput() {
    return this._selfHostedDomains;
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

  // session_duration - computed: true, optional: true, required: false
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

  // skip_app_launcher_login_page - computed: true, optional: true, required: false
  private _skipAppLauncherLoginPage?: boolean | cdktf.IResolvable; 
  public get skipAppLauncherLoginPage() {
    return this.getBooleanAttribute('skip_app_launcher_login_page');
  }
  public set skipAppLauncherLoginPage(value: boolean | cdktf.IResolvable) {
    this._skipAppLauncherLoginPage = value;
  }
  public resetSkipAppLauncherLoginPage() {
    this._skipAppLauncherLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAppLauncherLoginPageInput() {
    return this._skipAppLauncherLoginPage;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_criteria - computed: false, optional: true, required: false
  private _targetCriteria = new ZeroTrustAccessApplicationTargetCriteriaList(this, "target_criteria", false);
  public get targetCriteria() {
    return this._targetCriteria;
  }
  public putTargetCriteria(value: ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable) {
    this._targetCriteria.internalValue = value;
  }
  public resetTargetCriteria() {
    this._targetCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCriteriaInput() {
    return this._targetCriteria.internalValue;
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
      allow_authenticate_via_warp: cdktf.booleanToTerraform(this._allowAuthenticateViaWarp),
      allow_iframe: cdktf.booleanToTerraform(this._allowIframe),
      allowed_idps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIdps),
      app_launcher_logo_url: cdktf.stringToTerraform(this._appLauncherLogoUrl),
      app_launcher_visible: cdktf.booleanToTerraform(this._appLauncherVisible),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      bg_color: cdktf.stringToTerraform(this._bgColor),
      cors_headers: zeroTrustAccessApplicationCorsHeadersToTerraform(this._corsHeaders.internalValue),
      custom_deny_message: cdktf.stringToTerraform(this._customDenyMessage),
      custom_deny_url: cdktf.stringToTerraform(this._customDenyUrl),
      custom_non_identity_deny_url: cdktf.stringToTerraform(this._customNonIdentityDenyUrl),
      custom_pages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customPages),
      destinations: cdktf.listMapper(zeroTrustAccessApplicationDestinationsToTerraform, false)(this._destinations.internalValue),
      domain: cdktf.stringToTerraform(this._domain),
      enable_binding_cookie: cdktf.booleanToTerraform(this._enableBindingCookie),
      footer_links: cdktf.listMapper(zeroTrustAccessApplicationFooterLinksToTerraform, false)(this._footerLinks.internalValue),
      header_bg_color: cdktf.stringToTerraform(this._headerBgColor),
      http_only_cookie_attribute: cdktf.booleanToTerraform(this._httpOnlyCookieAttribute),
      landing_page_design: zeroTrustAccessApplicationLandingPageDesignToTerraform(this._landingPageDesign.internalValue),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      options_preflight_bypass: cdktf.booleanToTerraform(this._optionsPreflightBypass),
      path_cookie_attribute: cdktf.booleanToTerraform(this._pathCookieAttribute),
      policies: cdktf.listMapper(zeroTrustAccessApplicationPoliciesToTerraform, false)(this._policies.internalValue),
      read_service_tokens_from_header: cdktf.stringToTerraform(this._readServiceTokensFromHeader),
      saas_app: zeroTrustAccessApplicationSaasAppToTerraform(this._saasApp.internalValue),
      same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
      scim_config: zeroTrustAccessApplicationScimConfigToTerraform(this._scimConfig.internalValue),
      self_hosted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selfHostedDomains),
      service_auth_401_redirect: cdktf.booleanToTerraform(this._serviceAuth401Redirect),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      skip_app_launcher_login_page: cdktf.booleanToTerraform(this._skipAppLauncherLoginPage),
      skip_interstitial: cdktf.booleanToTerraform(this._skipInterstitial),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_criteria: cdktf.listMapper(zeroTrustAccessApplicationTargetCriteriaToTerraform, false)(this._targetCriteria.internalValue),
      type: cdktf.stringToTerraform(this._type),
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
      allow_authenticate_via_warp: {
        value: cdktf.booleanToHclTerraform(this._allowAuthenticateViaWarp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_iframe: {
        value: cdktf.booleanToHclTerraform(this._allowIframe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_idps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIdps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_launcher_logo_url: {
        value: cdktf.stringToHclTerraform(this._appLauncherLogoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_launcher_visible: {
        value: cdktf.booleanToHclTerraform(this._appLauncherVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_redirect_to_identity: {
        value: cdktf.booleanToHclTerraform(this._autoRedirectToIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bg_color: {
        value: cdktf.stringToHclTerraform(this._bgColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_headers: {
        value: zeroTrustAccessApplicationCorsHeadersToHclTerraform(this._corsHeaders.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessApplicationCorsHeaders",
      },
      custom_deny_message: {
        value: cdktf.stringToHclTerraform(this._customDenyMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_deny_url: {
        value: cdktf.stringToHclTerraform(this._customDenyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_non_identity_deny_url: {
        value: cdktf.stringToHclTerraform(this._customNonIdentityDenyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_pages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customPages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destinations: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationDestinationsList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_binding_cookie: {
        value: cdktf.booleanToHclTerraform(this._enableBindingCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      footer_links: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationFooterLinksToHclTerraform, false)(this._footerLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationFooterLinksList",
      },
      header_bg_color: {
        value: cdktf.stringToHclTerraform(this._headerBgColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_only_cookie_attribute: {
        value: cdktf.booleanToHclTerraform(this._httpOnlyCookieAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      landing_page_design: {
        value: zeroTrustAccessApplicationLandingPageDesignToHclTerraform(this._landingPageDesign.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessApplicationLandingPageDesign",
      },
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options_preflight_bypass: {
        value: cdktf.booleanToHclTerraform(this._optionsPreflightBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path_cookie_attribute: {
        value: cdktf.booleanToHclTerraform(this._pathCookieAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policies: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationPoliciesToHclTerraform, false)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationPoliciesList",
      },
      read_service_tokens_from_header: {
        value: cdktf.stringToHclTerraform(this._readServiceTokensFromHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_app: {
        value: zeroTrustAccessApplicationSaasAppToHclTerraform(this._saasApp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessApplicationSaasApp",
      },
      same_site_cookie_attribute: {
        value: cdktf.stringToHclTerraform(this._sameSiteCookieAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_config: {
        value: zeroTrustAccessApplicationScimConfigToHclTerraform(this._scimConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustAccessApplicationScimConfig",
      },
      self_hosted_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selfHostedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_auth_401_redirect: {
        value: cdktf.booleanToHclTerraform(this._serviceAuth401Redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_app_launcher_login_page: {
        value: cdktf.booleanToHclTerraform(this._skipAppLauncherLoginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_interstitial: {
        value: cdktf.booleanToHclTerraform(this._skipInterstitial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_criteria: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationTargetCriteriaToHclTerraform, false)(this._targetCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationTargetCriteriaList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
