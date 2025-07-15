/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique key/value metadata for this hostname. These are per-hostname (customer) settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}
  */
  readonly customOriginServer?: string;
  /**
  * A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}
  */
  readonly customOriginSni?: string;
  /**
  * The custom hostname that will point to your hostname via CNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}
  */
  readonly hostname: string;
  /**
  * SSL properties used when creating the custom hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}
  */
  readonly ssl: CustomHostnameSsl;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}
  */
  readonly zoneId: string;
}
export interface CustomHostnameOwnershipVerification {
}

export function customHostnameOwnershipVerificationToTerraform(struct?: CustomHostnameOwnershipVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function customHostnameOwnershipVerificationToHclTerraform(struct?: CustomHostnameOwnershipVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomHostnameOwnershipVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomHostnameOwnershipVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameOwnershipVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface CustomHostnameOwnershipVerificationHttp {
}

export function customHostnameOwnershipVerificationHttpToTerraform(struct?: CustomHostnameOwnershipVerificationHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function customHostnameOwnershipVerificationHttpToHclTerraform(struct?: CustomHostnameOwnershipVerificationHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CustomHostnameOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomHostnameOwnershipVerificationHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameOwnershipVerificationHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }
}
export interface CustomHostnameSslCustomCertBundle {
  /**
  * If a custom uploaded certificate is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}
  */
  readonly customCertificate: string;
  /**
  * The key for a custom uploaded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}
  */
  readonly customKey: string;
}

export function customHostnameSslCustomCertBundleToTerraform(struct?: CustomHostnameSslCustomCertBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_certificate: cdktf.stringToTerraform(struct!.customCertificate),
    custom_key: cdktf.stringToTerraform(struct!.customKey),
  }
}


export function customHostnameSslCustomCertBundleToHclTerraform(struct?: CustomHostnameSslCustomCertBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_certificate: {
      value: cdktf.stringToHclTerraform(struct!.customCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_key: {
      value: cdktf.stringToHclTerraform(struct!.customKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomHostnameSslCustomCertBundleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomHostnameSslCustomCertBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate;
    }
    if (this._customKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKey = this._customKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSslCustomCertBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customCertificate = undefined;
      this._customKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customCertificate = value.customCertificate;
      this._customKey = value.customKey;
    }
  }

  // custom_certificate - computed: false, optional: false, required: true
  private _customCertificate?: string; 
  public get customCertificate() {
    return this.getStringAttribute('custom_certificate');
  }
  public set customCertificate(value: string) {
    this._customCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate;
  }

  // custom_key - computed: false, optional: false, required: true
  private _customKey?: string; 
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }
  public set customKey(value: string) {
    this._customKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey;
  }
}

export class CustomHostnameSslCustomCertBundleList extends cdktf.ComplexList {
  public internalValue? : CustomHostnameSslCustomCertBundle[] | cdktf.IResolvable

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
  public get(index: number): CustomHostnameSslCustomCertBundleOutputReference {
    return new CustomHostnameSslCustomCertBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomHostnameSslSettings {
  /**
  * An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Whether or not Early Hints is enabled.
  * Available values: "on", "off".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}
  */
  readonly earlyHints?: string;
  /**
  * Whether or not HTTP2 is enabled.
  * Available values: "on", "off".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#http2 CustomHostname#http2}
  */
  readonly http2?: string;
  /**
  * The minimum TLS version supported.
  * Available values: "1.0", "1.1", "1.2", "1.3".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Whether or not TLS 1.3 is enabled.
  * Available values: "on", "off".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}
  */
  readonly tls13?: string;
}

export function customHostnameSslSettingsToTerraform(struct?: CustomHostnameSslSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphers),
    early_hints: cdktf.stringToTerraform(struct!.earlyHints),
    http2: cdktf.stringToTerraform(struct!.http2),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    tls_1_3: cdktf.stringToTerraform(struct!.tls13),
  }
}


export function customHostnameSslSettingsToHclTerraform(struct?: CustomHostnameSslSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ciphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    early_hints: {
      value: cdktf.stringToHclTerraform(struct!.earlyHints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2: {
      value: cdktf.stringToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_1_3: {
      value: cdktf.stringToHclTerraform(struct!.tls13),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomHostnameSslSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._earlyHints !== undefined) {
      hasAnyValues = true;
      internalValueResult.earlyHints = this._earlyHints;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._tls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13 = this._tls13;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSslSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphers = undefined;
      this._earlyHints = undefined;
      this._http2 = undefined;
      this._minTlsVersion = undefined;
      this._tls13 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphers = value.ciphers;
      this._earlyHints = value.earlyHints;
      this._http2 = value.http2;
      this._minTlsVersion = value.minTlsVersion;
      this._tls13 = value.tls13;
    }
  }

  // ciphers - computed: false, optional: true, required: false
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

  // early_hints - computed: false, optional: true, required: false
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

  // http2 - computed: false, optional: true, required: false
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

  // min_tls_version - computed: false, optional: true, required: false
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

  // tls_1_3 - computed: false, optional: true, required: false
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
}
export interface CustomHostnameSsl {
  /**
  * A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
  * Available values: "ubiquitous", "optimal", "force".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}
  */
  readonly bundleMethod?: string;
  /**
  * The Certificate Authority that will issue the certificate
  * Available values: "digicert", "google", "lets_encrypt", "ssl_com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}
  */
  readonly cloudflareBranding?: boolean | cdktf.IResolvable;
  /**
  * Array of custom certificate and key pairs (1 or 2 pairs allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}
  */
  readonly customCertBundle?: CustomHostnameSslCustomCertBundle[] | cdktf.IResolvable;
  /**
  * If a custom uploaded certificate is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}
  */
  readonly customCertificate?: string;
  /**
  * The key for a custom uploaded certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}
  */
  readonly customKey?: string;
  /**
  * Domain control validation (DCV) method used for this hostname.
  * Available values: "http", "txt", "email".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#method CustomHostname#method}
  */
  readonly method?: string;
  /**
  * SSL specific settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#settings CustomHostname#settings}
  */
  readonly settings?: CustomHostnameSslSettings;
  /**
  * Level of validation to be used for this hostname. Domain validation (dv) must be used.
  * Available values: "dv".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#type CustomHostname#type}
  */
  readonly type?: string;
  /**
  * Indicates whether the certificate covers a wildcard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function customHostnameSslToTerraform(struct?: CustomHostnameSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_method: cdktf.stringToTerraform(struct!.bundleMethod),
    certificate_authority: cdktf.stringToTerraform(struct!.certificateAuthority),
    cloudflare_branding: cdktf.booleanToTerraform(struct!.cloudflareBranding),
    custom_cert_bundle: cdktf.listMapper(customHostnameSslCustomCertBundleToTerraform, false)(struct!.customCertBundle),
    custom_certificate: cdktf.stringToTerraform(struct!.customCertificate),
    custom_key: cdktf.stringToTerraform(struct!.customKey),
    method: cdktf.stringToTerraform(struct!.method),
    settings: customHostnameSslSettingsToTerraform(struct!.settings),
    type: cdktf.stringToTerraform(struct!.type),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}


export function customHostnameSslToHclTerraform(struct?: CustomHostnameSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_method: {
      value: cdktf.stringToHclTerraform(struct!.bundleMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_authority: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudflare_branding: {
      value: cdktf.booleanToHclTerraform(struct!.cloudflareBranding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_cert_bundle: {
      value: cdktf.listMapperHcl(customHostnameSslCustomCertBundleToHclTerraform, false)(struct!.customCertBundle),
      isBlock: true,
      type: "list",
      storageClassType: "CustomHostnameSslCustomCertBundleList",
    },
    custom_certificate: {
      value: cdktf.stringToHclTerraform(struct!.customCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_key: {
      value: cdktf.stringToHclTerraform(struct!.customKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: customHostnameSslSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "struct",
      storageClassType: "CustomHostnameSslSettings",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard: {
      value: cdktf.booleanToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomHostnameSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomHostnameSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleMethod = this._bundleMethod;
    }
    if (this._certificateAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority;
    }
    if (this._cloudflareBranding !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudflareBranding = this._cloudflareBranding;
    }
    if (this._customCertBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertBundle = this._customCertBundle?.internalValue;
    }
    if (this._customCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate;
    }
    if (this._customKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKey = this._customKey;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomHostnameSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleMethod = undefined;
      this._certificateAuthority = undefined;
      this._cloudflareBranding = undefined;
      this._customCertBundle.internalValue = undefined;
      this._customCertificate = undefined;
      this._customKey = undefined;
      this._method = undefined;
      this._settings.internalValue = undefined;
      this._type = undefined;
      this._wildcard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleMethod = value.bundleMethod;
      this._certificateAuthority = value.certificateAuthority;
      this._cloudflareBranding = value.cloudflareBranding;
      this._customCertBundle.internalValue = value.customCertBundle;
      this._customCertificate = value.customCertificate;
      this._customKey = value.customKey;
      this._method = value.method;
      this._settings.internalValue = value.settings;
      this._type = value.type;
      this._wildcard = value.wildcard;
    }
  }

  // bundle_method - computed: true, optional: true, required: false
  private _bundleMethod?: string; 
  public get bundleMethod() {
    return this.getStringAttribute('bundle_method');
  }
  public set bundleMethod(value: string) {
    this._bundleMethod = value;
  }
  public resetBundleMethod() {
    this._bundleMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleMethodInput() {
    return this._bundleMethod;
  }

  // certificate_authority - computed: true, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // cloudflare_branding - computed: false, optional: true, required: false
  private _cloudflareBranding?: boolean | cdktf.IResolvable; 
  public get cloudflareBranding() {
    return this.getBooleanAttribute('cloudflare_branding');
  }
  public set cloudflareBranding(value: boolean | cdktf.IResolvable) {
    this._cloudflareBranding = value;
  }
  public resetCloudflareBranding() {
    this._cloudflareBranding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareBrandingInput() {
    return this._cloudflareBranding;
  }

  // custom_cert_bundle - computed: false, optional: true, required: false
  private _customCertBundle = new CustomHostnameSslCustomCertBundleList(this, "custom_cert_bundle", false);
  public get customCertBundle() {
    return this._customCertBundle;
  }
  public putCustomCertBundle(value: CustomHostnameSslCustomCertBundle[] | cdktf.IResolvable) {
    this._customCertBundle.internalValue = value;
  }
  public resetCustomCertBundle() {
    this._customCertBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertBundleInput() {
    return this._customCertBundle.internalValue;
  }

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate?: string; 
  public get customCertificate() {
    return this.getStringAttribute('custom_certificate');
  }
  public set customCertificate(value: string) {
    this._customCertificate = value;
  }
  public resetCustomCertificate() {
    this._customCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate;
  }

  // custom_key - computed: false, optional: true, required: false
  private _customKey?: string; 
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }
  public set customKey(value: string) {
    this._customKey = value;
  }
  public resetCustomKey() {
    this._customKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new CustomHostnameSslSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: CustomHostnameSslSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
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

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
  public set wildcard(value: boolean | cdktf.IResolvable) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname cloudflare_custom_hostname}
*/
export class CustomHostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_custom_hostname";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomHostname to import
  * @param importFromId The id of the existing CustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomHostname to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_custom_hostname", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/custom_hostname cloudflare_custom_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomHostnameConfig
  */
  public constructor(scope: Construct, id: string, config: CustomHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_hostname',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.0',
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
    this._customMetadata = config.customMetadata;
    this._customOriginServer = config.customOriginServer;
    this._customOriginSni = config.customOriginSni;
    this._hostname = config.hostname;
    this._ssl.internalValue = config.ssl;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // custom_origin_server - computed: false, optional: true, required: false
  private _customOriginServer?: string; 
  public get customOriginServer() {
    return this.getStringAttribute('custom_origin_server');
  }
  public set customOriginServer(value: string) {
    this._customOriginServer = value;
  }
  public resetCustomOriginServer() {
    this._customOriginServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginServerInput() {
    return this._customOriginServer;
  }

  // custom_origin_sni - computed: false, optional: true, required: false
  private _customOriginSni?: string; 
  public get customOriginSni() {
    return this.getStringAttribute('custom_origin_sni');
  }
  public set customOriginSni(value: string) {
    this._customOriginSni = value;
  }
  public resetCustomOriginSni() {
    this._customOriginSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginSniInput() {
    return this._customOriginSni;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ownership_verification - computed: true, optional: false, required: false
  private _ownershipVerification = new CustomHostnameOwnershipVerificationOutputReference(this, "ownership_verification");
  public get ownershipVerification() {
    return this._ownershipVerification;
  }

  // ownership_verification_http - computed: true, optional: false, required: false
  private _ownershipVerificationHttp = new CustomHostnameOwnershipVerificationHttpOutputReference(this, "ownership_verification_http");
  public get ownershipVerificationHttp() {
    return this._ownershipVerificationHttp;
  }

  // ssl - computed: false, optional: false, required: true
  private _ssl = new CustomHostnameSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: CustomHostnameSsl) {
    this._ssl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // verification_errors - computed: true, optional: false, required: false
  public get verificationErrors() {
    return this.getListAttribute('verification_errors');
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
      custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._customMetadata),
      custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
      custom_origin_sni: cdktf.stringToTerraform(this._customOriginSni),
      hostname: cdktf.stringToTerraform(this._hostname),
      ssl: customHostnameSslToTerraform(this._ssl.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      custom_origin_server: {
        value: cdktf.stringToHclTerraform(this._customOriginServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_origin_sni: {
        value: cdktf.stringToHclTerraform(this._customOriginSni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: customHostnameSslToHclTerraform(this._ssl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomHostnameSsl",
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
