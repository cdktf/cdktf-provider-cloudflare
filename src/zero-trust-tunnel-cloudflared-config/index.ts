/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZeroTrustTunnelCloudflaredConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#account_id ZeroTrustTunnelCloudflaredConfigA#account_id}
  */
  readonly accountId: string;
  /**
  * The tunnel configuration and ingress rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#config ZeroTrustTunnelCloudflaredConfigA#config}
  */
  readonly config?: ZeroTrustTunnelCloudflaredConfigConfig;
  /**
  * Indicates if this is a locally or remotely configured tunnel. If `local`, manage the tunnel using a YAML file on the origin machine. If `cloudflare`, manage the tunnel's configuration on the Zero Trust dashboard.
  * Available values: "local", "cloudflare".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#source ZeroTrustTunnelCloudflaredConfigA#source}
  */
  readonly source?: string;
  /**
  * UUID of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#tunnel_id ZeroTrustTunnelCloudflaredConfigA#tunnel_id}
  */
  readonly tunnelId: string;
}
export interface ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess {
  /**
  * Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#aud_tag ZeroTrustTunnelCloudflaredConfigA#aud_tag}
  */
  readonly audTag: string[];
  /**
  * Deny traffic that has not fulfilled Access authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#required ZeroTrustTunnelCloudflaredConfigA#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#team_name ZeroTrustTunnelCloudflaredConfigA#team_name}
  */
  readonly teamName: string;
}

export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aud_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audTag),
    required: cdktf.booleanToTerraform(struct!.required),
    team_name: cdktf.stringToTerraform(struct!.teamName),
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aud_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audTag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    team_name: {
      value: cdktf.stringToHclTerraform(struct!.teamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.audTag = this._audTag;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._teamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamName = this._teamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audTag = undefined;
      this._required = undefined;
      this._teamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audTag = value.audTag;
      this._required = value.required;
      this._teamName = value.teamName;
    }
  }

  // aud_tag - computed: true, optional: false, required: true
  private _audTag?: string[]; 
  public get audTag() {
    return this.getListAttribute('aud_tag');
  }
  public set audTag(value: string[]) {
    this._audTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audTagInput() {
    return this._audTag;
  }

  // required - computed: true, optional: true, required: false
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

  // team_name - computed: true, optional: false, required: true
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }
}
export interface ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest {
  /**
  * For all L7 requests to this hostname, cloudflared will validate each request's Cf-Access-Jwt-Assertion request header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#access ZeroTrustTunnelCloudflaredConfigA#access}
  */
  readonly access?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess;
  /**
  * Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#ca_pool ZeroTrustTunnelCloudflaredConfigA#ca_pool}
  */
  readonly caPool?: string;
  /**
  * Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#connect_timeout ZeroTrustTunnelCloudflaredConfigA#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Disables chunked transfer encoding. Useful if you are running a WSGI server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#disable_chunked_encoding ZeroTrustTunnelCloudflaredConfigA#disable_chunked_encoding}
  */
  readonly disableChunkedEncoding?: boolean | cdktf.IResolvable;
  /**
  * Attempt to connect to origin using HTTP2. Origin must be configured as https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#http2_origin ZeroTrustTunnelCloudflaredConfigA#http2_origin}
  */
  readonly http2Origin?: boolean | cdktf.IResolvable;
  /**
  * Sets the HTTP Host header on requests sent to the local service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#http_host_header ZeroTrustTunnelCloudflaredConfigA#http_host_header}
  */
  readonly httpHostHeader?: string;
  /**
  * Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_connections ZeroTrustTunnelCloudflaredConfigA#keep_alive_connections}
  */
  readonly keepAliveConnections?: number;
  /**
  * Timeout after which an idle keepalive connection can be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_timeout ZeroTrustTunnelCloudflaredConfigA#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_happy_eyeballs ZeroTrustTunnelCloudflaredConfigA#no_happy_eyeballs}
  */
  readonly noHappyEyeballs?: boolean | cdktf.IResolvable;
  /**
  * Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_tls_verify ZeroTrustTunnelCloudflaredConfigA#no_tls_verify}
  */
  readonly noTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Hostname that cloudflared should expect from your origin server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_server_name ZeroTrustTunnelCloudflaredConfigA#origin_server_name}
  */
  readonly originServerName?: string;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#proxy_type ZeroTrustTunnelCloudflaredConfigA#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#tcp_keep_alive ZeroTrustTunnelCloudflaredConfigA#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: number;
  /**
  * Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#tls_timeout ZeroTrustTunnelCloudflaredConfigA#tls_timeout}
  */
  readonly tlsTimeout?: number;
}

export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToTerraform(struct!.access),
    ca_pool: cdktf.stringToTerraform(struct!.caPool),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    disable_chunked_encoding: cdktf.booleanToTerraform(struct!.disableChunkedEncoding),
    http2_origin: cdktf.booleanToTerraform(struct!.http2Origin),
    http_host_header: cdktf.stringToTerraform(struct!.httpHostHeader),
    keep_alive_connections: cdktf.numberToTerraform(struct!.keepAliveConnections),
    keep_alive_timeout: cdktf.numberToTerraform(struct!.keepAliveTimeout),
    no_happy_eyeballs: cdktf.booleanToTerraform(struct!.noHappyEyeballs),
    no_tls_verify: cdktf.booleanToTerraform(struct!.noTlsVerify),
    origin_server_name: cdktf.stringToTerraform(struct!.originServerName),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    tcp_keep_alive: cdktf.numberToTerraform(struct!.tcpKeepAlive),
    tls_timeout: cdktf.numberToTerraform(struct!.tlsTimeout),
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess",
    },
    ca_pool: {
      value: cdktf.stringToHclTerraform(struct!.caPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_chunked_encoding: {
      value: cdktf.booleanToHclTerraform(struct!.disableChunkedEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_origin: {
      value: cdktf.booleanToHclTerraform(struct!.http2Origin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_host_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_connections: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_happy_eyeballs: {
      value: cdktf.booleanToHclTerraform(struct!.noHappyEyeballs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.noTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_server_name: {
      value: cdktf.stringToHclTerraform(struct!.originServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_keep_alive: {
      value: cdktf.numberToHclTerraform(struct!.tcpKeepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tlsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._caPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPool = this._caPool;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._disableChunkedEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChunkedEncoding = this._disableChunkedEncoding;
    }
    if (this._http2Origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Origin = this._http2Origin;
    }
    if (this._httpHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHostHeader = this._httpHostHeader;
    }
    if (this._keepAliveConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveConnections = this._keepAliveConnections;
    }
    if (this._keepAliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
    }
    if (this._noHappyEyeballs !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHappyEyeballs = this._noHappyEyeballs;
    }
    if (this._noTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTlsVerify = this._noTlsVerify;
    }
    if (this._originServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServerName = this._originServerName;
    }
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._tcpKeepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepAlive = this._tcpKeepAlive;
    }
    if (this._tlsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTimeout = this._tlsTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access.internalValue = undefined;
      this._caPool = undefined;
      this._connectTimeout = undefined;
      this._disableChunkedEncoding = undefined;
      this._http2Origin = undefined;
      this._httpHostHeader = undefined;
      this._keepAliveConnections = undefined;
      this._keepAliveTimeout = undefined;
      this._noHappyEyeballs = undefined;
      this._noTlsVerify = undefined;
      this._originServerName = undefined;
      this._proxyType = undefined;
      this._tcpKeepAlive = undefined;
      this._tlsTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access.internalValue = value.access;
      this._caPool = value.caPool;
      this._connectTimeout = value.connectTimeout;
      this._disableChunkedEncoding = value.disableChunkedEncoding;
      this._http2Origin = value.http2Origin;
      this._httpHostHeader = value.httpHostHeader;
      this._keepAliveConnections = value.keepAliveConnections;
      this._keepAliveTimeout = value.keepAliveTimeout;
      this._noHappyEyeballs = value.noHappyEyeballs;
      this._noTlsVerify = value.noTlsVerify;
      this._originServerName = value.originServerName;
      this._proxyType = value.proxyType;
      this._tcpKeepAlive = value.tcpKeepAlive;
      this._tlsTimeout = value.tlsTimeout;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access = new ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // ca_pool - computed: true, optional: true, required: false
  private _caPool?: string; 
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }
  public set caPool(value: string) {
    this._caPool = value;
  }
  public resetCaPool() {
    this._caPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolInput() {
    return this._caPool;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // disable_chunked_encoding - computed: true, optional: true, required: false
  private _disableChunkedEncoding?: boolean | cdktf.IResolvable; 
  public get disableChunkedEncoding() {
    return this.getBooleanAttribute('disable_chunked_encoding');
  }
  public set disableChunkedEncoding(value: boolean | cdktf.IResolvable) {
    this._disableChunkedEncoding = value;
  }
  public resetDisableChunkedEncoding() {
    this._disableChunkedEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChunkedEncodingInput() {
    return this._disableChunkedEncoding;
  }

  // http2_origin - computed: true, optional: true, required: false
  private _http2Origin?: boolean | cdktf.IResolvable; 
  public get http2Origin() {
    return this.getBooleanAttribute('http2_origin');
  }
  public set http2Origin(value: boolean | cdktf.IResolvable) {
    this._http2Origin = value;
  }
  public resetHttp2Origin() {
    this._http2Origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OriginInput() {
    return this._http2Origin;
  }

  // http_host_header - computed: true, optional: true, required: false
  private _httpHostHeader?: string; 
  public get httpHostHeader() {
    return this.getStringAttribute('http_host_header');
  }
  public set httpHostHeader(value: string) {
    this._httpHostHeader = value;
  }
  public resetHttpHostHeader() {
    this._httpHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostHeaderInput() {
    return this._httpHostHeader;
  }

  // keep_alive_connections - computed: true, optional: true, required: false
  private _keepAliveConnections?: number; 
  public get keepAliveConnections() {
    return this.getNumberAttribute('keep_alive_connections');
  }
  public set keepAliveConnections(value: number) {
    this._keepAliveConnections = value;
  }
  public resetKeepAliveConnections() {
    this._keepAliveConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveConnectionsInput() {
    return this._keepAliveConnections;
  }

  // keep_alive_timeout - computed: true, optional: true, required: false
  private _keepAliveTimeout?: number; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // no_happy_eyeballs - computed: true, optional: true, required: false
  private _noHappyEyeballs?: boolean | cdktf.IResolvable; 
  public get noHappyEyeballs() {
    return this.getBooleanAttribute('no_happy_eyeballs');
  }
  public set noHappyEyeballs(value: boolean | cdktf.IResolvable) {
    this._noHappyEyeballs = value;
  }
  public resetNoHappyEyeballs() {
    this._noHappyEyeballs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHappyEyeballsInput() {
    return this._noHappyEyeballs;
  }

  // no_tls_verify - computed: true, optional: true, required: false
  private _noTlsVerify?: boolean | cdktf.IResolvable; 
  public get noTlsVerify() {
    return this.getBooleanAttribute('no_tls_verify');
  }
  public set noTlsVerify(value: boolean | cdktf.IResolvable) {
    this._noTlsVerify = value;
  }
  public resetNoTlsVerify() {
    this._noTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsVerifyInput() {
    return this._noTlsVerify;
  }

  // origin_server_name - computed: true, optional: true, required: false
  private _originServerName?: string; 
  public get originServerName() {
    return this.getStringAttribute('origin_server_name');
  }
  public set originServerName(value: string) {
    this._originServerName = value;
  }
  public resetOriginServerName() {
    this._originServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originServerNameInput() {
    return this._originServerName;
  }

  // proxy_type - computed: true, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // tcp_keep_alive - computed: true, optional: true, required: false
  private _tcpKeepAlive?: number; 
  public get tcpKeepAlive() {
    return this.getNumberAttribute('tcp_keep_alive');
  }
  public set tcpKeepAlive(value: number) {
    this._tcpKeepAlive = value;
  }
  public resetTcpKeepAlive() {
    this._tcpKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepAliveInput() {
    return this._tcpKeepAlive;
  }

  // tls_timeout - computed: true, optional: true, required: false
  private _tlsTimeout?: number; 
  public get tlsTimeout() {
    return this.getNumberAttribute('tls_timeout');
  }
  public set tlsTimeout(value: number) {
    this._tlsTimeout = value;
  }
  public resetTlsTimeout() {
    this._tlsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTimeoutInput() {
    return this._tlsTimeout;
  }
}
export interface ZeroTrustTunnelCloudflaredConfigConfigIngress {
  /**
  * Public hostname for this service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#hostname ZeroTrustTunnelCloudflaredConfigA#hostname}
  */
  readonly hostname?: string;
  /**
  * Configuration parameters for the public hostname specific connection settings between cloudflared and origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_request ZeroTrustTunnelCloudflaredConfigA#origin_request}
  */
  readonly originRequest?: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest;
  /**
  * Requests with this path route to this public hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#path ZeroTrustTunnelCloudflaredConfigA#path}
  */
  readonly path?: string;
  /**
  * Protocol and address of destination server. Supported protocols: http://, https://, unix://, tcp://, ssh://, rdp://, unix+tls://, smb://. Alternatively can return a HTTP status code http_status:[code] e.g. 'http_status:404'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#service ZeroTrustTunnelCloudflaredConfigA#service}
  */
  readonly service: string;
}

export function zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    origin_request: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToTerraform(struct!.originRequest),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_request: {
      value: zeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestToHclTerraform(struct!.originRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._originRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequest = this._originRequest?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._originRequest.internalValue = undefined;
      this._path = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._originRequest.internalValue = value.originRequest;
      this._path = value.path;
      this._service = value.service;
    }
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

  // origin_request - computed: true, optional: true, required: false
  private _originRequest = new ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequestOutputReference(this, "origin_request");
  public get originRequest() {
    return this._originRequest;
  }
  public putOriginRequest(value: ZeroTrustTunnelCloudflaredConfigConfigIngressOriginRequest) {
    this._originRequest.internalValue = value;
  }
  public resetOriginRequest() {
    this._originRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestInput() {
    return this._originRequest.internalValue;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // service - computed: true, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class ZeroTrustTunnelCloudflaredConfigConfigIngressList extends cdktf.ComplexList {
  public internalValue? : ZeroTrustTunnelCloudflaredConfigConfigIngress[] | cdktf.IResolvable

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
  public get(index: number): ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference {
    return new ZeroTrustTunnelCloudflaredConfigConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess {
  /**
  * Access applications that are allowed to reach this hostname for this Tunnel. Audience tags can be identified in the dashboard or via the List Access policies API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#aud_tag ZeroTrustTunnelCloudflaredConfigA#aud_tag}
  */
  readonly audTag: string[];
  /**
  * Deny traffic that has not fulfilled Access authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#required ZeroTrustTunnelCloudflaredConfigA#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#team_name ZeroTrustTunnelCloudflaredConfigA#team_name}
  */
  readonly teamName: string;
}

export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aud_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audTag),
    required: cdktf.booleanToTerraform(struct!.required),
    team_name: cdktf.stringToTerraform(struct!.teamName),
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aud_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audTag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    team_name: {
      value: cdktf.stringToHclTerraform(struct!.teamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.audTag = this._audTag;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._teamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamName = this._teamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audTag = undefined;
      this._required = undefined;
      this._teamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audTag = value.audTag;
      this._required = value.required;
      this._teamName = value.teamName;
    }
  }

  // aud_tag - computed: true, optional: false, required: true
  private _audTag?: string[]; 
  public get audTag() {
    return this.getListAttribute('aud_tag');
  }
  public set audTag(value: string[]) {
    this._audTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audTagInput() {
    return this._audTag;
  }

  // required - computed: true, optional: true, required: false
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

  // team_name - computed: true, optional: false, required: true
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }
}
export interface ZeroTrustTunnelCloudflaredConfigConfigOriginRequest {
  /**
  * For all L7 requests to this hostname, cloudflared will validate each request's Cf-Access-Jwt-Assertion request header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#access ZeroTrustTunnelCloudflaredConfigA#access}
  */
  readonly access?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess;
  /**
  * Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#ca_pool ZeroTrustTunnelCloudflaredConfigA#ca_pool}
  */
  readonly caPool?: string;
  /**
  * Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#connect_timeout ZeroTrustTunnelCloudflaredConfigA#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Disables chunked transfer encoding. Useful if you are running a WSGI server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#disable_chunked_encoding ZeroTrustTunnelCloudflaredConfigA#disable_chunked_encoding}
  */
  readonly disableChunkedEncoding?: boolean | cdktf.IResolvable;
  /**
  * Attempt to connect to origin using HTTP2. Origin must be configured as https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#http2_origin ZeroTrustTunnelCloudflaredConfigA#http2_origin}
  */
  readonly http2Origin?: boolean | cdktf.IResolvable;
  /**
  * Sets the HTTP Host header on requests sent to the local service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#http_host_header ZeroTrustTunnelCloudflaredConfigA#http_host_header}
  */
  readonly httpHostHeader?: string;
  /**
  * Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_connections ZeroTrustTunnelCloudflaredConfigA#keep_alive_connections}
  */
  readonly keepAliveConnections?: number;
  /**
  * Timeout after which an idle keepalive connection can be discarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#keep_alive_timeout ZeroTrustTunnelCloudflaredConfigA#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_happy_eyeballs ZeroTrustTunnelCloudflaredConfigA#no_happy_eyeballs}
  */
  readonly noHappyEyeballs?: boolean | cdktf.IResolvable;
  /**
  * Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#no_tls_verify ZeroTrustTunnelCloudflaredConfigA#no_tls_verify}
  */
  readonly noTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Hostname that cloudflared should expect from your origin server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_server_name ZeroTrustTunnelCloudflaredConfigA#origin_server_name}
  */
  readonly originServerName?: string;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy and "socks" for a SOCKS5 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#proxy_type ZeroTrustTunnelCloudflaredConfigA#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#tcp_keep_alive ZeroTrustTunnelCloudflaredConfigA#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: number;
  /**
  * Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#tls_timeout ZeroTrustTunnelCloudflaredConfigA#tls_timeout}
  */
  readonly tlsTimeout?: number;
}

export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToTerraform(struct!.access),
    ca_pool: cdktf.stringToTerraform(struct!.caPool),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    disable_chunked_encoding: cdktf.booleanToTerraform(struct!.disableChunkedEncoding),
    http2_origin: cdktf.booleanToTerraform(struct!.http2Origin),
    http_host_header: cdktf.stringToTerraform(struct!.httpHostHeader),
    keep_alive_connections: cdktf.numberToTerraform(struct!.keepAliveConnections),
    keep_alive_timeout: cdktf.numberToTerraform(struct!.keepAliveTimeout),
    no_happy_eyeballs: cdktf.booleanToTerraform(struct!.noHappyEyeballs),
    no_tls_verify: cdktf.booleanToTerraform(struct!.noTlsVerify),
    origin_server_name: cdktf.stringToTerraform(struct!.originServerName),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    tcp_keep_alive: cdktf.numberToTerraform(struct!.tcpKeepAlive),
    tls_timeout: cdktf.numberToTerraform(struct!.tlsTimeout),
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: zeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess",
    },
    ca_pool: {
      value: cdktf.stringToHclTerraform(struct!.caPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_chunked_encoding: {
      value: cdktf.booleanToHclTerraform(struct!.disableChunkedEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_origin: {
      value: cdktf.booleanToHclTerraform(struct!.http2Origin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_host_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_connections: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_happy_eyeballs: {
      value: cdktf.booleanToHclTerraform(struct!.noHappyEyeballs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.noTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_server_name: {
      value: cdktf.stringToHclTerraform(struct!.originServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_keep_alive: {
      value: cdktf.numberToHclTerraform(struct!.tcpKeepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tlsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._caPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPool = this._caPool;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._disableChunkedEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChunkedEncoding = this._disableChunkedEncoding;
    }
    if (this._http2Origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Origin = this._http2Origin;
    }
    if (this._httpHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHostHeader = this._httpHostHeader;
    }
    if (this._keepAliveConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveConnections = this._keepAliveConnections;
    }
    if (this._keepAliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
    }
    if (this._noHappyEyeballs !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHappyEyeballs = this._noHappyEyeballs;
    }
    if (this._noTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTlsVerify = this._noTlsVerify;
    }
    if (this._originServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServerName = this._originServerName;
    }
    if (this._proxyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyType = this._proxyType;
    }
    if (this._tcpKeepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpKeepAlive = this._tcpKeepAlive;
    }
    if (this._tlsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTimeout = this._tlsTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access.internalValue = undefined;
      this._caPool = undefined;
      this._connectTimeout = undefined;
      this._disableChunkedEncoding = undefined;
      this._http2Origin = undefined;
      this._httpHostHeader = undefined;
      this._keepAliveConnections = undefined;
      this._keepAliveTimeout = undefined;
      this._noHappyEyeballs = undefined;
      this._noTlsVerify = undefined;
      this._originServerName = undefined;
      this._proxyType = undefined;
      this._tcpKeepAlive = undefined;
      this._tlsTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access.internalValue = value.access;
      this._caPool = value.caPool;
      this._connectTimeout = value.connectTimeout;
      this._disableChunkedEncoding = value.disableChunkedEncoding;
      this._http2Origin = value.http2Origin;
      this._httpHostHeader = value.httpHostHeader;
      this._keepAliveConnections = value.keepAliveConnections;
      this._keepAliveTimeout = value.keepAliveTimeout;
      this._noHappyEyeballs = value.noHappyEyeballs;
      this._noTlsVerify = value.noTlsVerify;
      this._originServerName = value.originServerName;
      this._proxyType = value.proxyType;
      this._tcpKeepAlive = value.tcpKeepAlive;
      this._tlsTimeout = value.tlsTimeout;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access = new ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequestAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // ca_pool - computed: true, optional: true, required: false
  private _caPool?: string; 
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }
  public set caPool(value: string) {
    this._caPool = value;
  }
  public resetCaPool() {
    this._caPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolInput() {
    return this._caPool;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // disable_chunked_encoding - computed: true, optional: true, required: false
  private _disableChunkedEncoding?: boolean | cdktf.IResolvable; 
  public get disableChunkedEncoding() {
    return this.getBooleanAttribute('disable_chunked_encoding');
  }
  public set disableChunkedEncoding(value: boolean | cdktf.IResolvable) {
    this._disableChunkedEncoding = value;
  }
  public resetDisableChunkedEncoding() {
    this._disableChunkedEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChunkedEncodingInput() {
    return this._disableChunkedEncoding;
  }

  // http2_origin - computed: true, optional: true, required: false
  private _http2Origin?: boolean | cdktf.IResolvable; 
  public get http2Origin() {
    return this.getBooleanAttribute('http2_origin');
  }
  public set http2Origin(value: boolean | cdktf.IResolvable) {
    this._http2Origin = value;
  }
  public resetHttp2Origin() {
    this._http2Origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OriginInput() {
    return this._http2Origin;
  }

  // http_host_header - computed: true, optional: true, required: false
  private _httpHostHeader?: string; 
  public get httpHostHeader() {
    return this.getStringAttribute('http_host_header');
  }
  public set httpHostHeader(value: string) {
    this._httpHostHeader = value;
  }
  public resetHttpHostHeader() {
    this._httpHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostHeaderInput() {
    return this._httpHostHeader;
  }

  // keep_alive_connections - computed: true, optional: true, required: false
  private _keepAliveConnections?: number; 
  public get keepAliveConnections() {
    return this.getNumberAttribute('keep_alive_connections');
  }
  public set keepAliveConnections(value: number) {
    this._keepAliveConnections = value;
  }
  public resetKeepAliveConnections() {
    this._keepAliveConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveConnectionsInput() {
    return this._keepAliveConnections;
  }

  // keep_alive_timeout - computed: true, optional: true, required: false
  private _keepAliveTimeout?: number; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // no_happy_eyeballs - computed: true, optional: true, required: false
  private _noHappyEyeballs?: boolean | cdktf.IResolvable; 
  public get noHappyEyeballs() {
    return this.getBooleanAttribute('no_happy_eyeballs');
  }
  public set noHappyEyeballs(value: boolean | cdktf.IResolvable) {
    this._noHappyEyeballs = value;
  }
  public resetNoHappyEyeballs() {
    this._noHappyEyeballs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHappyEyeballsInput() {
    return this._noHappyEyeballs;
  }

  // no_tls_verify - computed: true, optional: true, required: false
  private _noTlsVerify?: boolean | cdktf.IResolvable; 
  public get noTlsVerify() {
    return this.getBooleanAttribute('no_tls_verify');
  }
  public set noTlsVerify(value: boolean | cdktf.IResolvable) {
    this._noTlsVerify = value;
  }
  public resetNoTlsVerify() {
    this._noTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsVerifyInput() {
    return this._noTlsVerify;
  }

  // origin_server_name - computed: true, optional: true, required: false
  private _originServerName?: string; 
  public get originServerName() {
    return this.getStringAttribute('origin_server_name');
  }
  public set originServerName(value: string) {
    this._originServerName = value;
  }
  public resetOriginServerName() {
    this._originServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originServerNameInput() {
    return this._originServerName;
  }

  // proxy_type - computed: true, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // tcp_keep_alive - computed: true, optional: true, required: false
  private _tcpKeepAlive?: number; 
  public get tcpKeepAlive() {
    return this.getNumberAttribute('tcp_keep_alive');
  }
  public set tcpKeepAlive(value: number) {
    this._tcpKeepAlive = value;
  }
  public resetTcpKeepAlive() {
    this._tcpKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepAliveInput() {
    return this._tcpKeepAlive;
  }

  // tls_timeout - computed: true, optional: true, required: false
  private _tlsTimeout?: number; 
  public get tlsTimeout() {
    return this.getNumberAttribute('tls_timeout');
  }
  public set tlsTimeout(value: number) {
    this._tlsTimeout = value;
  }
  public resetTlsTimeout() {
    this._tlsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTimeoutInput() {
    return this._tlsTimeout;
  }
}
export interface ZeroTrustTunnelCloudflaredConfigConfigWarpRouting {
}

export function zeroTrustTunnelCloudflaredConfigConfigWarpRoutingToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigWarpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigWarpRoutingToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfigWarpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZeroTrustTunnelCloudflaredConfigConfigWarpRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfigWarpRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfigWarpRouting | cdktf.IResolvable | undefined) {
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface ZeroTrustTunnelCloudflaredConfigConfig {
  /**
  * List of public hostname definitions. At least one ingress rule needs to be defined for the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#ingress ZeroTrustTunnelCloudflaredConfigA#ingress}
  */
  readonly ingress?: ZeroTrustTunnelCloudflaredConfigConfigIngress[] | cdktf.IResolvable;
  /**
  * Configuration parameters for the public hostname specific connection settings between cloudflared and origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#origin_request ZeroTrustTunnelCloudflaredConfigA#origin_request}
  */
  readonly originRequest?: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest;
  /**
  * Enable private network access from WARP users to private network routes. This is enabled if the tunnel has an assigned route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#warp_routing ZeroTrustTunnelCloudflaredConfigA#warp_routing}
  */
  readonly warpRouting?: ZeroTrustTunnelCloudflaredConfigConfigWarpRouting;
}

export function zeroTrustTunnelCloudflaredConfigConfigToTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress: cdktf.listMapper(zeroTrustTunnelCloudflaredConfigConfigIngressToTerraform, false)(struct!.ingress),
    origin_request: zeroTrustTunnelCloudflaredConfigConfigOriginRequestToTerraform(struct!.originRequest),
    warp_routing: zeroTrustTunnelCloudflaredConfigConfigWarpRoutingToTerraform(struct!.warpRouting),
  }
}


export function zeroTrustTunnelCloudflaredConfigConfigToHclTerraform(struct?: ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress: {
      value: cdktf.listMapperHcl(zeroTrustTunnelCloudflaredConfigConfigIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigIngressList",
    },
    origin_request: {
      value: zeroTrustTunnelCloudflaredConfigConfigOriginRequestToHclTerraform(struct!.originRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigOriginRequest",
    },
    warp_routing: {
      value: zeroTrustTunnelCloudflaredConfigConfigWarpRoutingToHclTerraform(struct!.warpRouting),
      isBlock: true,
      type: "struct",
      storageClassType: "ZeroTrustTunnelCloudflaredConfigConfigWarpRouting",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZeroTrustTunnelCloudflaredConfigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._originRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequest = this._originRequest?.internalValue;
    }
    if (this._warpRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warpRouting = this._warpRouting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZeroTrustTunnelCloudflaredConfigConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingress.internalValue = undefined;
      this._originRequest.internalValue = undefined;
      this._warpRouting.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingress.internalValue = value.ingress;
      this._originRequest.internalValue = value.originRequest;
      this._warpRouting.internalValue = value.warpRouting;
    }
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress = new ZeroTrustTunnelCloudflaredConfigConfigIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: ZeroTrustTunnelCloudflaredConfigConfigIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // origin_request - computed: true, optional: true, required: false
  private _originRequest = new ZeroTrustTunnelCloudflaredConfigConfigOriginRequestOutputReference(this, "origin_request");
  public get originRequest() {
    return this._originRequest;
  }
  public putOriginRequest(value: ZeroTrustTunnelCloudflaredConfigConfigOriginRequest) {
    this._originRequest.internalValue = value;
  }
  public resetOriginRequest() {
    this._originRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestInput() {
    return this._originRequest.internalValue;
  }

  // warp_routing - computed: true, optional: true, required: false
  private _warpRouting = new ZeroTrustTunnelCloudflaredConfigConfigWarpRoutingOutputReference(this, "warp_routing");
  public get warpRouting() {
    return this._warpRouting;
  }
  public putWarpRouting(value: ZeroTrustTunnelCloudflaredConfigConfigWarpRouting) {
    this._warpRouting.internalValue = value;
  }
  public resetWarpRouting() {
    this._warpRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warpRoutingInput() {
    return this._warpRouting.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config}
*/
export class ZeroTrustTunnelCloudflaredConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_tunnel_cloudflared_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZeroTrustTunnelCloudflaredConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZeroTrustTunnelCloudflaredConfigA to import
  * @param importFromId The id of the existing ZeroTrustTunnelCloudflaredConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZeroTrustTunnelCloudflaredConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_tunnel_cloudflared_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/zero_trust_tunnel_cloudflared_config cloudflare_zero_trust_tunnel_cloudflared_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZeroTrustTunnelCloudflaredConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: ZeroTrustTunnelCloudflaredConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_tunnel_cloudflared_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.0',
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
    this._config.internalValue = config.config;
    this._source = config.source;
    this._tunnelId = config.tunnelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // config - computed: true, optional: true, required: false
  private _config = new ZeroTrustTunnelCloudflaredConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ZeroTrustTunnelCloudflaredConfigConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      config: zeroTrustTunnelCloudflaredConfigConfigToTerraform(this._config.internalValue),
      source: cdktf.stringToTerraform(this._source),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
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
      config: {
        value: zeroTrustTunnelCloudflaredConfigConfigToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ZeroTrustTunnelCloudflaredConfigConfig",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
