// https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneSettingsOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#id ZoneSettingsOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#zone_id ZoneSettingsOverride#zone_id}
  */
  readonly zoneId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#settings ZoneSettingsOverride#settings}
  */
  readonly settings?: ZoneSettingsOverrideSettings;
}
export interface ZoneSettingsOverrideInitialSettingsMinify {
}

export function zoneSettingsOverrideInitialSettingsMinifyToTerraform(struct?: ZoneSettingsOverrideInitialSettingsMinify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ZoneSettingsOverrideInitialSettingsMinifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneSettingsOverrideInitialSettingsMinify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideInitialSettingsMinify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // css - computed: true, optional: false, required: false
  public get css() {
    return this.getStringAttribute('css');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }

  // js - computed: true, optional: false, required: false
  public get js() {
    return this.getStringAttribute('js');
  }
}

export class ZoneSettingsOverrideInitialSettingsMinifyList extends cdktf.ComplexList {

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
  public get(index: number): ZoneSettingsOverrideInitialSettingsMinifyOutputReference {
    return new ZoneSettingsOverrideInitialSettingsMinifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneSettingsOverrideInitialSettingsMobileRedirect {
}

export function zoneSettingsOverrideInitialSettingsMobileRedirectToTerraform(struct?: ZoneSettingsOverrideInitialSettingsMobileRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneSettingsOverrideInitialSettingsMobileRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideInitialSettingsMobileRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mobile_subdomain - computed: true, optional: false, required: false
  public get mobileSubdomain() {
    return this.getStringAttribute('mobile_subdomain');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strip_uri - computed: true, optional: false, required: false
  public get stripUri() {
    return this.getBooleanAttribute('strip_uri');
  }
}

export class ZoneSettingsOverrideInitialSettingsMobileRedirectList extends cdktf.ComplexList {

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
  public get(index: number): ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference {
    return new ZoneSettingsOverrideInitialSettingsMobileRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneSettingsOverrideInitialSettingsSecurityHeader {
}

export function zoneSettingsOverrideInitialSettingsSecurityHeaderToTerraform(struct?: ZoneSettingsOverrideInitialSettingsSecurityHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneSettingsOverrideInitialSettingsSecurityHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideInitialSettingsSecurityHeader | undefined) {
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

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // nosniff - computed: true, optional: false, required: false
  public get nosniff() {
    return this.getBooleanAttribute('nosniff');
  }

  // preload - computed: true, optional: false, required: false
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
}

export class ZoneSettingsOverrideInitialSettingsSecurityHeaderList extends cdktf.ComplexList {

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
  public get(index: number): ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference {
    return new ZoneSettingsOverrideInitialSettingsSecurityHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneSettingsOverrideInitialSettings {
}

export function zoneSettingsOverrideInitialSettingsToTerraform(struct?: ZoneSettingsOverrideInitialSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ZoneSettingsOverrideInitialSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneSettingsOverrideInitialSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideInitialSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // always_online - computed: true, optional: false, required: false
  public get alwaysOnline() {
    return this.getStringAttribute('always_online');
  }

  // always_use_https - computed: true, optional: false, required: false
  public get alwaysUseHttps() {
    return this.getStringAttribute('always_use_https');
  }

  // automatic_https_rewrites - computed: true, optional: false, required: false
  public get automaticHttpsRewrites() {
    return this.getStringAttribute('automatic_https_rewrites');
  }

  // binary_ast - computed: true, optional: false, required: false
  public get binaryAst() {
    return this.getStringAttribute('binary_ast');
  }

  // brotli - computed: true, optional: false, required: false
  public get brotli() {
    return this.getStringAttribute('brotli');
  }

  // browser_cache_ttl - computed: true, optional: false, required: false
  public get browserCacheTtl() {
    return this.getNumberAttribute('browser_cache_ttl');
  }

  // browser_check - computed: true, optional: false, required: false
  public get browserCheck() {
    return this.getStringAttribute('browser_check');
  }

  // cache_level - computed: true, optional: false, required: false
  public get cacheLevel() {
    return this.getStringAttribute('cache_level');
  }

  // challenge_ttl - computed: true, optional: false, required: false
  public get challengeTtl() {
    return this.getNumberAttribute('challenge_ttl');
  }

  // ciphers - computed: true, optional: false, required: false
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }

  // cname_flattening - computed: true, optional: false, required: false
  public get cnameFlattening() {
    return this.getStringAttribute('cname_flattening');
  }

  // development_mode - computed: true, optional: false, required: false
  public get developmentMode() {
    return this.getStringAttribute('development_mode');
  }

  // early_hints - computed: true, optional: false, required: false
  public get earlyHints() {
    return this.getStringAttribute('early_hints');
  }

  // email_obfuscation - computed: true, optional: false, required: false
  public get emailObfuscation() {
    return this.getStringAttribute('email_obfuscation');
  }

  // filter_logs_to_cloudflare - computed: true, optional: false, required: false
  public get filterLogsToCloudflare() {
    return this.getStringAttribute('filter_logs_to_cloudflare');
  }

  // h2_prioritization - computed: true, optional: false, required: false
  public get h2Prioritization() {
    return this.getStringAttribute('h2_prioritization');
  }

  // hotlink_protection - computed: true, optional: false, required: false
  public get hotlinkProtection() {
    return this.getStringAttribute('hotlink_protection');
  }

  // http2 - computed: true, optional: false, required: false
  public get http2() {
    return this.getStringAttribute('http2');
  }

  // http3 - computed: true, optional: false, required: false
  public get http3() {
    return this.getStringAttribute('http3');
  }

  // image_resizing - computed: true, optional: false, required: false
  public get imageResizing() {
    return this.getStringAttribute('image_resizing');
  }

  // ip_geolocation - computed: true, optional: false, required: false
  public get ipGeolocation() {
    return this.getStringAttribute('ip_geolocation');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // log_to_cloudflare - computed: true, optional: false, required: false
  public get logToCloudflare() {
    return this.getStringAttribute('log_to_cloudflare');
  }

  // max_upload - computed: true, optional: false, required: false
  public get maxUpload() {
    return this.getNumberAttribute('max_upload');
  }

  // min_tls_version - computed: true, optional: false, required: false
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }

  // minify - computed: true, optional: false, required: false
  private _minify = new ZoneSettingsOverrideInitialSettingsMinifyList(this, "minify", false);
  public get minify() {
    return this._minify;
  }

  // mirage - computed: true, optional: false, required: false
  public get mirage() {
    return this.getStringAttribute('mirage');
  }

  // mobile_redirect - computed: true, optional: false, required: false
  private _mobileRedirect = new ZoneSettingsOverrideInitialSettingsMobileRedirectList(this, "mobile_redirect", false);
  public get mobileRedirect() {
    return this._mobileRedirect;
  }

  // opportunistic_encryption - computed: true, optional: false, required: false
  public get opportunisticEncryption() {
    return this.getStringAttribute('opportunistic_encryption');
  }

  // opportunistic_onion - computed: true, optional: false, required: false
  public get opportunisticOnion() {
    return this.getStringAttribute('opportunistic_onion');
  }

  // orange_to_orange - computed: true, optional: false, required: false
  public get orangeToOrange() {
    return this.getStringAttribute('orange_to_orange');
  }

  // origin_error_page_pass_thru - computed: true, optional: false, required: false
  public get originErrorPagePassThru() {
    return this.getStringAttribute('origin_error_page_pass_thru');
  }

  // origin_max_http_version - computed: true, optional: false, required: false
  public get originMaxHttpVersion() {
    return this.getStringAttribute('origin_max_http_version');
  }

  // polish - computed: true, optional: false, required: false
  public get polish() {
    return this.getStringAttribute('polish');
  }

  // prefetch_preload - computed: true, optional: false, required: false
  public get prefetchPreload() {
    return this.getStringAttribute('prefetch_preload');
  }

  // privacy_pass - computed: true, optional: false, required: false
  public get privacyPass() {
    return this.getStringAttribute('privacy_pass');
  }

  // proxy_read_timeout - computed: true, optional: false, required: false
  public get proxyReadTimeout() {
    return this.getStringAttribute('proxy_read_timeout');
  }

  // pseudo_ipv4 - computed: true, optional: false, required: false
  public get pseudoIpv4() {
    return this.getStringAttribute('pseudo_ipv4');
  }

  // response_buffering - computed: true, optional: false, required: false
  public get responseBuffering() {
    return this.getStringAttribute('response_buffering');
  }

  // rocket_loader - computed: true, optional: false, required: false
  public get rocketLoader() {
    return this.getStringAttribute('rocket_loader');
  }

  // security_header - computed: true, optional: false, required: false
  private _securityHeader = new ZoneSettingsOverrideInitialSettingsSecurityHeaderList(this, "security_header", false);
  public get securityHeader() {
    return this._securityHeader;
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // server_side_exclude - computed: true, optional: false, required: false
  public get serverSideExclude() {
    return this.getStringAttribute('server_side_exclude');
  }

  // sort_query_string_for_cache - computed: true, optional: false, required: false
  public get sortQueryStringForCache() {
    return this.getStringAttribute('sort_query_string_for_cache');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // tls_1_2_only - computed: true, optional: false, required: false
  public get tls12Only() {
    return this.getStringAttribute('tls_1_2_only');
  }

  // tls_1_3 - computed: true, optional: false, required: false
  public get tls13() {
    return this.getStringAttribute('tls_1_3');
  }

  // tls_client_auth - computed: true, optional: false, required: false
  public get tlsClientAuth() {
    return this.getStringAttribute('tls_client_auth');
  }

  // true_client_ip_header - computed: true, optional: false, required: false
  public get trueClientIpHeader() {
    return this.getStringAttribute('true_client_ip_header');
  }

  // universal_ssl - computed: true, optional: false, required: false
  public get universalSsl() {
    return this.getStringAttribute('universal_ssl');
  }

  // visitor_ip - computed: true, optional: false, required: false
  public get visitorIp() {
    return this.getStringAttribute('visitor_ip');
  }

  // waf - computed: true, optional: false, required: false
  public get waf() {
    return this.getStringAttribute('waf');
  }

  // webp - computed: true, optional: false, required: false
  public get webp() {
    return this.getStringAttribute('webp');
  }

  // websockets - computed: true, optional: false, required: false
  public get websockets() {
    return this.getStringAttribute('websockets');
  }

  // zero_rtt - computed: true, optional: false, required: false
  public get zeroRtt() {
    return this.getStringAttribute('zero_rtt');
  }
}

export class ZoneSettingsOverrideInitialSettingsList extends cdktf.ComplexList {

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
  public get(index: number): ZoneSettingsOverrideInitialSettingsOutputReference {
    return new ZoneSettingsOverrideInitialSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneSettingsOverrideSettingsMinify {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#css ZoneSettingsOverride#css}
  */
  readonly css: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#html ZoneSettingsOverride#html}
  */
  readonly html: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#js ZoneSettingsOverride#js}
  */
  readonly js: string;
}

export function zoneSettingsOverrideSettingsMinifyToTerraform(struct?: ZoneSettingsOverrideSettingsMinifyOutputReference | ZoneSettingsOverrideSettingsMinify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    css: cdktf.stringToTerraform(struct!.css),
    html: cdktf.stringToTerraform(struct!.html),
    js: cdktf.stringToTerraform(struct!.js),
  }
}

export class ZoneSettingsOverrideSettingsMinifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSettingsOverrideSettingsMinify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._css !== undefined) {
      hasAnyValues = true;
      internalValueResult.css = this._css;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    if (this._js !== undefined) {
      hasAnyValues = true;
      internalValueResult.js = this._js;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideSettingsMinify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._css = undefined;
      this._html = undefined;
      this._js = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._css = value.css;
      this._html = value.html;
      this._js = value.js;
    }
  }

  // css - computed: false, optional: false, required: true
  private _css?: string; 
  public get css() {
    return this.getStringAttribute('css');
  }
  public set css(value: string) {
    this._css = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css;
  }

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }

  // js - computed: false, optional: false, required: true
  private _js?: string; 
  public get js() {
    return this.getStringAttribute('js');
  }
  public set js(value: string) {
    this._js = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInput() {
    return this._js;
  }
}
export interface ZoneSettingsOverrideSettingsMobileRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#mobile_subdomain ZoneSettingsOverride#mobile_subdomain}
  */
  readonly mobileSubdomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#status ZoneSettingsOverride#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#strip_uri ZoneSettingsOverride#strip_uri}
  */
  readonly stripUri: boolean | cdktf.IResolvable;
}

export function zoneSettingsOverrideSettingsMobileRedirectToTerraform(struct?: ZoneSettingsOverrideSettingsMobileRedirectOutputReference | ZoneSettingsOverrideSettingsMobileRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_subdomain: cdktf.stringToTerraform(struct!.mobileSubdomain),
    status: cdktf.stringToTerraform(struct!.status),
    strip_uri: cdktf.booleanToTerraform(struct!.stripUri),
  }
}

export class ZoneSettingsOverrideSettingsMobileRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSettingsOverrideSettingsMobileRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileSubdomain = this._mobileSubdomain;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._stripUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripUri = this._stripUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideSettingsMobileRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileSubdomain = undefined;
      this._status = undefined;
      this._stripUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileSubdomain = value.mobileSubdomain;
      this._status = value.status;
      this._stripUri = value.stripUri;
    }
  }

  // mobile_subdomain - computed: false, optional: false, required: true
  private _mobileSubdomain?: string; 
  public get mobileSubdomain() {
    return this.getStringAttribute('mobile_subdomain');
  }
  public set mobileSubdomain(value: string) {
    this._mobileSubdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSubdomainInput() {
    return this._mobileSubdomain;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strip_uri - computed: false, optional: false, required: true
  private _stripUri?: boolean | cdktf.IResolvable; 
  public get stripUri() {
    return this.getBooleanAttribute('strip_uri');
  }
  public set stripUri(value: boolean | cdktf.IResolvable) {
    this._stripUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stripUriInput() {
    return this._stripUri;
  }
}
export interface ZoneSettingsOverrideSettingsSecurityHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#enabled ZoneSettingsOverride#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#include_subdomains ZoneSettingsOverride#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#max_age ZoneSettingsOverride#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#nosniff ZoneSettingsOverride#nosniff}
  */
  readonly nosniff?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#preload ZoneSettingsOverride#preload}
  */
  readonly preload?: boolean | cdktf.IResolvable;
}

export function zoneSettingsOverrideSettingsSecurityHeaderToTerraform(struct?: ZoneSettingsOverrideSettingsSecurityHeaderOutputReference | ZoneSettingsOverrideSettingsSecurityHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    nosniff: cdktf.booleanToTerraform(struct!.nosniff),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}

export class ZoneSettingsOverrideSettingsSecurityHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSettingsOverrideSettingsSecurityHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._nosniff !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosniff = this._nosniff;
    }
    if (this._preload !== undefined) {
      hasAnyValues = true;
      internalValueResult.preload = this._preload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideSettingsSecurityHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._includeSubdomains = undefined;
      this._maxAge = undefined;
      this._nosniff = undefined;
      this._preload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._includeSubdomains = value.includeSubdomains;
      this._maxAge = value.maxAge;
      this._nosniff = value.nosniff;
      this._preload = value.preload;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // include_subdomains - computed: true, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // max_age - computed: true, optional: true, required: false
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

  // nosniff - computed: true, optional: true, required: false
  private _nosniff?: boolean | cdktf.IResolvable; 
  public get nosniff() {
    return this.getBooleanAttribute('nosniff');
  }
  public set nosniff(value: boolean | cdktf.IResolvable) {
    this._nosniff = value;
  }
  public resetNosniff() {
    this._nosniff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosniffInput() {
    return this._nosniff;
  }

  // preload - computed: true, optional: true, required: false
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }
}
export interface ZoneSettingsOverrideSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#always_online ZoneSettingsOverride#always_online}
  */
  readonly alwaysOnline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#always_use_https ZoneSettingsOverride#always_use_https}
  */
  readonly alwaysUseHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#automatic_https_rewrites ZoneSettingsOverride#automatic_https_rewrites}
  */
  readonly automaticHttpsRewrites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#binary_ast ZoneSettingsOverride#binary_ast}
  */
  readonly binaryAst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#brotli ZoneSettingsOverride#brotli}
  */
  readonly brotli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#browser_cache_ttl ZoneSettingsOverride#browser_cache_ttl}
  */
  readonly browserCacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#browser_check ZoneSettingsOverride#browser_check}
  */
  readonly browserCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#cache_level ZoneSettingsOverride#cache_level}
  */
  readonly cacheLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#challenge_ttl ZoneSettingsOverride#challenge_ttl}
  */
  readonly challengeTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#ciphers ZoneSettingsOverride#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#cname_flattening ZoneSettingsOverride#cname_flattening}
  */
  readonly cnameFlattening?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#development_mode ZoneSettingsOverride#development_mode}
  */
  readonly developmentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#early_hints ZoneSettingsOverride#early_hints}
  */
  readonly earlyHints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#email_obfuscation ZoneSettingsOverride#email_obfuscation}
  */
  readonly emailObfuscation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#filter_logs_to_cloudflare ZoneSettingsOverride#filter_logs_to_cloudflare}
  */
  readonly filterLogsToCloudflare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#h2_prioritization ZoneSettingsOverride#h2_prioritization}
  */
  readonly h2Prioritization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#hotlink_protection ZoneSettingsOverride#hotlink_protection}
  */
  readonly hotlinkProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#http2 ZoneSettingsOverride#http2}
  */
  readonly http2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#http3 ZoneSettingsOverride#http3}
  */
  readonly http3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#image_resizing ZoneSettingsOverride#image_resizing}
  */
  readonly imageResizing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#ip_geolocation ZoneSettingsOverride#ip_geolocation}
  */
  readonly ipGeolocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#ipv6 ZoneSettingsOverride#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#log_to_cloudflare ZoneSettingsOverride#log_to_cloudflare}
  */
  readonly logToCloudflare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#max_upload ZoneSettingsOverride#max_upload}
  */
  readonly maxUpload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#min_tls_version ZoneSettingsOverride#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#mirage ZoneSettingsOverride#mirage}
  */
  readonly mirage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#opportunistic_encryption ZoneSettingsOverride#opportunistic_encryption}
  */
  readonly opportunisticEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#opportunistic_onion ZoneSettingsOverride#opportunistic_onion}
  */
  readonly opportunisticOnion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#orange_to_orange ZoneSettingsOverride#orange_to_orange}
  */
  readonly orangeToOrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#origin_error_page_pass_thru ZoneSettingsOverride#origin_error_page_pass_thru}
  */
  readonly originErrorPagePassThru?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#origin_max_http_version ZoneSettingsOverride#origin_max_http_version}
  */
  readonly originMaxHttpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#polish ZoneSettingsOverride#polish}
  */
  readonly polish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#prefetch_preload ZoneSettingsOverride#prefetch_preload}
  */
  readonly prefetchPreload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#privacy_pass ZoneSettingsOverride#privacy_pass}
  */
  readonly privacyPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#proxy_read_timeout ZoneSettingsOverride#proxy_read_timeout}
  */
  readonly proxyReadTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#pseudo_ipv4 ZoneSettingsOverride#pseudo_ipv4}
  */
  readonly pseudoIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#response_buffering ZoneSettingsOverride#response_buffering}
  */
  readonly responseBuffering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#rocket_loader ZoneSettingsOverride#rocket_loader}
  */
  readonly rocketLoader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#security_level ZoneSettingsOverride#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#server_side_exclude ZoneSettingsOverride#server_side_exclude}
  */
  readonly serverSideExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#sort_query_string_for_cache ZoneSettingsOverride#sort_query_string_for_cache}
  */
  readonly sortQueryStringForCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#ssl ZoneSettingsOverride#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#tls_1_2_only ZoneSettingsOverride#tls_1_2_only}
  */
  readonly tls12Only?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#tls_1_3 ZoneSettingsOverride#tls_1_3}
  */
  readonly tls13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#tls_client_auth ZoneSettingsOverride#tls_client_auth}
  */
  readonly tlsClientAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#true_client_ip_header ZoneSettingsOverride#true_client_ip_header}
  */
  readonly trueClientIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#universal_ssl ZoneSettingsOverride#universal_ssl}
  */
  readonly universalSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#visitor_ip ZoneSettingsOverride#visitor_ip}
  */
  readonly visitorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#waf ZoneSettingsOverride#waf}
  */
  readonly waf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#webp ZoneSettingsOverride#webp}
  */
  readonly webp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#websockets ZoneSettingsOverride#websockets}
  */
  readonly websockets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#zero_rtt ZoneSettingsOverride#zero_rtt}
  */
  readonly zeroRtt?: string;
  /**
  * minify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#minify ZoneSettingsOverride#minify}
  */
  readonly minify?: ZoneSettingsOverrideSettingsMinify;
  /**
  * mobile_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#mobile_redirect ZoneSettingsOverride#mobile_redirect}
  */
  readonly mobileRedirect?: ZoneSettingsOverrideSettingsMobileRedirect;
  /**
  * security_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override#security_header ZoneSettingsOverride#security_header}
  */
  readonly securityHeader?: ZoneSettingsOverrideSettingsSecurityHeader;
}

export function zoneSettingsOverrideSettingsToTerraform(struct?: ZoneSettingsOverrideSettingsOutputReference | ZoneSettingsOverrideSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_online: cdktf.stringToTerraform(struct!.alwaysOnline),
    always_use_https: cdktf.stringToTerraform(struct!.alwaysUseHttps),
    automatic_https_rewrites: cdktf.stringToTerraform(struct!.automaticHttpsRewrites),
    binary_ast: cdktf.stringToTerraform(struct!.binaryAst),
    brotli: cdktf.stringToTerraform(struct!.brotli),
    browser_cache_ttl: cdktf.numberToTerraform(struct!.browserCacheTtl),
    browser_check: cdktf.stringToTerraform(struct!.browserCheck),
    cache_level: cdktf.stringToTerraform(struct!.cacheLevel),
    challenge_ttl: cdktf.numberToTerraform(struct!.challengeTtl),
    ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphers),
    cname_flattening: cdktf.stringToTerraform(struct!.cnameFlattening),
    development_mode: cdktf.stringToTerraform(struct!.developmentMode),
    early_hints: cdktf.stringToTerraform(struct!.earlyHints),
    email_obfuscation: cdktf.stringToTerraform(struct!.emailObfuscation),
    filter_logs_to_cloudflare: cdktf.stringToTerraform(struct!.filterLogsToCloudflare),
    h2_prioritization: cdktf.stringToTerraform(struct!.h2Prioritization),
    hotlink_protection: cdktf.stringToTerraform(struct!.hotlinkProtection),
    http2: cdktf.stringToTerraform(struct!.http2),
    http3: cdktf.stringToTerraform(struct!.http3),
    image_resizing: cdktf.stringToTerraform(struct!.imageResizing),
    ip_geolocation: cdktf.stringToTerraform(struct!.ipGeolocation),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    log_to_cloudflare: cdktf.stringToTerraform(struct!.logToCloudflare),
    max_upload: cdktf.numberToTerraform(struct!.maxUpload),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    mirage: cdktf.stringToTerraform(struct!.mirage),
    opportunistic_encryption: cdktf.stringToTerraform(struct!.opportunisticEncryption),
    opportunistic_onion: cdktf.stringToTerraform(struct!.opportunisticOnion),
    orange_to_orange: cdktf.stringToTerraform(struct!.orangeToOrange),
    origin_error_page_pass_thru: cdktf.stringToTerraform(struct!.originErrorPagePassThru),
    origin_max_http_version: cdktf.stringToTerraform(struct!.originMaxHttpVersion),
    polish: cdktf.stringToTerraform(struct!.polish),
    prefetch_preload: cdktf.stringToTerraform(struct!.prefetchPreload),
    privacy_pass: cdktf.stringToTerraform(struct!.privacyPass),
    proxy_read_timeout: cdktf.stringToTerraform(struct!.proxyReadTimeout),
    pseudo_ipv4: cdktf.stringToTerraform(struct!.pseudoIpv4),
    response_buffering: cdktf.stringToTerraform(struct!.responseBuffering),
    rocket_loader: cdktf.stringToTerraform(struct!.rocketLoader),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    server_side_exclude: cdktf.stringToTerraform(struct!.serverSideExclude),
    sort_query_string_for_cache: cdktf.stringToTerraform(struct!.sortQueryStringForCache),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    tls_1_2_only: cdktf.stringToTerraform(struct!.tls12Only),
    tls_1_3: cdktf.stringToTerraform(struct!.tls13),
    tls_client_auth: cdktf.stringToTerraform(struct!.tlsClientAuth),
    true_client_ip_header: cdktf.stringToTerraform(struct!.trueClientIpHeader),
    universal_ssl: cdktf.stringToTerraform(struct!.universalSsl),
    visitor_ip: cdktf.stringToTerraform(struct!.visitorIp),
    waf: cdktf.stringToTerraform(struct!.waf),
    webp: cdktf.stringToTerraform(struct!.webp),
    websockets: cdktf.stringToTerraform(struct!.websockets),
    zero_rtt: cdktf.stringToTerraform(struct!.zeroRtt),
    minify: zoneSettingsOverrideSettingsMinifyToTerraform(struct!.minify),
    mobile_redirect: zoneSettingsOverrideSettingsMobileRedirectToTerraform(struct!.mobileRedirect),
    security_header: zoneSettingsOverrideSettingsSecurityHeaderToTerraform(struct!.securityHeader),
  }
}

export class ZoneSettingsOverrideSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSettingsOverrideSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysOnline !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysOnline = this._alwaysOnline;
    }
    if (this._alwaysUseHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUseHttps = this._alwaysUseHttps;
    }
    if (this._automaticHttpsRewrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticHttpsRewrites = this._automaticHttpsRewrites;
    }
    if (this._binaryAst !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAst = this._binaryAst;
    }
    if (this._brotli !== undefined) {
      hasAnyValues = true;
      internalValueResult.brotli = this._brotli;
    }
    if (this._browserCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCacheTtl = this._browserCacheTtl;
    }
    if (this._browserCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserCheck = this._browserCheck;
    }
    if (this._cacheLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLevel = this._cacheLevel;
    }
    if (this._challengeTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeTtl = this._challengeTtl;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._cnameFlattening !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameFlattening = this._cnameFlattening;
    }
    if (this._developmentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.developmentMode = this._developmentMode;
    }
    if (this._earlyHints !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyHints = this._earlyHints;
    }
    if (this._emailObfuscation !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailObfuscation = this._emailObfuscation;
    }
    if (this._filterLogsToCloudflare !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLogsToCloudflare = this._filterLogsToCloudflare;
    }
    if (this._h2Prioritization !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2Prioritization = this._h2Prioritization;
    }
    if (this._hotlinkProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotlinkProtection = this._hotlinkProtection;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._http3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http3 = this._http3;
    }
    if (this._imageResizing !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResizing = this._imageResizing;
    }
    if (this._ipGeolocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGeolocation = this._ipGeolocation;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._logToCloudflare !== undefined) {
      hasAnyValues = true;
      internalValueResult.logToCloudflare = this._logToCloudflare;
    }
    if (this._maxUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpload = this._maxUpload;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._mirage !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirage = this._mirage;
    }
    if (this._opportunisticEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.opportunisticEncryption = this._opportunisticEncryption;
    }
    if (this._opportunisticOnion !== undefined) {
      hasAnyValues = true;
      internalValueResult.opportunisticOnion = this._opportunisticOnion;
    }
    if (this._orangeToOrange !== undefined) {
      hasAnyValues = true;
      internalValueResult.orangeToOrange = this._orangeToOrange;
    }
    if (this._originErrorPagePassThru !== undefined) {
      hasAnyValues = true;
      internalValueResult.originErrorPagePassThru = this._originErrorPagePassThru;
    }
    if (this._originMaxHttpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.originMaxHttpVersion = this._originMaxHttpVersion;
    }
    if (this._polish !== undefined) {
      hasAnyValues = true;
      internalValueResult.polish = this._polish;
    }
    if (this._prefetchPreload !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefetchPreload = this._prefetchPreload;
    }
    if (this._privacyPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPass = this._privacyPass;
    }
    if (this._proxyReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyReadTimeout = this._proxyReadTimeout;
    }
    if (this._pseudoIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudoIpv4 = this._pseudoIpv4;
    }
    if (this._responseBuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBuffering = this._responseBuffering;
    }
    if (this._rocketLoader !== undefined) {
      hasAnyValues = true;
      internalValueResult.rocketLoader = this._rocketLoader;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._serverSideExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideExclude = this._serverSideExclude;
    }
    if (this._sortQueryStringForCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQueryStringForCache = this._sortQueryStringForCache;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._tls12Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Only = this._tls12Only;
    }
    if (this._tls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13 = this._tls13;
    }
    if (this._tlsClientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientAuth = this._tlsClientAuth;
    }
    if (this._trueClientIpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.trueClientIpHeader = this._trueClientIpHeader;
    }
    if (this._universalSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.universalSsl = this._universalSsl;
    }
    if (this._visitorIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.visitorIp = this._visitorIp;
    }
    if (this._waf !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf;
    }
    if (this._webp !== undefined) {
      hasAnyValues = true;
      internalValueResult.webp = this._webp;
    }
    if (this._websockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.websockets = this._websockets;
    }
    if (this._zeroRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroRtt = this._zeroRtt;
    }
    if (this._minify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minify = this._minify?.internalValue;
    }
    if (this._mobileRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileRedirect = this._mobileRedirect?.internalValue;
    }
    if (this._securityHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityHeader = this._securityHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSettingsOverrideSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysOnline = undefined;
      this._alwaysUseHttps = undefined;
      this._automaticHttpsRewrites = undefined;
      this._binaryAst = undefined;
      this._brotli = undefined;
      this._browserCacheTtl = undefined;
      this._browserCheck = undefined;
      this._cacheLevel = undefined;
      this._challengeTtl = undefined;
      this._ciphers = undefined;
      this._cnameFlattening = undefined;
      this._developmentMode = undefined;
      this._earlyHints = undefined;
      this._emailObfuscation = undefined;
      this._filterLogsToCloudflare = undefined;
      this._h2Prioritization = undefined;
      this._hotlinkProtection = undefined;
      this._http2 = undefined;
      this._http3 = undefined;
      this._imageResizing = undefined;
      this._ipGeolocation = undefined;
      this._ipv6 = undefined;
      this._logToCloudflare = undefined;
      this._maxUpload = undefined;
      this._minTlsVersion = undefined;
      this._mirage = undefined;
      this._opportunisticEncryption = undefined;
      this._opportunisticOnion = undefined;
      this._orangeToOrange = undefined;
      this._originErrorPagePassThru = undefined;
      this._originMaxHttpVersion = undefined;
      this._polish = undefined;
      this._prefetchPreload = undefined;
      this._privacyPass = undefined;
      this._proxyReadTimeout = undefined;
      this._pseudoIpv4 = undefined;
      this._responseBuffering = undefined;
      this._rocketLoader = undefined;
      this._securityLevel = undefined;
      this._serverSideExclude = undefined;
      this._sortQueryStringForCache = undefined;
      this._ssl = undefined;
      this._tls12Only = undefined;
      this._tls13 = undefined;
      this._tlsClientAuth = undefined;
      this._trueClientIpHeader = undefined;
      this._universalSsl = undefined;
      this._visitorIp = undefined;
      this._waf = undefined;
      this._webp = undefined;
      this._websockets = undefined;
      this._zeroRtt = undefined;
      this._minify.internalValue = undefined;
      this._mobileRedirect.internalValue = undefined;
      this._securityHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysOnline = value.alwaysOnline;
      this._alwaysUseHttps = value.alwaysUseHttps;
      this._automaticHttpsRewrites = value.automaticHttpsRewrites;
      this._binaryAst = value.binaryAst;
      this._brotli = value.brotli;
      this._browserCacheTtl = value.browserCacheTtl;
      this._browserCheck = value.browserCheck;
      this._cacheLevel = value.cacheLevel;
      this._challengeTtl = value.challengeTtl;
      this._ciphers = value.ciphers;
      this._cnameFlattening = value.cnameFlattening;
      this._developmentMode = value.developmentMode;
      this._earlyHints = value.earlyHints;
      this._emailObfuscation = value.emailObfuscation;
      this._filterLogsToCloudflare = value.filterLogsToCloudflare;
      this._h2Prioritization = value.h2Prioritization;
      this._hotlinkProtection = value.hotlinkProtection;
      this._http2 = value.http2;
      this._http3 = value.http3;
      this._imageResizing = value.imageResizing;
      this._ipGeolocation = value.ipGeolocation;
      this._ipv6 = value.ipv6;
      this._logToCloudflare = value.logToCloudflare;
      this._maxUpload = value.maxUpload;
      this._minTlsVersion = value.minTlsVersion;
      this._mirage = value.mirage;
      this._opportunisticEncryption = value.opportunisticEncryption;
      this._opportunisticOnion = value.opportunisticOnion;
      this._orangeToOrange = value.orangeToOrange;
      this._originErrorPagePassThru = value.originErrorPagePassThru;
      this._originMaxHttpVersion = value.originMaxHttpVersion;
      this._polish = value.polish;
      this._prefetchPreload = value.prefetchPreload;
      this._privacyPass = value.privacyPass;
      this._proxyReadTimeout = value.proxyReadTimeout;
      this._pseudoIpv4 = value.pseudoIpv4;
      this._responseBuffering = value.responseBuffering;
      this._rocketLoader = value.rocketLoader;
      this._securityLevel = value.securityLevel;
      this._serverSideExclude = value.serverSideExclude;
      this._sortQueryStringForCache = value.sortQueryStringForCache;
      this._ssl = value.ssl;
      this._tls12Only = value.tls12Only;
      this._tls13 = value.tls13;
      this._tlsClientAuth = value.tlsClientAuth;
      this._trueClientIpHeader = value.trueClientIpHeader;
      this._universalSsl = value.universalSsl;
      this._visitorIp = value.visitorIp;
      this._waf = value.waf;
      this._webp = value.webp;
      this._websockets = value.websockets;
      this._zeroRtt = value.zeroRtt;
      this._minify.internalValue = value.minify;
      this._mobileRedirect.internalValue = value.mobileRedirect;
      this._securityHeader.internalValue = value.securityHeader;
    }
  }

  // always_online - computed: true, optional: true, required: false
  private _alwaysOnline?: string; 
  public get alwaysOnline() {
    return this.getStringAttribute('always_online');
  }
  public set alwaysOnline(value: string) {
    this._alwaysOnline = value;
  }
  public resetAlwaysOnline() {
    this._alwaysOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysOnlineInput() {
    return this._alwaysOnline;
  }

  // always_use_https - computed: true, optional: true, required: false
  private _alwaysUseHttps?: string; 
  public get alwaysUseHttps() {
    return this.getStringAttribute('always_use_https');
  }
  public set alwaysUseHttps(value: string) {
    this._alwaysUseHttps = value;
  }
  public resetAlwaysUseHttps() {
    this._alwaysUseHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUseHttpsInput() {
    return this._alwaysUseHttps;
  }

  // automatic_https_rewrites - computed: true, optional: true, required: false
  private _automaticHttpsRewrites?: string; 
  public get automaticHttpsRewrites() {
    return this.getStringAttribute('automatic_https_rewrites');
  }
  public set automaticHttpsRewrites(value: string) {
    this._automaticHttpsRewrites = value;
  }
  public resetAutomaticHttpsRewrites() {
    this._automaticHttpsRewrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticHttpsRewritesInput() {
    return this._automaticHttpsRewrites;
  }

  // binary_ast - computed: true, optional: true, required: false
  private _binaryAst?: string; 
  public get binaryAst() {
    return this.getStringAttribute('binary_ast');
  }
  public set binaryAst(value: string) {
    this._binaryAst = value;
  }
  public resetBinaryAst() {
    this._binaryAst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAstInput() {
    return this._binaryAst;
  }

  // brotli - computed: true, optional: true, required: false
  private _brotli?: string; 
  public get brotli() {
    return this.getStringAttribute('brotli');
  }
  public set brotli(value: string) {
    this._brotli = value;
  }
  public resetBrotli() {
    this._brotli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brotliInput() {
    return this._brotli;
  }

  // browser_cache_ttl - computed: true, optional: true, required: false
  private _browserCacheTtl?: number; 
  public get browserCacheTtl() {
    return this.getNumberAttribute('browser_cache_ttl');
  }
  public set browserCacheTtl(value: number) {
    this._browserCacheTtl = value;
  }
  public resetBrowserCacheTtl() {
    this._browserCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCacheTtlInput() {
    return this._browserCacheTtl;
  }

  // browser_check - computed: true, optional: true, required: false
  private _browserCheck?: string; 
  public get browserCheck() {
    return this.getStringAttribute('browser_check');
  }
  public set browserCheck(value: string) {
    this._browserCheck = value;
  }
  public resetBrowserCheck() {
    this._browserCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCheckInput() {
    return this._browserCheck;
  }

  // cache_level - computed: true, optional: true, required: false
  private _cacheLevel?: string; 
  public get cacheLevel() {
    return this.getStringAttribute('cache_level');
  }
  public set cacheLevel(value: string) {
    this._cacheLevel = value;
  }
  public resetCacheLevel() {
    this._cacheLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLevelInput() {
    return this._cacheLevel;
  }

  // challenge_ttl - computed: true, optional: true, required: false
  private _challengeTtl?: number; 
  public get challengeTtl() {
    return this.getNumberAttribute('challenge_ttl');
  }
  public set challengeTtl(value: number) {
    this._challengeTtl = value;
  }
  public resetChallengeTtl() {
    this._challengeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeTtlInput() {
    return this._challengeTtl;
  }

  // ciphers - computed: true, optional: true, required: false
  private _ciphers?: string[]; 
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // cname_flattening - computed: true, optional: true, required: false
  private _cnameFlattening?: string; 
  public get cnameFlattening() {
    return this.getStringAttribute('cname_flattening');
  }
  public set cnameFlattening(value: string) {
    this._cnameFlattening = value;
  }
  public resetCnameFlattening() {
    this._cnameFlattening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameFlatteningInput() {
    return this._cnameFlattening;
  }

  // development_mode - computed: true, optional: true, required: false
  private _developmentMode?: string; 
  public get developmentMode() {
    return this.getStringAttribute('development_mode');
  }
  public set developmentMode(value: string) {
    this._developmentMode = value;
  }
  public resetDevelopmentMode() {
    this._developmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentModeInput() {
    return this._developmentMode;
  }

  // early_hints - computed: true, optional: true, required: false
  private _earlyHints?: string; 
  public get earlyHints() {
    return this.getStringAttribute('early_hints');
  }
  public set earlyHints(value: string) {
    this._earlyHints = value;
  }
  public resetEarlyHints() {
    this._earlyHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyHintsInput() {
    return this._earlyHints;
  }

  // email_obfuscation - computed: true, optional: true, required: false
  private _emailObfuscation?: string; 
  public get emailObfuscation() {
    return this.getStringAttribute('email_obfuscation');
  }
  public set emailObfuscation(value: string) {
    this._emailObfuscation = value;
  }
  public resetEmailObfuscation() {
    this._emailObfuscation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailObfuscationInput() {
    return this._emailObfuscation;
  }

  // filter_logs_to_cloudflare - computed: true, optional: true, required: false
  private _filterLogsToCloudflare?: string; 
  public get filterLogsToCloudflare() {
    return this.getStringAttribute('filter_logs_to_cloudflare');
  }
  public set filterLogsToCloudflare(value: string) {
    this._filterLogsToCloudflare = value;
  }
  public resetFilterLogsToCloudflare() {
    this._filterLogsToCloudflare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLogsToCloudflareInput() {
    return this._filterLogsToCloudflare;
  }

  // h2_prioritization - computed: true, optional: true, required: false
  private _h2Prioritization?: string; 
  public get h2Prioritization() {
    return this.getStringAttribute('h2_prioritization');
  }
  public set h2Prioritization(value: string) {
    this._h2Prioritization = value;
  }
  public resetH2Prioritization() {
    this._h2Prioritization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2PrioritizationInput() {
    return this._h2Prioritization;
  }

  // hotlink_protection - computed: true, optional: true, required: false
  private _hotlinkProtection?: string; 
  public get hotlinkProtection() {
    return this.getStringAttribute('hotlink_protection');
  }
  public set hotlinkProtection(value: string) {
    this._hotlinkProtection = value;
  }
  public resetHotlinkProtection() {
    this._hotlinkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotlinkProtectionInput() {
    return this._hotlinkProtection;
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: string; 
  public get http2() {
    return this.getStringAttribute('http2');
  }
  public set http2(value: string) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // http3 - computed: true, optional: true, required: false
  private _http3?: string; 
  public get http3() {
    return this.getStringAttribute('http3');
  }
  public set http3(value: string) {
    this._http3 = value;
  }
  public resetHttp3() {
    this._http3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3Input() {
    return this._http3;
  }

  // image_resizing - computed: true, optional: true, required: false
  private _imageResizing?: string; 
  public get imageResizing() {
    return this.getStringAttribute('image_resizing');
  }
  public set imageResizing(value: string) {
    this._imageResizing = value;
  }
  public resetImageResizing() {
    this._imageResizing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResizingInput() {
    return this._imageResizing;
  }

  // ip_geolocation - computed: true, optional: true, required: false
  private _ipGeolocation?: string; 
  public get ipGeolocation() {
    return this.getStringAttribute('ip_geolocation');
  }
  public set ipGeolocation(value: string) {
    this._ipGeolocation = value;
  }
  public resetIpGeolocation() {
    this._ipGeolocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGeolocationInput() {
    return this._ipGeolocation;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // log_to_cloudflare - computed: true, optional: true, required: false
  private _logToCloudflare?: string; 
  public get logToCloudflare() {
    return this.getStringAttribute('log_to_cloudflare');
  }
  public set logToCloudflare(value: string) {
    this._logToCloudflare = value;
  }
  public resetLogToCloudflare() {
    this._logToCloudflare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logToCloudflareInput() {
    return this._logToCloudflare;
  }

  // max_upload - computed: true, optional: true, required: false
  private _maxUpload?: number; 
  public get maxUpload() {
    return this.getNumberAttribute('max_upload');
  }
  public set maxUpload(value: number) {
    this._maxUpload = value;
  }
  public resetMaxUpload() {
    this._maxUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadInput() {
    return this._maxUpload;
  }

  // min_tls_version - computed: true, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // mirage - computed: true, optional: true, required: false
  private _mirage?: string; 
  public get mirage() {
    return this.getStringAttribute('mirage');
  }
  public set mirage(value: string) {
    this._mirage = value;
  }
  public resetMirage() {
    this._mirage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirageInput() {
    return this._mirage;
  }

  // opportunistic_encryption - computed: true, optional: true, required: false
  private _opportunisticEncryption?: string; 
  public get opportunisticEncryption() {
    return this.getStringAttribute('opportunistic_encryption');
  }
  public set opportunisticEncryption(value: string) {
    this._opportunisticEncryption = value;
  }
  public resetOpportunisticEncryption() {
    this._opportunisticEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opportunisticEncryptionInput() {
    return this._opportunisticEncryption;
  }

  // opportunistic_onion - computed: true, optional: true, required: false
  private _opportunisticOnion?: string; 
  public get opportunisticOnion() {
    return this.getStringAttribute('opportunistic_onion');
  }
  public set opportunisticOnion(value: string) {
    this._opportunisticOnion = value;
  }
  public resetOpportunisticOnion() {
    this._opportunisticOnion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opportunisticOnionInput() {
    return this._opportunisticOnion;
  }

  // orange_to_orange - computed: true, optional: true, required: false
  private _orangeToOrange?: string; 
  public get orangeToOrange() {
    return this.getStringAttribute('orange_to_orange');
  }
  public set orangeToOrange(value: string) {
    this._orangeToOrange = value;
  }
  public resetOrangeToOrange() {
    this._orangeToOrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orangeToOrangeInput() {
    return this._orangeToOrange;
  }

  // origin_error_page_pass_thru - computed: true, optional: true, required: false
  private _originErrorPagePassThru?: string; 
  public get originErrorPagePassThru() {
    return this.getStringAttribute('origin_error_page_pass_thru');
  }
  public set originErrorPagePassThru(value: string) {
    this._originErrorPagePassThru = value;
  }
  public resetOriginErrorPagePassThru() {
    this._originErrorPagePassThru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originErrorPagePassThruInput() {
    return this._originErrorPagePassThru;
  }

  // origin_max_http_version - computed: true, optional: true, required: false
  private _originMaxHttpVersion?: string; 
  public get originMaxHttpVersion() {
    return this.getStringAttribute('origin_max_http_version');
  }
  public set originMaxHttpVersion(value: string) {
    this._originMaxHttpVersion = value;
  }
  public resetOriginMaxHttpVersion() {
    this._originMaxHttpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originMaxHttpVersionInput() {
    return this._originMaxHttpVersion;
  }

  // polish - computed: true, optional: true, required: false
  private _polish?: string; 
  public get polish() {
    return this.getStringAttribute('polish');
  }
  public set polish(value: string) {
    this._polish = value;
  }
  public resetPolish() {
    this._polish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polishInput() {
    return this._polish;
  }

  // prefetch_preload - computed: true, optional: true, required: false
  private _prefetchPreload?: string; 
  public get prefetchPreload() {
    return this.getStringAttribute('prefetch_preload');
  }
  public set prefetchPreload(value: string) {
    this._prefetchPreload = value;
  }
  public resetPrefetchPreload() {
    this._prefetchPreload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchPreloadInput() {
    return this._prefetchPreload;
  }

  // privacy_pass - computed: true, optional: true, required: false
  private _privacyPass?: string; 
  public get privacyPass() {
    return this.getStringAttribute('privacy_pass');
  }
  public set privacyPass(value: string) {
    this._privacyPass = value;
  }
  public resetPrivacyPass() {
    this._privacyPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPassInput() {
    return this._privacyPass;
  }

  // proxy_read_timeout - computed: true, optional: true, required: false
  private _proxyReadTimeout?: string; 
  public get proxyReadTimeout() {
    return this.getStringAttribute('proxy_read_timeout');
  }
  public set proxyReadTimeout(value: string) {
    this._proxyReadTimeout = value;
  }
  public resetProxyReadTimeout() {
    this._proxyReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyReadTimeoutInput() {
    return this._proxyReadTimeout;
  }

  // pseudo_ipv4 - computed: true, optional: true, required: false
  private _pseudoIpv4?: string; 
  public get pseudoIpv4() {
    return this.getStringAttribute('pseudo_ipv4');
  }
  public set pseudoIpv4(value: string) {
    this._pseudoIpv4 = value;
  }
  public resetPseudoIpv4() {
    this._pseudoIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudoIpv4Input() {
    return this._pseudoIpv4;
  }

  // response_buffering - computed: true, optional: true, required: false
  private _responseBuffering?: string; 
  public get responseBuffering() {
    return this.getStringAttribute('response_buffering');
  }
  public set responseBuffering(value: string) {
    this._responseBuffering = value;
  }
  public resetResponseBuffering() {
    this._responseBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBufferingInput() {
    return this._responseBuffering;
  }

  // rocket_loader - computed: true, optional: true, required: false
  private _rocketLoader?: string; 
  public get rocketLoader() {
    return this.getStringAttribute('rocket_loader');
  }
  public set rocketLoader(value: string) {
    this._rocketLoader = value;
  }
  public resetRocketLoader() {
    this._rocketLoader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rocketLoaderInput() {
    return this._rocketLoader;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // server_side_exclude - computed: true, optional: true, required: false
  private _serverSideExclude?: string; 
  public get serverSideExclude() {
    return this.getStringAttribute('server_side_exclude');
  }
  public set serverSideExclude(value: string) {
    this._serverSideExclude = value;
  }
  public resetServerSideExclude() {
    this._serverSideExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideExcludeInput() {
    return this._serverSideExclude;
  }

  // sort_query_string_for_cache - computed: true, optional: true, required: false
  private _sortQueryStringForCache?: string; 
  public get sortQueryStringForCache() {
    return this.getStringAttribute('sort_query_string_for_cache');
  }
  public set sortQueryStringForCache(value: string) {
    this._sortQueryStringForCache = value;
  }
  public resetSortQueryStringForCache() {
    this._sortQueryStringForCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryStringForCacheInput() {
    return this._sortQueryStringForCache;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // tls_1_2_only - computed: true, optional: true, required: false
  private _tls12Only?: string; 
  public get tls12Only() {
    return this.getStringAttribute('tls_1_2_only');
  }
  public set tls12Only(value: string) {
    this._tls12Only = value;
  }
  public resetTls12Only() {
    this._tls12Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12OnlyInput() {
    return this._tls12Only;
  }

  // tls_1_3 - computed: true, optional: true, required: false
  private _tls13?: string; 
  public get tls13() {
    return this.getStringAttribute('tls_1_3');
  }
  public set tls13(value: string) {
    this._tls13 = value;
  }
  public resetTls13() {
    this._tls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Input() {
    return this._tls13;
  }

  // tls_client_auth - computed: true, optional: true, required: false
  private _tlsClientAuth?: string; 
  public get tlsClientAuth() {
    return this.getStringAttribute('tls_client_auth');
  }
  public set tlsClientAuth(value: string) {
    this._tlsClientAuth = value;
  }
  public resetTlsClientAuth() {
    this._tlsClientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientAuthInput() {
    return this._tlsClientAuth;
  }

  // true_client_ip_header - computed: true, optional: true, required: false
  private _trueClientIpHeader?: string; 
  public get trueClientIpHeader() {
    return this.getStringAttribute('true_client_ip_header');
  }
  public set trueClientIpHeader(value: string) {
    this._trueClientIpHeader = value;
  }
  public resetTrueClientIpHeader() {
    this._trueClientIpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueClientIpHeaderInput() {
    return this._trueClientIpHeader;
  }

  // universal_ssl - computed: true, optional: true, required: false
  private _universalSsl?: string; 
  public get universalSsl() {
    return this.getStringAttribute('universal_ssl');
  }
  public set universalSsl(value: string) {
    this._universalSsl = value;
  }
  public resetUniversalSsl() {
    this._universalSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalSslInput() {
    return this._universalSsl;
  }

  // visitor_ip - computed: true, optional: true, required: false
  private _visitorIp?: string; 
  public get visitorIp() {
    return this.getStringAttribute('visitor_ip');
  }
  public set visitorIp(value: string) {
    this._visitorIp = value;
  }
  public resetVisitorIp() {
    this._visitorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visitorIpInput() {
    return this._visitorIp;
  }

  // waf - computed: true, optional: true, required: false
  private _waf?: string; 
  public get waf() {
    return this.getStringAttribute('waf');
  }
  public set waf(value: string) {
    this._waf = value;
  }
  public resetWaf() {
    this._waf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf;
  }

  // webp - computed: true, optional: true, required: false
  private _webp?: string; 
  public get webp() {
    return this.getStringAttribute('webp');
  }
  public set webp(value: string) {
    this._webp = value;
  }
  public resetWebp() {
    this._webp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webpInput() {
    return this._webp;
  }

  // websockets - computed: true, optional: true, required: false
  private _websockets?: string; 
  public get websockets() {
    return this.getStringAttribute('websockets');
  }
  public set websockets(value: string) {
    this._websockets = value;
  }
  public resetWebsockets() {
    this._websockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsInput() {
    return this._websockets;
  }

  // zero_rtt - computed: true, optional: true, required: false
  private _zeroRtt?: string; 
  public get zeroRtt() {
    return this.getStringAttribute('zero_rtt');
  }
  public set zeroRtt(value: string) {
    this._zeroRtt = value;
  }
  public resetZeroRtt() {
    this._zeroRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroRttInput() {
    return this._zeroRtt;
  }

  // minify - computed: false, optional: true, required: false
  private _minify = new ZoneSettingsOverrideSettingsMinifyOutputReference(this, "minify");
  public get minify() {
    return this._minify;
  }
  public putMinify(value: ZoneSettingsOverrideSettingsMinify) {
    this._minify.internalValue = value;
  }
  public resetMinify() {
    this._minify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minifyInput() {
    return this._minify.internalValue;
  }

  // mobile_redirect - computed: false, optional: true, required: false
  private _mobileRedirect = new ZoneSettingsOverrideSettingsMobileRedirectOutputReference(this, "mobile_redirect");
  public get mobileRedirect() {
    return this._mobileRedirect;
  }
  public putMobileRedirect(value: ZoneSettingsOverrideSettingsMobileRedirect) {
    this._mobileRedirect.internalValue = value;
  }
  public resetMobileRedirect() {
    this._mobileRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileRedirectInput() {
    return this._mobileRedirect.internalValue;
  }

  // security_header - computed: false, optional: true, required: false
  private _securityHeader = new ZoneSettingsOverrideSettingsSecurityHeaderOutputReference(this, "security_header");
  public get securityHeader() {
    return this._securityHeader;
  }
  public putSecurityHeader(value: ZoneSettingsOverrideSettingsSecurityHeader) {
    this._securityHeader.internalValue = value;
  }
  public resetSecurityHeader() {
    this._securityHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeaderInput() {
    return this._securityHeader.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override cloudflare_zone_settings_override}
*/
export class ZoneSettingsOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zone_settings_override";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/zone_settings_override cloudflare_zone_settings_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneSettingsOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneSettingsOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_settings_override',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.13.0',
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
    this._id = config.id;
    this._zoneId = config.zoneId;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // initial_settings - computed: true, optional: false, required: false
  private _initialSettings = new ZoneSettingsOverrideInitialSettingsList(this, "initial_settings", false);
  public get initialSettings() {
    return this._initialSettings;
  }

  // initial_settings_read_at - computed: true, optional: false, required: false
  public get initialSettingsReadAt() {
    return this.getStringAttribute('initial_settings_read_at');
  }

  // readonly_settings - computed: true, optional: false, required: false
  public get readonlySettings() {
    return this.getListAttribute('readonly_settings');
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

  // zone_status - computed: true, optional: false, required: false
  public get zoneStatus() {
    return this.getStringAttribute('zone_status');
  }

  // zone_type - computed: true, optional: false, required: false
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new ZoneSettingsOverrideSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: ZoneSettingsOverrideSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      settings: zoneSettingsOverrideSettingsToTerraform(this._settings.internalValue),
    };
  }
}
