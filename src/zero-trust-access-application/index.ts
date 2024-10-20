/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustAccessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#account_id ZeroTrustAccessApplication#account_id}
  */
  readonly accountId?: string;
  /**
  * When set to true, users can authenticate to this application using their WARP session. When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allow_authenticate_via_warp ZeroTrustAccessApplication#allow_authenticate_via_warp}
  */
  readonly allowAuthenticateViaWarp?: boolean | cdktf.IResolvable;
  /**
  * The identity providers selected for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allowed_idps ZeroTrustAccessApplication#allowed_idps}
  */
  readonly allowedIdps?: string[];
  /**
  * The logo URL of the app launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#app_launcher_logo_url ZeroTrustAccessApplication#app_launcher_logo_url}
  */
  readonly appLauncherLogoUrl?: string;
  /**
  * Option to show/hide applications in App Launcher. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#app_launcher_visible ZeroTrustAccessApplication#app_launcher_visible}
  */
  readonly appLauncherVisible?: boolean | cdktf.IResolvable;
  /**
  * Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#auto_redirect_to_identity ZeroTrustAccessApplication#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * The background color of the app launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#bg_color ZeroTrustAccessApplication#bg_color}
  */
  readonly bgColor?: string;
  /**
  * Option that returns a custom error message when a user is denied access to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#custom_deny_message ZeroTrustAccessApplication#custom_deny_message}
  */
  readonly customDenyMessage?: string;
  /**
  * Option that redirects to a custom URL when a user is denied access to the application via identity based rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#custom_deny_url ZeroTrustAccessApplication#custom_deny_url}
  */
  readonly customDenyUrl?: string;
  /**
  * Option that redirects to a custom URL when a user is denied access to the application via non identity rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#custom_non_identity_deny_url ZeroTrustAccessApplication#custom_non_identity_deny_url}
  */
  readonly customNonIdentityDenyUrl?: string;
  /**
  * The custom pages selected for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#custom_pages ZeroTrustAccessApplication#custom_pages}
  */
  readonly customPages?: string[];
  /**
  * The primary hostname and path that Access will secure. If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}
  */
  readonly domain?: string;
  /**
  * Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#enable_binding_cookie ZeroTrustAccessApplication#enable_binding_cookie}
  */
  readonly enableBindingCookie?: boolean | cdktf.IResolvable;
  /**
  * The background color of the header bar in the app launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#header_bg_color ZeroTrustAccessApplication#header_bg_color}
  */
  readonly headerBgColor?: string;
  /**
  * Option to add the `HttpOnly` cookie flag to access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#http_only_cookie_attribute ZeroTrustAccessApplication#http_only_cookie_attribute}
  */
  readonly httpOnlyCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image URL for the logo shown in the app launcher dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#logo_url ZeroTrustAccessApplication#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Friendly name of the Access Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * Allows options preflight requests to bypass Access authentication and go directly to the origin. Cannot turn on if cors_headers is set. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#options_preflight_bypass ZeroTrustAccessApplication#options_preflight_bypass}
  */
  readonly optionsPreflightBypass?: boolean | cdktf.IResolvable;
  /**
  * The policies associated with the application, in ascending order of precedence. Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#policies ZeroTrustAccessApplication#policies}
  */
  readonly policies?: string[];
  /**
  * Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#same_site_cookie_attribute ZeroTrustAccessApplication#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute?: string;
  /**
  * List of domains that access will secure. Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#self_hosted_domains ZeroTrustAccessApplication#self_hosted_domains}
  */
  readonly selfHostedDomains?: string[];
  /**
  * Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#service_auth_401_redirect ZeroTrustAccessApplication#service_auth_401_redirect}
  */
  readonly serviceAuth401Redirect?: boolean | cdktf.IResolvable;
  /**
  * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. Defaults to `24h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Option to skip the App Launcher landing page. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#skip_app_launcher_login_page ZeroTrustAccessApplication#skip_app_launcher_login_page}
  */
  readonly skipAppLauncherLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Option to skip the authorization interstitial when using the CLI. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#skip_interstitial ZeroTrustAccessApplication#skip_interstitial}
  */
  readonly skipInterstitial?: boolean | cdktf.IResolvable;
  /**
  * The itags associated with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#tags ZeroTrustAccessApplication#tags}
  */
  readonly tags?: string[];
  /**
  * The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}
  */
  readonly type?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#zone_id ZeroTrustAccessApplication#zone_id}
  */
  readonly zoneId?: string;
  /**
  * cors_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#cors_headers ZeroTrustAccessApplication#cors_headers}
  */
  readonly corsHeaders?: ZeroTrustAccessApplicationCorsHeaders[] | cdktf.IResolvable;
  /**
  * footer_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#footer_links ZeroTrustAccessApplication#footer_links}
  */
  readonly footerLinks?: ZeroTrustAccessApplicationFooterLinks[] | cdktf.IResolvable;
  /**
  * landing_page_design block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#landing_page_design ZeroTrustAccessApplication#landing_page_design}
  */
  readonly landingPageDesign?: ZeroTrustAccessApplicationLandingPageDesign;
  /**
  * saas_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#saas_app ZeroTrustAccessApplication#saas_app}
  */
  readonly saasApp?: ZeroTrustAccessApplicationSaasApp;
  /**
  * scim_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#scim_config ZeroTrustAccessApplication#scim_config}
  */
  readonly scimConfig?: ZeroTrustAccessApplicationScimConfig;
  /**
  * target_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#target_criteria ZeroTrustAccessApplication#target_criteria}
  */
  readonly targetCriteria?: ZeroTrustAccessApplicationTargetCriteria[] | cdktf.IResolvable;
}
export interface ZeroTrustAccessApplicationCorsHeaders {
  /**
  * Value to determine whether all HTTP headers are exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allow_all_headers ZeroTrustAccessApplication#allow_all_headers}
  */
  readonly allowAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Value to determine whether all methods are exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allow_all_methods ZeroTrustAccessApplication#allow_all_methods}
  */
  readonly allowAllMethods?: boolean | cdktf.IResolvable;
  /**
  * Value to determine whether all origins are permitted to make CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allow_all_origins ZeroTrustAccessApplication#allow_all_origins}
  */
  readonly allowAllOrigins?: boolean | cdktf.IResolvable;
  /**
  * Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allow_credentials ZeroTrustAccessApplication#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers to expose via CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allowed_headers ZeroTrustAccessApplication#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * List of methods to expose via CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allowed_methods ZeroTrustAccessApplication#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * List of origins permitted to make CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allowed_origins ZeroTrustAccessApplication#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * The maximum time a preflight request will be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#max_age ZeroTrustAccessApplication#max_age}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessApplicationCorsHeadersList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationCorsHeaders[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationCorsHeadersOutputReference {
    return new ZeroTrustAccessApplicationCorsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationFooterLinks {
  /**
  * The name of the footer link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * The URL of the footer link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#url ZeroTrustAccessApplication#url}
  */
  readonly url?: string;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
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
  * The button color of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#button_color ZeroTrustAccessApplication#button_color}
  */
  readonly buttonColor?: string;
  /**
  * The button text color of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#button_text_color ZeroTrustAccessApplication#button_text_color}
  */
  readonly buttonTextColor?: string;
  /**
  * The URL of the image to be displayed in the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#image_url ZeroTrustAccessApplication#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The message of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#message ZeroTrustAccessApplication#message}
  */
  readonly message?: string;
  /**
  * The title of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#title ZeroTrustAccessApplication#title}
  */
  readonly title?: string;
}

export function zeroTrustAccessApplicationLandingPageDesignToTerraform(struct?: ZeroTrustAccessApplicationLandingPageDesignOutputReference | ZeroTrustAccessApplicationLandingPageDesign): any {
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


export function zeroTrustAccessApplicationLandingPageDesignToHclTerraform(struct?: ZeroTrustAccessApplicationLandingPageDesignOutputReference | ZeroTrustAccessApplicationLandingPageDesign): any {
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationLandingPageDesign | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationLandingPageDesign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buttonColor = undefined;
      this._buttonTextColor = undefined;
      this._imageUrl = undefined;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // title - computed: false, optional: true, required: false
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
export interface ZeroTrustAccessApplicationSaasAppCustomAttributeSource {
  /**
  * The name of the attribute as provided by the IDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * A mapping from IdP ID to claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}
  */
  readonly nameByIdp?: { [key: string]: string };
}

export function zeroTrustAccessApplicationSaasAppCustomAttributeSourceToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference | ZeroTrustAccessApplicationSaasAppCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_by_idp: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nameByIdp),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomAttributeSourceToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference | ZeroTrustAccessApplicationSaasAppCustomAttributeSource): any {
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

export class ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttributeSource | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nameByIdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nameByIdp = value.nameByIdp;
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
export interface ZeroTrustAccessApplicationSaasAppCustomAttribute {
  /**
  * A friendly name for the attribute as provided to the SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#friendly_name ZeroTrustAccessApplication#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The name of the attribute as provided to the SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * A globally unique name for an identity or service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name_format ZeroTrustAccessApplication#name_format}
  */
  readonly nameFormat?: string;
  /**
  * True if the attribute must be always present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}
  */
  readonly source: ZeroTrustAccessApplicationSaasAppCustomAttributeSource;
}

export function zeroTrustAccessApplicationSaasAppCustomAttributeToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    name: cdktf.stringToTerraform(struct!.name),
    name_format: cdktf.stringToTerraform(struct!.nameFormat),
    required: cdktf.booleanToTerraform(struct!.required),
    source: zeroTrustAccessApplicationSaasAppCustomAttributeSourceToTerraform(struct!.source),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomAttributeToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomAttribute | cdktf.IResolvable): any {
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
      value: zeroTrustAccessApplicationSaasAppCustomAttributeSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributeSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomAttribute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomAttribute | cdktf.IResolvable | undefined) {
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

  // source - computed: false, optional: false, required: true
  private _source = new ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ZeroTrustAccessApplicationSaasAppCustomAttributeSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ZeroTrustAccessApplicationSaasAppCustomAttributeList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationSaasAppCustomAttribute[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference {
    return new ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasAppCustomClaimSource {
  /**
  * The name of the attribute as provided by the IDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * A mapping from IdP ID to claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}
  */
  readonly nameByIdp?: { [key: string]: string };
}

export function zeroTrustAccessApplicationSaasAppCustomClaimSourceToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference | ZeroTrustAccessApplicationSaasAppCustomClaimSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_by_idp: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nameByIdp),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomClaimSourceToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference | ZeroTrustAccessApplicationSaasAppCustomClaimSource): any {
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

export class ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomClaimSource | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomClaimSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nameByIdp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nameByIdp = value.nameByIdp;
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
export interface ZeroTrustAccessApplicationSaasAppCustomClaim {
  /**
  * The name of the attribute as provided to the SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name?: string;
  /**
  * True if the attribute must be always present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The scope of the claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#scope ZeroTrustAccessApplication#scope}
  */
  readonly scope?: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}
  */
  readonly source: ZeroTrustAccessApplicationSaasAppCustomClaimSource;
}

export function zeroTrustAccessApplicationSaasAppCustomClaimToTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    scope: cdktf.stringToTerraform(struct!.scope),
    source: zeroTrustAccessApplicationSaasAppCustomClaimSourceToTerraform(struct!.source),
  }
}


export function zeroTrustAccessApplicationSaasAppCustomClaimToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppCustomClaim | cdktf.IResolvable): any {
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
      value: zeroTrustAccessApplicationSaasAppCustomClaimSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomClaimSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationSaasAppCustomClaim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppCustomClaim | cdktf.IResolvable | undefined) {
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

  // source - computed: false, optional: false, required: true
  private _source = new ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: ZeroTrustAccessApplicationSaasAppCustomClaimSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ZeroTrustAccessApplicationSaasAppCustomClaimList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationSaasAppCustomClaim[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference {
    return new ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions {
  /**
  * If true, the authorization endpoint will return an access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#return_access_token_from_authorization_endpoint ZeroTrustAccessApplication#return_access_token_from_authorization_endpoint}
  */
  readonly returnAccessTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable;
  /**
  * If true, the authorization endpoint will return an id token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#return_id_token_from_authorization_endpoint ZeroTrustAccessApplication#return_id_token_from_authorization_endpoint}
  */
  readonly returnIdTokenFromAuthorizationEndpoint?: boolean | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference | ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_access_token_from_authorization_endpoint: cdktf.booleanToTerraform(struct!.returnAccessTokenFromAuthorizationEndpoint),
    return_id_token_from_authorization_endpoint: cdktf.booleanToTerraform(struct!.returnIdTokenFromAuthorizationEndpoint),
  }
}


export function zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference | ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions): any {
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._returnAccessTokenFromAuthorizationEndpoint = undefined;
      this._returnIdTokenFromAuthorizationEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * How long a refresh token will be valid for after creation. Valid units are `m`, `h` and `d`. Must be longer than 1m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#lifetime ZeroTrustAccessApplication#lifetime}
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
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
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

export class ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference {
    return new ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationSaasApp {
  /**
  * The lifetime of the Access Token after creation. Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}
  */
  readonly accessTokenLifetime?: string;
  /**
  * Allow PKCE flow without a client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#allow_pkce_without_client_secret ZeroTrustAccessApplication#allow_pkce_without_client_secret}
  */
  readonly allowPkceWithoutClientSecret?: boolean | cdktf.IResolvable;
  /**
  * The URL where this applications tile redirects users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#app_launcher_url ZeroTrustAccessApplication#app_launcher_url}
  */
  readonly appLauncherUrl?: string;
  /**
  * **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#auth_type ZeroTrustAccessApplication#auth_type}
  */
  readonly authType?: string;
  /**
  * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#consumer_service_url ZeroTrustAccessApplication#consumer_service_url}
  */
  readonly consumerServiceUrl?: string;
  /**
  * The relay state used if not provided by the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#default_relay_state ZeroTrustAccessApplication#default_relay_state}
  */
  readonly defaultRelayState?: string;
  /**
  * The OIDC flows supported by this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#grant_types ZeroTrustAccessApplication#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#group_filter_regex ZeroTrustAccessApplication#group_filter_regex}
  */
  readonly groupFilterRegex?: string;
  /**
  * The format of the name identifier sent to the SaaS application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name_id_format ZeroTrustAccessApplication#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name_id_transform_jsonata ZeroTrustAccessApplication#name_id_transform_jsonata}
  */
  readonly nameIdTransformJsonata?: string;
  /**
  * The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#redirect_uris ZeroTrustAccessApplication#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#saml_attribute_transform_jsonata ZeroTrustAccessApplication#saml_attribute_transform_jsonata}
  */
  readonly samlAttributeTransformJsonata?: string;
  /**
  * Define the user information shared with access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}
  */
  readonly scopes?: string[];
  /**
  * A globally unique name for an identity or service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#sp_entity_id ZeroTrustAccessApplication#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * custom_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#custom_attribute ZeroTrustAccessApplication#custom_attribute}
  */
  readonly customAttribute?: ZeroTrustAccessApplicationSaasAppCustomAttribute[] | cdktf.IResolvable;
  /**
  * custom_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#custom_claim ZeroTrustAccessApplication#custom_claim}
  */
  readonly customClaim?: ZeroTrustAccessApplicationSaasAppCustomClaim[] | cdktf.IResolvable;
  /**
  * hybrid_and_implicit_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#hybrid_and_implicit_options ZeroTrustAccessApplication#hybrid_and_implicit_options}
  */
  readonly hybridAndImplicitOptions?: ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions;
  /**
  * refresh_token_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#refresh_token_options ZeroTrustAccessApplication#refresh_token_options}
  */
  readonly refreshTokenOptions?: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[] | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationSaasAppToTerraform(struct?: ZeroTrustAccessApplicationSaasAppOutputReference | ZeroTrustAccessApplicationSaasApp): any {
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
    default_relay_state: cdktf.stringToTerraform(struct!.defaultRelayState),
    grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grantTypes),
    group_filter_regex: cdktf.stringToTerraform(struct!.groupFilterRegex),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    name_id_transform_jsonata: cdktf.stringToTerraform(struct!.nameIdTransformJsonata),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    saml_attribute_transform_jsonata: cdktf.stringToTerraform(struct!.samlAttributeTransformJsonata),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    custom_attribute: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomAttributeToTerraform, true)(struct!.customAttribute),
    custom_claim: cdktf.listMapper(zeroTrustAccessApplicationSaasAppCustomClaimToTerraform, true)(struct!.customClaim),
    hybrid_and_implicit_options: zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToTerraform(struct!.hybridAndImplicitOptions),
    refresh_token_options: cdktf.listMapper(zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToTerraform, true)(struct!.refreshTokenOptions),
  }
}


export function zeroTrustAccessApplicationSaasAppToHclTerraform(struct?: ZeroTrustAccessApplicationSaasAppOutputReference | ZeroTrustAccessApplicationSaasApp): any {
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
    default_relay_state: {
      value: cdktf.stringToHclTerraform(struct!.defaultRelayState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grantTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    group_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.groupFilterRegex),
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
      type: "set",
      storageClassType: "stringList",
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
      type: "set",
      storageClassType: "stringList",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attribute: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomAttributeToHclTerraform, true)(struct!.customAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomAttributeList",
    },
    custom_claim: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppCustomClaimToHclTerraform, true)(struct!.customClaim),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppCustomClaimList",
    },
    hybrid_and_implicit_options: {
      value: zeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsToHclTerraform(struct!.hybridAndImplicitOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsList",
    },
    refresh_token_options: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationSaasAppRefreshTokenOptionsToHclTerraform, true)(struct!.refreshTokenOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationSaasAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationSaasApp | undefined {
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
    if (this._customAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttribute = this._customAttribute?.internalValue;
    }
    if (this._customClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaim = this._customClaim?.internalValue;
    }
    if (this._hybridAndImplicitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAndImplicitOptions = this._hybridAndImplicitOptions?.internalValue;
    }
    if (this._refreshTokenOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenOptions = this._refreshTokenOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationSaasApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenLifetime = undefined;
      this._allowPkceWithoutClientSecret = undefined;
      this._appLauncherUrl = undefined;
      this._authType = undefined;
      this._consumerServiceUrl = undefined;
      this._defaultRelayState = undefined;
      this._grantTypes = undefined;
      this._groupFilterRegex = undefined;
      this._nameIdFormat = undefined;
      this._nameIdTransformJsonata = undefined;
      this._redirectUris = undefined;
      this._samlAttributeTransformJsonata = undefined;
      this._scopes = undefined;
      this._spEntityId = undefined;
      this._customAttribute.internalValue = undefined;
      this._customClaim.internalValue = undefined;
      this._hybridAndImplicitOptions.internalValue = undefined;
      this._refreshTokenOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenLifetime = value.accessTokenLifetime;
      this._allowPkceWithoutClientSecret = value.allowPkceWithoutClientSecret;
      this._appLauncherUrl = value.appLauncherUrl;
      this._authType = value.authType;
      this._consumerServiceUrl = value.consumerServiceUrl;
      this._defaultRelayState = value.defaultRelayState;
      this._grantTypes = value.grantTypes;
      this._groupFilterRegex = value.groupFilterRegex;
      this._nameIdFormat = value.nameIdFormat;
      this._nameIdTransformJsonata = value.nameIdTransformJsonata;
      this._redirectUris = value.redirectUris;
      this._samlAttributeTransformJsonata = value.samlAttributeTransformJsonata;
      this._scopes = value.scopes;
      this._spEntityId = value.spEntityId;
      this._customAttribute.internalValue = value.customAttribute;
      this._customClaim.internalValue = value.customClaim;
      this._hybridAndImplicitOptions.internalValue = value.hybridAndImplicitOptions;
      this._refreshTokenOptions.internalValue = value.refreshTokenOptions;
    }
  }

  // access_token_lifetime - computed: false, optional: true, required: false
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

  // auth_type - computed: false, optional: true, required: false
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

  // grant_types - computed: true, optional: true, required: false
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
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

  // idp_entity_id - computed: true, optional: false, required: false
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
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
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
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

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
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

  // sso_endpoint - computed: true, optional: false, required: false
  public get ssoEndpoint() {
    return this.getStringAttribute('sso_endpoint');
  }

  // custom_attribute - computed: false, optional: true, required: false
  private _customAttribute = new ZeroTrustAccessApplicationSaasAppCustomAttributeList(this, "custom_attribute", false);
  public get customAttribute() {
    return this._customAttribute;
  }
  public putCustomAttribute(value: ZeroTrustAccessApplicationSaasAppCustomAttribute[] | cdktf.IResolvable) {
    this._customAttribute.internalValue = value;
  }
  public resetCustomAttribute() {
    this._customAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeInput() {
    return this._customAttribute.internalValue;
  }

  // custom_claim - computed: false, optional: true, required: false
  private _customClaim = new ZeroTrustAccessApplicationSaasAppCustomClaimList(this, "custom_claim", false);
  public get customClaim() {
    return this._customClaim;
  }
  public putCustomClaim(value: ZeroTrustAccessApplicationSaasAppCustomClaim[] | cdktf.IResolvable) {
    this._customClaim.internalValue = value;
  }
  public resetCustomClaim() {
    this._customClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimInput() {
    return this._customClaim.internalValue;
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

  // refresh_token_options - computed: false, optional: true, required: false
  private _refreshTokenOptions = new ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList(this, "refresh_token_options", false);
  public get refreshTokenOptions() {
    return this._refreshTokenOptions;
  }
  public putRefreshTokenOptions(value: ZeroTrustAccessApplicationSaasAppRefreshTokenOptions[] | cdktf.IResolvable) {
    this._refreshTokenOptions.internalValue = value;
  }
  public resetRefreshTokenOptions() {
    this._refreshTokenOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenOptionsInput() {
    return this._refreshTokenOptions.internalValue;
  }
}
export interface ZeroTrustAccessApplicationScimConfigAuthentication {
  /**
  * URL used to generate the auth code used during token generation. Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#authorization_url ZeroTrustAccessApplication#authorization_url}
  */
  readonly authorizationUrl?: string;
  /**
  * Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#client_id ZeroTrustAccessApplication#client_id}
  */
  readonly clientId?: string;
  /**
  * Secret used to authenticate when generating a token for authenticating with the remove SCIM service. Required when using `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#client_secret ZeroTrustAccessApplication#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}
  */
  readonly password?: string;
  /**
  * The authentication scheme to use when making SCIM requests to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#scheme ZeroTrustAccessApplication#scheme}
  */
  readonly scheme: string;
  /**
  * The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}
  */
  readonly scopes?: string[];
  /**
  * Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#token ZeroTrustAccessApplication#token}
  */
  readonly token?: string;
  /**
  * URL used to generate the token used to authenticate with the remote SCIM service. Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.client_id`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#token_url ZeroTrustAccessApplication#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * User name used to authenticate with the remote SCIM service. Required when using `scim_config.0.authentication.0.password`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#user ZeroTrustAccessApplication#user}
  */
  readonly user?: string;
}

export function zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct?: ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference | ZeroTrustAccessApplicationScimConfigAuthentication): any {
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


export function zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference | ZeroTrustAccessApplicationScimConfigAuthentication): any {
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
      type: "set",
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationScimConfigAuthentication | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationScimConfigAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#create ZeroTrustAccessApplication#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this mapping applies to DELETE operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#delete ZeroTrustAccessApplication#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Whether or not this mapping applies to update (PATCH/PUT) operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#update ZeroTrustAccessApplication#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference | ZeroTrustAccessApplicationScimConfigMappingsOperations): any {
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


export function zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference | ZeroTrustAccessApplicationScimConfigMappingsOperations): any {
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationScimConfigMappingsOperations | undefined {
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

  public set internalValue(value: ZeroTrustAccessApplicationScimConfigMappingsOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#filter ZeroTrustAccessApplication#filter}
  */
  readonly filter?: string;
  /**
  * Which SCIM resource type this mapping applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#schema ZeroTrustAccessApplication#schema}
  */
  readonly schema: string;
  /**
  * A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#transform_jsonata ZeroTrustAccessApplication#transform_jsonata}
  */
  readonly transformJsonata?: string;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#operations ZeroTrustAccessApplication#operations}
  */
  readonly operations?: ZeroTrustAccessApplicationScimConfigMappingsOperations;
}

export function zeroTrustAccessApplicationScimConfigMappingsToTerraform(struct?: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    filter: cdktf.stringToTerraform(struct!.filter),
    schema: cdktf.stringToTerraform(struct!.schema),
    transform_jsonata: cdktf.stringToTerraform(struct!.transformJsonata),
    operations: zeroTrustAccessApplicationScimConfigMappingsOperationsToTerraform(struct!.operations),
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
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
    operations: {
      value: zeroTrustAccessApplicationScimConfigMappingsOperationsToHclTerraform(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationScimConfigMappingsOperationsList",
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
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._transformJsonata !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformJsonata = this._transformJsonata;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationScimConfigMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._filter = undefined;
      this._schema = undefined;
      this._transformJsonata = undefined;
      this._operations.internalValue = undefined;
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
      this._schema = value.schema;
      this._transformJsonata = value.transformJsonata;
      this._operations.internalValue = value.operations;
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
  * If false, propagates DELETE requests to the target application for SCIM resources. If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#deactivate_on_delete ZeroTrustAccessApplication#deactivate_on_delete}
  */
  readonly deactivateOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether SCIM provisioning is turned on for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The UID of the IdP to use as the source for SCIM resources to provision to this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#idp_uid ZeroTrustAccessApplication#idp_uid}
  */
  readonly idpUid: string;
  /**
  * The base URI for the application's SCIM-compatible API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#remote_uri ZeroTrustAccessApplication#remote_uri}
  */
  readonly remoteUri: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#authentication ZeroTrustAccessApplication#authentication}
  */
  readonly authentication?: ZeroTrustAccessApplicationScimConfigAuthentication;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#mappings ZeroTrustAccessApplication#mappings}
  */
  readonly mappings?: ZeroTrustAccessApplicationScimConfigMappings[] | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationScimConfigToTerraform(struct?: ZeroTrustAccessApplicationScimConfigOutputReference | ZeroTrustAccessApplicationScimConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deactivate_on_delete: cdktf.booleanToTerraform(struct!.deactivateOnDelete),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idp_uid: cdktf.stringToTerraform(struct!.idpUid),
    remote_uri: cdktf.stringToTerraform(struct!.remoteUri),
    authentication: zeroTrustAccessApplicationScimConfigAuthenticationToTerraform(struct!.authentication),
    mappings: cdktf.listMapper(zeroTrustAccessApplicationScimConfigMappingsToTerraform, true)(struct!.mappings),
  }
}


export function zeroTrustAccessApplicationScimConfigToHclTerraform(struct?: ZeroTrustAccessApplicationScimConfigOutputReference | ZeroTrustAccessApplicationScimConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    remote_uri: {
      value: cdktf.stringToHclTerraform(struct!.remoteUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: zeroTrustAccessApplicationScimConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationScimConfigAuthenticationList",
    },
    mappings: {
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationScimConfigMappingsToHclTerraform, true)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationScimConfigMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationScimConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZeroTrustAccessApplicationScimConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._remoteUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteUri = this._remoteUri;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationScimConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deactivateOnDelete = undefined;
      this._enabled = undefined;
      this._idpUid = undefined;
      this._remoteUri = undefined;
      this._authentication.internalValue = undefined;
      this._mappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deactivateOnDelete = value.deactivateOnDelete;
      this._enabled = value.enabled;
      this._idpUid = value.idpUid;
      this._remoteUri = value.remoteUri;
      this._authentication.internalValue = value.authentication;
      this._mappings.internalValue = value.mappings;
    }
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
}
export interface ZeroTrustAccessApplicationTargetCriteriaTargetAttributes {
  /**
  * The key of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}
  */
  readonly name: string;
  /**
  * The values of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#values ZeroTrustAccessApplication#values}
  */
  readonly values: string[];
}

export function zeroTrustAccessApplicationTargetCriteriaTargetAttributesToTerraform(struct?: ZeroTrustAccessApplicationTargetCriteriaTargetAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function zeroTrustAccessApplicationTargetCriteriaTargetAttributesToHclTerraform(struct?: ZeroTrustAccessApplicationTargetCriteriaTargetAttributes | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustAccessApplicationTargetCriteriaTargetAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationTargetCriteriaTargetAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference {
    return new ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustAccessApplicationTargetCriteria {
  /**
  * The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#port ZeroTrustAccessApplication#port}
  */
  readonly port: number;
  /**
  * The communication protocol your application secures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#protocol ZeroTrustAccessApplication#protocol}
  */
  readonly protocol: string;
  /**
  * target_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#target_attributes ZeroTrustAccessApplication#target_attributes}
  */
  readonly targetAttributes: ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[] | cdktf.IResolvable;
}

export function zeroTrustAccessApplicationTargetCriteriaToTerraform(struct?: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_attributes: cdktf.listMapper(zeroTrustAccessApplicationTargetCriteriaTargetAttributesToTerraform, true)(struct!.targetAttributes),
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
      value: cdktf.listMapperHcl(zeroTrustAccessApplicationTargetCriteriaTargetAttributesToHclTerraform, true)(struct!.targetAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList",
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
    if (this._targetAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAttributes = this._targetAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustAccessApplicationTargetCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._targetAttributes.internalValue = undefined;
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
      this._targetAttributes.internalValue = value.targetAttributes;
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
  private _targetAttributes = new ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList(this, "target_attributes", false);
  public get targetAttributes() {
    return this._targetAttributes;
  }
  public putTargetAttributes(value: ZeroTrustAccessApplicationTargetCriteriaTargetAttributes[] | cdktf.IResolvable) {
    this._targetAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAttributesInput() {
    return this._targetAttributes.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}
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
  * @param importFromId The id of the existing ZeroTrustAccessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustAccessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application} Resource
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
        providerVersion: '4.44.0',
        providerVersionConstraint: '~> 4.3'
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
    this._allowedIdps = config.allowedIdps;
    this._appLauncherLogoUrl = config.appLauncherLogoUrl;
    this._appLauncherVisible = config.appLauncherVisible;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._bgColor = config.bgColor;
    this._customDenyMessage = config.customDenyMessage;
    this._customDenyUrl = config.customDenyUrl;
    this._customNonIdentityDenyUrl = config.customNonIdentityDenyUrl;
    this._customPages = config.customPages;
    this._domain = config.domain;
    this._enableBindingCookie = config.enableBindingCookie;
    this._headerBgColor = config.headerBgColor;
    this._httpOnlyCookieAttribute = config.httpOnlyCookieAttribute;
    this._id = config.id;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._optionsPreflightBypass = config.optionsPreflightBypass;
    this._policies = config.policies;
    this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
    this._selfHostedDomains = config.selfHostedDomains;
    this._serviceAuth401Redirect = config.serviceAuth401Redirect;
    this._sessionDuration = config.sessionDuration;
    this._skipAppLauncherLoginPage = config.skipAppLauncherLoginPage;
    this._skipInterstitial = config.skipInterstitial;
    this._tags = config.tags;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._corsHeaders.internalValue = config.corsHeaders;
    this._footerLinks.internalValue = config.footerLinks;
    this._landingPageDesign.internalValue = config.landingPageDesign;
    this._saasApp.internalValue = config.saasApp;
    this._scimConfig.internalValue = config.scimConfig;
    this._targetCriteria.internalValue = config.targetCriteria;
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
    return cdktf.Fn.tolist(this.getListAttribute('custom_pages'));
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
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

  // self_hosted_domains - computed: false, optional: true, required: false
  private _selfHostedDomains?: string[]; 
  public get selfHostedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('self_hosted_domains'));
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

  // skip_app_launcher_login_page - computed: false, optional: true, required: false
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
  private _corsHeaders = new ZeroTrustAccessApplicationCorsHeadersList(this, "cors_headers", false);
  public get corsHeaders() {
    return this._corsHeaders;
  }
  public putCorsHeaders(value: ZeroTrustAccessApplicationCorsHeaders[] | cdktf.IResolvable) {
    this._corsHeaders.internalValue = value;
  }
  public resetCorsHeaders() {
    this._corsHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsHeadersInput() {
    return this._corsHeaders.internalValue;
  }

  // footer_links - computed: false, optional: true, required: false
  private _footerLinks = new ZeroTrustAccessApplicationFooterLinksList(this, "footer_links", true);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allow_authenticate_via_warp: cdktf.booleanToTerraform(this._allowAuthenticateViaWarp),
      allowed_idps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIdps),
      app_launcher_logo_url: cdktf.stringToTerraform(this._appLauncherLogoUrl),
      app_launcher_visible: cdktf.booleanToTerraform(this._appLauncherVisible),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      bg_color: cdktf.stringToTerraform(this._bgColor),
      custom_deny_message: cdktf.stringToTerraform(this._customDenyMessage),
      custom_deny_url: cdktf.stringToTerraform(this._customDenyUrl),
      custom_non_identity_deny_url: cdktf.stringToTerraform(this._customNonIdentityDenyUrl),
      custom_pages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customPages),
      domain: cdktf.stringToTerraform(this._domain),
      enable_binding_cookie: cdktf.booleanToTerraform(this._enableBindingCookie),
      header_bg_color: cdktf.stringToTerraform(this._headerBgColor),
      http_only_cookie_attribute: cdktf.booleanToTerraform(this._httpOnlyCookieAttribute),
      id: cdktf.stringToTerraform(this._id),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      options_preflight_bypass: cdktf.booleanToTerraform(this._optionsPreflightBypass),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
      self_hosted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selfHostedDomains),
      service_auth_401_redirect: cdktf.booleanToTerraform(this._serviceAuth401Redirect),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      skip_app_launcher_login_page: cdktf.booleanToTerraform(this._skipAppLauncherLoginPage),
      skip_interstitial: cdktf.booleanToTerraform(this._skipInterstitial),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cors_headers: cdktf.listMapper(zeroTrustAccessApplicationCorsHeadersToTerraform, true)(this._corsHeaders.internalValue),
      footer_links: cdktf.listMapper(zeroTrustAccessApplicationFooterLinksToTerraform, true)(this._footerLinks.internalValue),
      landing_page_design: zeroTrustAccessApplicationLandingPageDesignToTerraform(this._landingPageDesign.internalValue),
      saas_app: zeroTrustAccessApplicationSaasAppToTerraform(this._saasApp.internalValue),
      scim_config: zeroTrustAccessApplicationScimConfigToTerraform(this._scimConfig.internalValue),
      target_criteria: cdktf.listMapper(zeroTrustAccessApplicationTargetCriteriaToTerraform, true)(this._targetCriteria.internalValue),
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
        type: "set",
        storageClassType: "stringList",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      same_site_cookie_attribute: {
        value: cdktf.stringToHclTerraform(this._sameSiteCookieAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_hosted_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selfHostedDomains),
        isBlock: false,
        type: "set",
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
      cors_headers: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationCorsHeadersToHclTerraform, true)(this._corsHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationCorsHeadersList",
      },
      footer_links: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationFooterLinksToHclTerraform, true)(this._footerLinks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ZeroTrustAccessApplicationFooterLinksList",
      },
      landing_page_design: {
        value: zeroTrustAccessApplicationLandingPageDesignToHclTerraform(this._landingPageDesign.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationLandingPageDesignList",
      },
      saas_app: {
        value: zeroTrustAccessApplicationSaasAppToHclTerraform(this._saasApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationSaasAppList",
      },
      scim_config: {
        value: zeroTrustAccessApplicationScimConfigToHclTerraform(this._scimConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationScimConfigList",
      },
      target_criteria: {
        value: cdktf.listMapperHcl(zeroTrustAccessApplicationTargetCriteriaToHclTerraform, true)(this._targetCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZeroTrustAccessApplicationTargetCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
