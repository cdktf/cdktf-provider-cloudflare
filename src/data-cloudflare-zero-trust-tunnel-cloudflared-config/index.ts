// https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_tunnel_cloudflared_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aud_tag - computed: true, optional: false, required: false
  public get audTag() {
    return this.getListAttribute('aud_tag');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  private _access = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }

  // ca_pool - computed: true, optional: false, required: false
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // disable_chunked_encoding - computed: true, optional: false, required: false
  public get disableChunkedEncoding() {
    return this.getBooleanAttribute('disable_chunked_encoding');
  }

  // http2_origin - computed: true, optional: false, required: false
  public get http2Origin() {
    return this.getBooleanAttribute('http2_origin');
  }

  // http_host_header - computed: true, optional: false, required: false
  public get httpHostHeader() {
    return this.getStringAttribute('http_host_header');
  }

  // keep_alive_connections - computed: true, optional: false, required: false
  public get keepAliveConnections() {
    return this.getNumberAttribute('keep_alive_connections');
  }

  // keep_alive_timeout - computed: true, optional: false, required: false
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }

  // no_happy_eyeballs - computed: true, optional: false, required: false
  public get noHappyEyeballs() {
    return this.getBooleanAttribute('no_happy_eyeballs');
  }

  // no_tls_verify - computed: true, optional: false, required: false
  public get noTlsVerify() {
    return this.getBooleanAttribute('no_tls_verify');
  }

  // origin_server_name - computed: true, optional: false, required: false
  public get originServerName() {
    return this.getStringAttribute('origin_server_name');
  }

  // proxy_type - computed: true, optional: false, required: false
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }

  // tcp_keep_alive - computed: true, optional: false, required: false
  public get tcpKeepAlive() {
    return this.getNumberAttribute('tcp_keep_alive');
  }

  // tls_timeout - computed: true, optional: false, required: false
  public get tlsTimeout() {
    return this.getNumberAttribute('tls_timeout');
  }
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // origin_request - computed: true, optional: false, required: false
  private _originRequest = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(this, "origin_request");
  public get originRequest() {
    return this._originRequest;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference {
    return new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aud_tag - computed: true, optional: false, required: false
  public get audTag() {
    return this.getListAttribute('aud_tag');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  private _access = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }

  // ca_pool - computed: true, optional: false, required: false
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // disable_chunked_encoding - computed: true, optional: false, required: false
  public get disableChunkedEncoding() {
    return this.getBooleanAttribute('disable_chunked_encoding');
  }

  // http2_origin - computed: true, optional: false, required: false
  public get http2Origin() {
    return this.getBooleanAttribute('http2_origin');
  }

  // http_host_header - computed: true, optional: false, required: false
  public get httpHostHeader() {
    return this.getStringAttribute('http_host_header');
  }

  // keep_alive_connections - computed: true, optional: false, required: false
  public get keepAliveConnections() {
    return this.getNumberAttribute('keep_alive_connections');
  }

  // keep_alive_timeout - computed: true, optional: false, required: false
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }

  // no_happy_eyeballs - computed: true, optional: false, required: false
  public get noHappyEyeballs() {
    return this.getBooleanAttribute('no_happy_eyeballs');
  }

  // no_tls_verify - computed: true, optional: false, required: false
  public get noTlsVerify() {
    return this.getBooleanAttribute('no_tls_verify');
  }

  // origin_server_name - computed: true, optional: false, required: false
  public get originServerName() {
    return this.getStringAttribute('origin_server_name');
  }

  // proxy_type - computed: true, optional: false, required: false
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }

  // tcp_keep_alive - computed: true, optional: false, required: false
  public get tcpKeepAlive() {
    return this.getNumberAttribute('tcp_keep_alive');
  }

  // tls_timeout - computed: true, optional: false, required: false
  public get tlsTimeout() {
    return this.getNumberAttribute('tls_timeout');
  }
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRouting {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRoutingToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRoutingToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRouting | undefined) {
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
}
export interface DataCloudflareZeroTrustTunnelCloudflaredConfigConfig {
}

export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct?: DataCloudflareZeroTrustTunnelCloudflaredConfigConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustTunnelCloudflaredConfigConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustTunnelCloudflaredConfigConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }

  // origin_request - computed: true, optional: false, required: false
  private _originRequest = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(this, "origin_request");
  public get originRequest() {
    return this._originRequest;
  }

  // warp_routing - computed: true, optional: false, required: false
  private _warpRouting = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigWarpRoutingOutputReference(this, "warp_routing");
  public get warpRouting() {
    return this._warpRouting;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
export class DataCloudflareZeroTrustTunnelCloudflaredConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustTunnelCloudflaredConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.0.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCloudflareZeroTrustTunnelCloudflaredConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
