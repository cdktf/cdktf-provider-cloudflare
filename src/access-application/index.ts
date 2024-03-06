/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource. Conflicts with `zone_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#account_id AccessApplication#account_id}
  */
  readonly accountId?: string;
  /**
  * When set to true, users can authenticate to this application using their WARP session. When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allow_authenticate_via_warp AccessApplication#allow_authenticate_via_warp}
  */
  readonly allowAuthenticateViaWarp?: boolean | cdktf.IResolvable;
  /**
  * The identity providers selected for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allowed_idps AccessApplication#allowed_idps}
  */
  readonly allowedIdps?: string[];
  /**
  * The logo URL of the app launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#app_launcher_logo_url AccessApplication#app_launcher_logo_url}
  */
  readonly appLauncherLogoUrl?: string;
  /**
  * Option to show/hide applications in App Launcher. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#app_launcher_visible AccessApplication#app_launcher_visible}
  */
  readonly appLauncherVisible?: boolean | cdktf.IResolvable;
  /**
  * Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#auto_redirect_to_identity AccessApplication#auto_redirect_to_identity}
  */
  readonly autoRedirectToIdentity?: boolean | cdktf.IResolvable;
  /**
  * The background color of the app launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#bg_color AccessApplication#bg_color}
  */
  readonly bgColor?: string;
  /**
  * Option that returns a custom error message when a user is denied access to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#custom_deny_message AccessApplication#custom_deny_message}
  */
  readonly customDenyMessage?: string;
  /**
  * Option that redirects to a custom URL when a user is denied access to the application via identity based rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#custom_deny_url AccessApplication#custom_deny_url}
  */
  readonly customDenyUrl?: string;
  /**
  * Option that redirects to a custom URL when a user is denied access to the application via non identity rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#custom_non_identity_deny_url AccessApplication#custom_non_identity_deny_url}
  */
  readonly customNonIdentityDenyUrl?: string;
  /**
  * The custom pages selected for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#custom_pages AccessApplication#custom_pages}
  */
  readonly customPages?: string[];
  /**
  * The primary hostname and path that Access will secure. If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#domain AccessApplication#domain}
  */
  readonly domain?: string;
  /**
  * Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#enable_binding_cookie AccessApplication#enable_binding_cookie}
  */
  readonly enableBindingCookie?: boolean | cdktf.IResolvable;
  /**
  * The background color of the header bar in the app launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#header_bg_color AccessApplication#header_bg_color}
  */
  readonly headerBgColor?: string;
  /**
  * Option to add the `HttpOnly` cookie flag to access tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#http_only_cookie_attribute AccessApplication#http_only_cookie_attribute}
  */
  readonly httpOnlyCookieAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#id AccessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image URL for the logo shown in the app launcher dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#logo_url AccessApplication#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Friendly name of the Access Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name AccessApplication#name}
  */
  readonly name?: string;
  /**
  * Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#same_site_cookie_attribute AccessApplication#same_site_cookie_attribute}
  */
  readonly sameSiteCookieAttribute?: string;
  /**
  * List of domains that access will secure. Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#self_hosted_domains AccessApplication#self_hosted_domains}
  */
  readonly selfHostedDomains?: string[];
  /**
  * Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#service_auth_401_redirect AccessApplication#service_auth_401_redirect}
  */
  readonly serviceAuth401Redirect?: boolean | cdktf.IResolvable;
  /**
  * How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. Defaults to `24h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#session_duration AccessApplication#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * Option to skip the authorization interstitial when using the CLI. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#skip_interstitial AccessApplication#skip_interstitial}
  */
  readonly skipInterstitial?: boolean | cdktf.IResolvable;
  /**
  * The itags associated with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#tags AccessApplication#tags}
  */
  readonly tags?: string[];
  /**
  * The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`. Defaults to `self_hosted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#type AccessApplication#type}
  */
  readonly type?: string;
  /**
  * The zone identifier to target for the resource. Conflicts with `account_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#zone_id AccessApplication#zone_id}
  */
  readonly zoneId?: string;
  /**
  * cors_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#cors_headers AccessApplication#cors_headers}
  */
  readonly corsHeaders?: AccessApplicationCorsHeaders[] | cdktf.IResolvable;
  /**
  * footer_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#footer_links AccessApplication#footer_links}
  */
  readonly footerLinks?: AccessApplicationFooterLinks[] | cdktf.IResolvable;
  /**
  * landing_page_design block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#landing_page_design AccessApplication#landing_page_design}
  */
  readonly landingPageDesign?: AccessApplicationLandingPageDesign;
  /**
  * saas_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#saas_app AccessApplication#saas_app}
  */
  readonly saasApp?: AccessApplicationSaasApp;
}
export interface AccessApplicationCorsHeaders {
  /**
  * Value to determine whether all HTTP headers are exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allow_all_headers AccessApplication#allow_all_headers}
  */
  readonly allowAllHeaders?: boolean | cdktf.IResolvable;
  /**
  * Value to determine whether all methods are exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allow_all_methods AccessApplication#allow_all_methods}
  */
  readonly allowAllMethods?: boolean | cdktf.IResolvable;
  /**
  * Value to determine whether all origins are permitted to make CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allow_all_origins AccessApplication#allow_all_origins}
  */
  readonly allowAllOrigins?: boolean | cdktf.IResolvable;
  /**
  * Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allow_credentials AccessApplication#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * List of HTTP headers to expose via CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allowed_headers AccessApplication#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * List of methods to expose via CORS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allowed_methods AccessApplication#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * List of origins permitted to make CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#allowed_origins AccessApplication#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * The maximum time a preflight request will be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#max_age AccessApplication#max_age}
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


export function accessApplicationCorsHeadersToHclTerraform(struct?: AccessApplicationCorsHeaders | cdktf.IResolvable): any {
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
export interface AccessApplicationFooterLinks {
  /**
  * The name of the footer link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name AccessApplication#name}
  */
  readonly name?: string;
  /**
  * The URL of the footer link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#url AccessApplication#url}
  */
  readonly url?: string;
}

export function accessApplicationFooterLinksToTerraform(struct?: AccessApplicationFooterLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function accessApplicationFooterLinksToHclTerraform(struct?: AccessApplicationFooterLinks | cdktf.IResolvable): any {
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

export class AccessApplicationFooterLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessApplicationFooterLinks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessApplicationFooterLinks | cdktf.IResolvable | undefined) {
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

export class AccessApplicationFooterLinksList extends cdktf.ComplexList {
  public internalValue? : AccessApplicationFooterLinks[] | cdktf.IResolvable

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
  public get(index: number): AccessApplicationFooterLinksOutputReference {
    return new AccessApplicationFooterLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessApplicationLandingPageDesign {
  /**
  * The button color of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#button_color AccessApplication#button_color}
  */
  readonly buttonColor?: string;
  /**
  * The button text color of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#button_text_color AccessApplication#button_text_color}
  */
  readonly buttonTextColor?: string;
  /**
  * The URL of the image to be displayed in the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#image_url AccessApplication#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The message of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#message AccessApplication#message}
  */
  readonly message?: string;
  /**
  * The title of the landing page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#title AccessApplication#title}
  */
  readonly title?: string;
}

export function accessApplicationLandingPageDesignToTerraform(struct?: AccessApplicationLandingPageDesignOutputReference | AccessApplicationLandingPageDesign): any {
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


export function accessApplicationLandingPageDesignToHclTerraform(struct?: AccessApplicationLandingPageDesignOutputReference | AccessApplicationLandingPageDesign): any {
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

export class AccessApplicationLandingPageDesignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessApplicationLandingPageDesign | undefined {
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

  public set internalValue(value: AccessApplicationLandingPageDesign | undefined) {
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
export interface AccessApplicationSaasAppCustomAttributeSource {
  /**
  * The name of the attribute as provided by the IDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name AccessApplication#name}
  */
  readonly name: string;
}

export function accessApplicationSaasAppCustomAttributeSourceToTerraform(struct?: AccessApplicationSaasAppCustomAttributeSourceOutputReference | AccessApplicationSaasAppCustomAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function accessApplicationSaasAppCustomAttributeSourceToHclTerraform(struct?: AccessApplicationSaasAppCustomAttributeSourceOutputReference | AccessApplicationSaasAppCustomAttributeSource): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessApplicationSaasAppCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessApplicationSaasAppCustomAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessApplicationSaasAppCustomAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface AccessApplicationSaasAppCustomAttribute {
  /**
  * A friendly name for the attribute as provided to the SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#friendly_name AccessApplication#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The name of the attribute as provided to the SaaS app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name AccessApplication#name}
  */
  readonly name?: string;
  /**
  * A globally unique name for an identity or service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name_format AccessApplication#name_format}
  */
  readonly nameFormat?: string;
  /**
  * True if the attribute must be always present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#required AccessApplication#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#source AccessApplication#source}
  */
  readonly source: AccessApplicationSaasAppCustomAttributeSource;
}

export function accessApplicationSaasAppCustomAttributeToTerraform(struct?: AccessApplicationSaasAppCustomAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    name: cdktf.stringToTerraform(struct!.name),
    name_format: cdktf.stringToTerraform(struct!.nameFormat),
    required: cdktf.booleanToTerraform(struct!.required),
    source: accessApplicationSaasAppCustomAttributeSourceToTerraform(struct!.source),
  }
}


export function accessApplicationSaasAppCustomAttributeToHclTerraform(struct?: AccessApplicationSaasAppCustomAttribute | cdktf.IResolvable): any {
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
      value: accessApplicationSaasAppCustomAttributeSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "AccessApplicationSaasAppCustomAttributeSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessApplicationSaasAppCustomAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessApplicationSaasAppCustomAttribute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessApplicationSaasAppCustomAttribute | cdktf.IResolvable | undefined) {
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
  private _source = new AccessApplicationSaasAppCustomAttributeSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: AccessApplicationSaasAppCustomAttributeSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class AccessApplicationSaasAppCustomAttributeList extends cdktf.ComplexList {
  public internalValue? : AccessApplicationSaasAppCustomAttribute[] | cdktf.IResolvable

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
  public get(index: number): AccessApplicationSaasAppCustomAttributeOutputReference {
    return new AccessApplicationSaasAppCustomAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessApplicationSaasApp {
  /**
  * The URL where this applications tile redirects users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#app_launcher_url AccessApplication#app_launcher_url}
  */
  readonly appLauncherUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#auth_type AccessApplication#auth_type}
  */
  readonly authType?: string;
  /**
  * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#consumer_service_url AccessApplication#consumer_service_url}
  */
  readonly consumerServiceUrl?: string;
  /**
  * The relay state used if not provided by the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#default_relay_state AccessApplication#default_relay_state}
  */
  readonly defaultRelayState?: string;
  /**
  * The OIDC flows supported by this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#grant_types AccessApplication#grant_types}
  */
  readonly grantTypes?: string[];
  /**
  * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#group_filter_regex AccessApplication#group_filter_regex}
  */
  readonly groupFilterRegex?: string;
  /**
  * The format of the name identifier sent to the SaaS application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name_id_format AccessApplication#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#name_id_transform_jsonata AccessApplication#name_id_transform_jsonata}
  */
  readonly nameIdTransformJsonata?: string;
  /**
  * The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#redirect_uris AccessApplication#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Define the user information shared with access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#scopes AccessApplication#scopes}
  */
  readonly scopes?: string[];
  /**
  * A globally unique name for an identity or service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#sp_entity_id AccessApplication#sp_entity_id}
  */
  readonly spEntityId?: string;
  /**
  * custom_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#custom_attribute AccessApplication#custom_attribute}
  */
  readonly customAttribute?: AccessApplicationSaasAppCustomAttribute[] | cdktf.IResolvable;
}

export function accessApplicationSaasAppToTerraform(struct?: AccessApplicationSaasAppOutputReference | AccessApplicationSaasApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_launcher_url: cdktf.stringToTerraform(struct!.appLauncherUrl),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    consumer_service_url: cdktf.stringToTerraform(struct!.consumerServiceUrl),
    default_relay_state: cdktf.stringToTerraform(struct!.defaultRelayState),
    grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grantTypes),
    group_filter_regex: cdktf.stringToTerraform(struct!.groupFilterRegex),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    name_id_transform_jsonata: cdktf.stringToTerraform(struct!.nameIdTransformJsonata),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    custom_attribute: cdktf.listMapper(accessApplicationSaasAppCustomAttributeToTerraform, true)(struct!.customAttribute),
  }
}


export function accessApplicationSaasAppToHclTerraform(struct?: AccessApplicationSaasAppOutputReference | AccessApplicationSaasApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.listMapperHcl(accessApplicationSaasAppCustomAttributeToHclTerraform, true)(struct!.customAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "AccessApplicationSaasAppCustomAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessApplicationSaasApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appLauncherUrl = undefined;
      this._authType = undefined;
      this._consumerServiceUrl = undefined;
      this._defaultRelayState = undefined;
      this._grantTypes = undefined;
      this._groupFilterRegex = undefined;
      this._nameIdFormat = undefined;
      this._nameIdTransformJsonata = undefined;
      this._redirectUris = undefined;
      this._scopes = undefined;
      this._spEntityId = undefined;
      this._customAttribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appLauncherUrl = value.appLauncherUrl;
      this._authType = value.authType;
      this._consumerServiceUrl = value.consumerServiceUrl;
      this._defaultRelayState = value.defaultRelayState;
      this._grantTypes = value.grantTypes;
      this._groupFilterRegex = value.groupFilterRegex;
      this._nameIdFormat = value.nameIdFormat;
      this._nameIdTransformJsonata = value.nameIdTransformJsonata;
      this._redirectUris = value.redirectUris;
      this._scopes = value.scopes;
      this._spEntityId = value.spEntityId;
      this._customAttribute.internalValue = value.customAttribute;
    }
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
  private _customAttribute = new AccessApplicationSaasAppCustomAttributeList(this, "custom_attribute", false);
  public get customAttribute() {
    return this._customAttribute;
  }
  public putCustomAttribute(value: AccessApplicationSaasAppCustomAttribute[] | cdktf.IResolvable) {
    this._customAttribute.internalValue = value;
  }
  public resetCustomAttribute() {
    this._customAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeInput() {
    return this._customAttribute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application cloudflare_access_application}
*/
export class AccessApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_access_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessApplication to import
  * @param importFromId The id of the existing AccessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_access_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/access_application cloudflare_access_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessApplicationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccessApplicationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.26.0',
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
    this._sameSiteCookieAttribute = config.sameSiteCookieAttribute;
    this._selfHostedDomains = config.selfHostedDomains;
    this._serviceAuth401Redirect = config.serviceAuth401Redirect;
    this._sessionDuration = config.sessionDuration;
    this._skipInterstitial = config.skipInterstitial;
    this._tags = config.tags;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._corsHeaders.internalValue = config.corsHeaders;
    this._footerLinks.internalValue = config.footerLinks;
    this._landingPageDesign.internalValue = config.landingPageDesign;
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

  // footer_links - computed: false, optional: true, required: false
  private _footerLinks = new AccessApplicationFooterLinksList(this, "footer_links", true);
  public get footerLinks() {
    return this._footerLinks;
  }
  public putFooterLinks(value: AccessApplicationFooterLinks[] | cdktf.IResolvable) {
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
  private _landingPageDesign = new AccessApplicationLandingPageDesignOutputReference(this, "landing_page_design");
  public get landingPageDesign() {
    return this._landingPageDesign;
  }
  public putLandingPageDesign(value: AccessApplicationLandingPageDesign) {
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
      same_site_cookie_attribute: cdktf.stringToTerraform(this._sameSiteCookieAttribute),
      self_hosted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selfHostedDomains),
      service_auth_401_redirect: cdktf.booleanToTerraform(this._serviceAuth401Redirect),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      skip_interstitial: cdktf.booleanToTerraform(this._skipInterstitial),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cors_headers: cdktf.listMapper(accessApplicationCorsHeadersToTerraform, true)(this._corsHeaders.internalValue),
      footer_links: cdktf.listMapper(accessApplicationFooterLinksToTerraform, true)(this._footerLinks.internalValue),
      landing_page_design: accessApplicationLandingPageDesignToTerraform(this._landingPageDesign.internalValue),
      saas_app: accessApplicationSaasAppToTerraform(this._saasApp.internalValue),
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
        value: cdktf.listMapperHcl(accessApplicationCorsHeadersToHclTerraform, true)(this._corsHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessApplicationCorsHeadersList",
      },
      footer_links: {
        value: cdktf.listMapperHcl(accessApplicationFooterLinksToHclTerraform, true)(this._footerLinks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccessApplicationFooterLinksList",
      },
      landing_page_design: {
        value: accessApplicationLandingPageDesignToHclTerraform(this._landingPageDesign.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessApplicationLandingPageDesignList",
      },
      saas_app: {
        value: accessApplicationSaasAppToHclTerraform(this._saasApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessApplicationSaasAppList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
