/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TunnelConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#account_id TunnelConfigA#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#id TunnelConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the Tunnel to target for this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tunnel_id TunnelConfigA#tunnel_id}
  */
  readonly tunnelId: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#config TunnelConfigA#config}
  */
  readonly config: TunnelConfigConfig;
}
export interface TunnelConfigConfigIngressRuleOriginRequestAccess {
  /**
  * Audience tags of the access rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}
  */
  readonly audTag?: string[];
  /**
  * Whether the access rule is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#required TunnelConfigA#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Name of the team to which the access rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}
  */
  readonly teamName?: string;
}

export function tunnelConfigConfigIngressRuleOriginRequestAccessToTerraform(struct?: TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference | TunnelConfigConfigIngressRuleOriginRequestAccess): any {
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

export class TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TunnelConfigConfigIngressRuleOriginRequestAccess | undefined {
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

  public set internalValue(value: TunnelConfigConfigIngressRuleOriginRequestAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audTag = undefined;
      this._required = undefined;
      this._teamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audTag = value.audTag;
      this._required = value.required;
      this._teamName = value.teamName;
    }
  }

  // aud_tag - computed: false, optional: true, required: false
  private _audTag?: string[]; 
  public get audTag() {
    return cdktf.Fn.tolist(this.getListAttribute('aud_tag'));
  }
  public set audTag(value: string[]) {
    this._audTag = value;
  }
  public resetAudTag() {
    this._audTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audTagInput() {
    return this._audTag;
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

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }
}
export interface TunnelConfigConfigIngressRuleOriginRequestIpRules {
  /**
  * Whether to allow the IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#allow TunnelConfigA#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Ports to use within the IP rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ports TunnelConfigA#ports}
  */
  readonly ports?: number[];
  /**
  * IP rule prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#prefix TunnelConfigA#prefix}
  */
  readonly prefix?: string;
}

export function tunnelConfigConfigIngressRuleOriginRequestIpRulesToTerraform(struct?: TunnelConfigConfigIngressRuleOriginRequestIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TunnelConfigConfigIngressRuleOriginRequestIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TunnelConfigConfigIngressRuleOriginRequestIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._ports = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._ports = value.ports;
      this._prefix = value.prefix;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class TunnelConfigConfigIngressRuleOriginRequestIpRulesList extends cdktf.ComplexList {
  public internalValue? : TunnelConfigConfigIngressRuleOriginRequestIpRules[] | cdktf.IResolvable

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
  public get(index: number): TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference {
    return new TunnelConfigConfigIngressRuleOriginRequestIpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TunnelConfigConfigIngressRuleOriginRequest {
  /**
  * Runs as jump host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}
  */
  readonly bastionMode?: boolean | cdktf.IResolvable;
  /**
  * Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}
  */
  readonly caPool?: string;
  /**
  * Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}
  */
  readonly disableChunkedEncoding?: boolean | cdktf.IResolvable;
  /**
  * Enables HTTP/2 support for the origin connection. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}
  */
  readonly http2Origin?: boolean | cdktf.IResolvable;
  /**
  * Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}
  */
  readonly httpHostHeader?: string;
  /**
  * Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}
  */
  readonly keepAliveConnections?: number;
  /**
  * Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: string;
  /**
  * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}
  */
  readonly noHappyEyeballs?: boolean | cdktf.IResolvable;
  /**
  * Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}
  */
  readonly noTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}
  */
  readonly originServerName?: string;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures the listen address for that proxy. Defaults to `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}
  */
  readonly proxyAddress?: string;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: string;
  /**
  * Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. Defaults to `10s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}
  */
  readonly tlsTimeout?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#access TunnelConfigA#access}
  */
  readonly access?: TunnelConfigConfigIngressRuleOriginRequestAccess;
  /**
  * ip_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}
  */
  readonly ipRules?: TunnelConfigConfigIngressRuleOriginRequestIpRules[] | cdktf.IResolvable;
}

export function tunnelConfigConfigIngressRuleOriginRequestToTerraform(struct?: TunnelConfigConfigIngressRuleOriginRequestOutputReference | TunnelConfigConfigIngressRuleOriginRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bastion_mode: cdktf.booleanToTerraform(struct!.bastionMode),
    ca_pool: cdktf.stringToTerraform(struct!.caPool),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    disable_chunked_encoding: cdktf.booleanToTerraform(struct!.disableChunkedEncoding),
    http2_origin: cdktf.booleanToTerraform(struct!.http2Origin),
    http_host_header: cdktf.stringToTerraform(struct!.httpHostHeader),
    keep_alive_connections: cdktf.numberToTerraform(struct!.keepAliveConnections),
    keep_alive_timeout: cdktf.stringToTerraform(struct!.keepAliveTimeout),
    no_happy_eyeballs: cdktf.booleanToTerraform(struct!.noHappyEyeballs),
    no_tls_verify: cdktf.booleanToTerraform(struct!.noTlsVerify),
    origin_server_name: cdktf.stringToTerraform(struct!.originServerName),
    proxy_address: cdktf.stringToTerraform(struct!.proxyAddress),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    tcp_keep_alive: cdktf.stringToTerraform(struct!.tcpKeepAlive),
    tls_timeout: cdktf.stringToTerraform(struct!.tlsTimeout),
    access: tunnelConfigConfigIngressRuleOriginRequestAccessToTerraform(struct!.access),
    ip_rules: cdktf.listMapper(tunnelConfigConfigIngressRuleOriginRequestIpRulesToTerraform, true)(struct!.ipRules),
  }
}

export class TunnelConfigConfigIngressRuleOriginRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TunnelConfigConfigIngressRuleOriginRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bastionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionMode = this._bastionMode;
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
    if (this._proxyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAddress = this._proxyAddress;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
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
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._ipRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TunnelConfigConfigIngressRuleOriginRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bastionMode = undefined;
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
      this._proxyAddress = undefined;
      this._proxyPort = undefined;
      this._proxyType = undefined;
      this._tcpKeepAlive = undefined;
      this._tlsTimeout = undefined;
      this._access.internalValue = undefined;
      this._ipRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bastionMode = value.bastionMode;
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
      this._proxyAddress = value.proxyAddress;
      this._proxyPort = value.proxyPort;
      this._proxyType = value.proxyType;
      this._tcpKeepAlive = value.tcpKeepAlive;
      this._tlsTimeout = value.tlsTimeout;
      this._access.internalValue = value.access;
      this._ipRules.internalValue = value.ipRules;
    }
  }

  // bastion_mode - computed: false, optional: true, required: false
  private _bastionMode?: boolean | cdktf.IResolvable; 
  public get bastionMode() {
    return this.getBooleanAttribute('bastion_mode');
  }
  public set bastionMode(value: boolean | cdktf.IResolvable) {
    this._bastionMode = value;
  }
  public resetBastionMode() {
    this._bastionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionModeInput() {
    return this._bastionMode;
  }

  // ca_pool - computed: false, optional: true, required: false
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

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // disable_chunked_encoding - computed: false, optional: true, required: false
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

  // http2_origin - computed: false, optional: true, required: false
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

  // http_host_header - computed: false, optional: true, required: false
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

  // keep_alive_connections - computed: false, optional: true, required: false
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

  // keep_alive_timeout - computed: false, optional: true, required: false
  private _keepAliveTimeout?: string; 
  public get keepAliveTimeout() {
    return this.getStringAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: string) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // no_happy_eyeballs - computed: false, optional: true, required: false
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

  // no_tls_verify - computed: false, optional: true, required: false
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

  // origin_server_name - computed: false, optional: true, required: false
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

  // proxy_address - computed: false, optional: true, required: false
  private _proxyAddress?: string; 
  public get proxyAddress() {
    return this.getStringAttribute('proxy_address');
  }
  public set proxyAddress(value: string) {
    this._proxyAddress = value;
  }
  public resetProxyAddress() {
    this._proxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAddressInput() {
    return this._proxyAddress;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_type - computed: false, optional: true, required: false
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

  // tcp_keep_alive - computed: false, optional: true, required: false
  private _tcpKeepAlive?: string; 
  public get tcpKeepAlive() {
    return this.getStringAttribute('tcp_keep_alive');
  }
  public set tcpKeepAlive(value: string) {
    this._tcpKeepAlive = value;
  }
  public resetTcpKeepAlive() {
    this._tcpKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepAliveInput() {
    return this._tcpKeepAlive;
  }

  // tls_timeout - computed: false, optional: true, required: false
  private _tlsTimeout?: string; 
  public get tlsTimeout() {
    return this.getStringAttribute('tls_timeout');
  }
  public set tlsTimeout(value: string) {
    this._tlsTimeout = value;
  }
  public resetTlsTimeout() {
    this._tlsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTimeoutInput() {
    return this._tlsTimeout;
  }

  // access - computed: false, optional: true, required: false
  private _access = new TunnelConfigConfigIngressRuleOriginRequestAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: TunnelConfigConfigIngressRuleOriginRequestAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new TunnelConfigConfigIngressRuleOriginRequestIpRulesList(this, "ip_rules", true);
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: TunnelConfigConfigIngressRuleOriginRequestIpRules[] | cdktf.IResolvable) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }
}
export interface TunnelConfigConfigIngressRule {
  /**
  * Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#hostname TunnelConfigA#hostname}
  */
  readonly hostname?: string;
  /**
  * Path of the incoming request. If the path matches, the request will be sent to the local service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#path TunnelConfigA#path}
  */
  readonly path?: string;
  /**
  * Name of the service to which the request will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#service TunnelConfigA#service}
  */
  readonly service: string;
  /**
  * origin_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}
  */
  readonly originRequest?: TunnelConfigConfigIngressRuleOriginRequest;
}

export function tunnelConfigConfigIngressRuleToTerraform(struct?: TunnelConfigConfigIngressRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    service: cdktf.stringToTerraform(struct!.service),
    origin_request: tunnelConfigConfigIngressRuleOriginRequestToTerraform(struct!.originRequest),
  }
}

export class TunnelConfigConfigIngressRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TunnelConfigConfigIngressRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._originRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequest = this._originRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TunnelConfigConfigIngressRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._path = undefined;
      this._service = undefined;
      this._originRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._path = value.path;
      this._service = value.service;
      this._originRequest.internalValue = value.originRequest;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
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

  // service - computed: false, optional: false, required: true
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

  // origin_request - computed: false, optional: true, required: false
  private _originRequest = new TunnelConfigConfigIngressRuleOriginRequestOutputReference(this, "origin_request");
  public get originRequest() {
    return this._originRequest;
  }
  public putOriginRequest(value: TunnelConfigConfigIngressRuleOriginRequest) {
    this._originRequest.internalValue = value;
  }
  public resetOriginRequest() {
    this._originRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestInput() {
    return this._originRequest.internalValue;
  }
}

export class TunnelConfigConfigIngressRuleList extends cdktf.ComplexList {
  public internalValue? : TunnelConfigConfigIngressRule[] | cdktf.IResolvable

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
  public get(index: number): TunnelConfigConfigIngressRuleOutputReference {
    return new TunnelConfigConfigIngressRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TunnelConfigConfigOriginRequestAccess {
  /**
  * Audience tags of the access rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#aud_tag TunnelConfigA#aud_tag}
  */
  readonly audTag?: string[];
  /**
  * Whether the access rule is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#required TunnelConfigA#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Name of the team to which the access rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#team_name TunnelConfigA#team_name}
  */
  readonly teamName?: string;
}

export function tunnelConfigConfigOriginRequestAccessToTerraform(struct?: TunnelConfigConfigOriginRequestAccessOutputReference | TunnelConfigConfigOriginRequestAccess): any {
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

export class TunnelConfigConfigOriginRequestAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TunnelConfigConfigOriginRequestAccess | undefined {
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

  public set internalValue(value: TunnelConfigConfigOriginRequestAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audTag = undefined;
      this._required = undefined;
      this._teamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audTag = value.audTag;
      this._required = value.required;
      this._teamName = value.teamName;
    }
  }

  // aud_tag - computed: false, optional: true, required: false
  private _audTag?: string[]; 
  public get audTag() {
    return cdktf.Fn.tolist(this.getListAttribute('aud_tag'));
  }
  public set audTag(value: string[]) {
    this._audTag = value;
  }
  public resetAudTag() {
    this._audTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audTagInput() {
    return this._audTag;
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

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }
}
export interface TunnelConfigConfigOriginRequestIpRules {
  /**
  * Whether to allow the IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#allow TunnelConfigA#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Ports to use within the IP rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ports TunnelConfigA#ports}
  */
  readonly ports?: number[];
  /**
  * IP rule prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#prefix TunnelConfigA#prefix}
  */
  readonly prefix?: string;
}

export function tunnelConfigConfigOriginRequestIpRulesToTerraform(struct?: TunnelConfigConfigOriginRequestIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class TunnelConfigConfigOriginRequestIpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TunnelConfigConfigOriginRequestIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TunnelConfigConfigOriginRequestIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._ports = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._ports = value.ports;
      this._prefix = value.prefix;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class TunnelConfigConfigOriginRequestIpRulesList extends cdktf.ComplexList {
  public internalValue? : TunnelConfigConfigOriginRequestIpRules[] | cdktf.IResolvable

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
  public get(index: number): TunnelConfigConfigOriginRequestIpRulesOutputReference {
    return new TunnelConfigConfigOriginRequestIpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TunnelConfigConfigOriginRequest {
  /**
  * Runs as jump host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#bastion_mode TunnelConfigA#bastion_mode}
  */
  readonly bastionMode?: boolean | cdktf.IResolvable;
  /**
  * Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ca_pool TunnelConfigA#ca_pool}
  */
  readonly caPool?: string;
  /**
  * Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#connect_timeout TunnelConfigA#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#disable_chunked_encoding TunnelConfigA#disable_chunked_encoding}
  */
  readonly disableChunkedEncoding?: boolean | cdktf.IResolvable;
  /**
  * Enables HTTP/2 support for the origin connection. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http2_origin TunnelConfigA#http2_origin}
  */
  readonly http2Origin?: boolean | cdktf.IResolvable;
  /**
  * Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#http_host_header TunnelConfigA#http_host_header}
  */
  readonly httpHostHeader?: string;
  /**
  * Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_connections TunnelConfigA#keep_alive_connections}
  */
  readonly keepAliveConnections?: number;
  /**
  * Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#keep_alive_timeout TunnelConfigA#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: string;
  /**
  * Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_happy_eyeballs TunnelConfigA#no_happy_eyeballs}
  */
  readonly noHappyEyeballs?: boolean | cdktf.IResolvable;
  /**
  * Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#no_tls_verify TunnelConfigA#no_tls_verify}
  */
  readonly noTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_server_name TunnelConfigA#origin_server_name}
  */
  readonly originServerName?: string;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures the listen address for that proxy. Defaults to `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_address TunnelConfigA#proxy_address}
  */
  readonly proxyAddress?: string;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_port TunnelConfigA#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Available values: `""`, `socks`. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#proxy_type TunnelConfigA#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. Defaults to `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tcp_keep_alive TunnelConfigA#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: string;
  /**
  * Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. Defaults to `10s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#tls_timeout TunnelConfigA#tls_timeout}
  */
  readonly tlsTimeout?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#access TunnelConfigA#access}
  */
  readonly access?: TunnelConfigConfigOriginRequestAccess;
  /**
  * ip_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ip_rules TunnelConfigA#ip_rules}
  */
  readonly ipRules?: TunnelConfigConfigOriginRequestIpRules[] | cdktf.IResolvable;
}

export function tunnelConfigConfigOriginRequestToTerraform(struct?: TunnelConfigConfigOriginRequestOutputReference | TunnelConfigConfigOriginRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bastion_mode: cdktf.booleanToTerraform(struct!.bastionMode),
    ca_pool: cdktf.stringToTerraform(struct!.caPool),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    disable_chunked_encoding: cdktf.booleanToTerraform(struct!.disableChunkedEncoding),
    http2_origin: cdktf.booleanToTerraform(struct!.http2Origin),
    http_host_header: cdktf.stringToTerraform(struct!.httpHostHeader),
    keep_alive_connections: cdktf.numberToTerraform(struct!.keepAliveConnections),
    keep_alive_timeout: cdktf.stringToTerraform(struct!.keepAliveTimeout),
    no_happy_eyeballs: cdktf.booleanToTerraform(struct!.noHappyEyeballs),
    no_tls_verify: cdktf.booleanToTerraform(struct!.noTlsVerify),
    origin_server_name: cdktf.stringToTerraform(struct!.originServerName),
    proxy_address: cdktf.stringToTerraform(struct!.proxyAddress),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    proxy_type: cdktf.stringToTerraform(struct!.proxyType),
    tcp_keep_alive: cdktf.stringToTerraform(struct!.tcpKeepAlive),
    tls_timeout: cdktf.stringToTerraform(struct!.tlsTimeout),
    access: tunnelConfigConfigOriginRequestAccessToTerraform(struct!.access),
    ip_rules: cdktf.listMapper(tunnelConfigConfigOriginRequestIpRulesToTerraform, true)(struct!.ipRules),
  }
}

export class TunnelConfigConfigOriginRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TunnelConfigConfigOriginRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bastionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionMode = this._bastionMode;
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
    if (this._proxyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAddress = this._proxyAddress;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
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
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._ipRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRules = this._ipRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TunnelConfigConfigOriginRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bastionMode = undefined;
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
      this._proxyAddress = undefined;
      this._proxyPort = undefined;
      this._proxyType = undefined;
      this._tcpKeepAlive = undefined;
      this._tlsTimeout = undefined;
      this._access.internalValue = undefined;
      this._ipRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bastionMode = value.bastionMode;
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
      this._proxyAddress = value.proxyAddress;
      this._proxyPort = value.proxyPort;
      this._proxyType = value.proxyType;
      this._tcpKeepAlive = value.tcpKeepAlive;
      this._tlsTimeout = value.tlsTimeout;
      this._access.internalValue = value.access;
      this._ipRules.internalValue = value.ipRules;
    }
  }

  // bastion_mode - computed: false, optional: true, required: false
  private _bastionMode?: boolean | cdktf.IResolvable; 
  public get bastionMode() {
    return this.getBooleanAttribute('bastion_mode');
  }
  public set bastionMode(value: boolean | cdktf.IResolvable) {
    this._bastionMode = value;
  }
  public resetBastionMode() {
    this._bastionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionModeInput() {
    return this._bastionMode;
  }

  // ca_pool - computed: false, optional: true, required: false
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

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // disable_chunked_encoding - computed: false, optional: true, required: false
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

  // http2_origin - computed: false, optional: true, required: false
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

  // http_host_header - computed: false, optional: true, required: false
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

  // keep_alive_connections - computed: false, optional: true, required: false
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

  // keep_alive_timeout - computed: false, optional: true, required: false
  private _keepAliveTimeout?: string; 
  public get keepAliveTimeout() {
    return this.getStringAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: string) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // no_happy_eyeballs - computed: false, optional: true, required: false
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

  // no_tls_verify - computed: false, optional: true, required: false
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

  // origin_server_name - computed: false, optional: true, required: false
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

  // proxy_address - computed: false, optional: true, required: false
  private _proxyAddress?: string; 
  public get proxyAddress() {
    return this.getStringAttribute('proxy_address');
  }
  public set proxyAddress(value: string) {
    this._proxyAddress = value;
  }
  public resetProxyAddress() {
    this._proxyAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAddressInput() {
    return this._proxyAddress;
  }

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_type - computed: false, optional: true, required: false
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

  // tcp_keep_alive - computed: false, optional: true, required: false
  private _tcpKeepAlive?: string; 
  public get tcpKeepAlive() {
    return this.getStringAttribute('tcp_keep_alive');
  }
  public set tcpKeepAlive(value: string) {
    this._tcpKeepAlive = value;
  }
  public resetTcpKeepAlive() {
    this._tcpKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepAliveInput() {
    return this._tcpKeepAlive;
  }

  // tls_timeout - computed: false, optional: true, required: false
  private _tlsTimeout?: string; 
  public get tlsTimeout() {
    return this.getStringAttribute('tls_timeout');
  }
  public set tlsTimeout(value: string) {
    this._tlsTimeout = value;
  }
  public resetTlsTimeout() {
    this._tlsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTimeoutInput() {
    return this._tlsTimeout;
  }

  // access - computed: false, optional: true, required: false
  private _access = new TunnelConfigConfigOriginRequestAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: TunnelConfigConfigOriginRequestAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new TunnelConfigConfigOriginRequestIpRulesList(this, "ip_rules", true);
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: TunnelConfigConfigOriginRequestIpRules[] | cdktf.IResolvable) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }
}
export interface TunnelConfigConfigWarpRouting {
  /**
  * Whether WARP routing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#enabled TunnelConfigA#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function tunnelConfigConfigWarpRoutingToTerraform(struct?: TunnelConfigConfigWarpRoutingOutputReference | TunnelConfigConfigWarpRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class TunnelConfigConfigWarpRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TunnelConfigConfigWarpRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TunnelConfigConfigWarpRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface TunnelConfigConfig {
  /**
  * ingress_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#ingress_rule TunnelConfigA#ingress_rule}
  */
  readonly ingressRule: TunnelConfigConfigIngressRule[] | cdktf.IResolvable;
  /**
  * origin_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#origin_request TunnelConfigA#origin_request}
  */
  readonly originRequest?: TunnelConfigConfigOriginRequest;
  /**
  * warp_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#warp_routing TunnelConfigA#warp_routing}
  */
  readonly warpRouting?: TunnelConfigConfigWarpRouting;
}

export function tunnelConfigConfigToTerraform(struct?: TunnelConfigConfigOutputReference | TunnelConfigConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_rule: cdktf.listMapper(tunnelConfigConfigIngressRuleToTerraform, true)(struct!.ingressRule),
    origin_request: tunnelConfigConfigOriginRequestToTerraform(struct!.originRequest),
    warp_routing: tunnelConfigConfigWarpRoutingToTerraform(struct!.warpRouting),
  }
}

export class TunnelConfigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TunnelConfigConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRule = this._ingressRule?.internalValue;
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

  public set internalValue(value: TunnelConfigConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingressRule.internalValue = undefined;
      this._originRequest.internalValue = undefined;
      this._warpRouting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingressRule.internalValue = value.ingressRule;
      this._originRequest.internalValue = value.originRequest;
      this._warpRouting.internalValue = value.warpRouting;
    }
  }

  // ingress_rule - computed: false, optional: false, required: true
  private _ingressRule = new TunnelConfigConfigIngressRuleList(this, "ingress_rule", false);
  public get ingressRule() {
    return this._ingressRule;
  }
  public putIngressRule(value: TunnelConfigConfigIngressRule[] | cdktf.IResolvable) {
    this._ingressRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRuleInput() {
    return this._ingressRule.internalValue;
  }

  // origin_request - computed: false, optional: true, required: false
  private _originRequest = new TunnelConfigConfigOriginRequestOutputReference(this, "origin_request");
  public get originRequest() {
    return this._originRequest;
  }
  public putOriginRequest(value: TunnelConfigConfigOriginRequest) {
    this._originRequest.internalValue = value;
  }
  public resetOriginRequest() {
    this._originRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestInput() {
    return this._originRequest.internalValue;
  }

  // warp_routing - computed: false, optional: true, required: false
  private _warpRouting = new TunnelConfigConfigWarpRoutingOutputReference(this, "warp_routing");
  public get warpRouting() {
    return this._warpRouting;
  }
  public putWarpRouting(value: TunnelConfigConfigWarpRouting) {
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
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config cloudflare_tunnel_config}
*/
export class TunnelConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_tunnel_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TunnelConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TunnelConfigA to import
  * @param importFromId The id of the existing TunnelConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TunnelConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_tunnel_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/tunnel_config cloudflare_tunnel_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TunnelConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: TunnelConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_tunnel_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.16.0',
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
    this._id = config.id;
    this._tunnelId = config.tunnelId;
    this._config.internalValue = config.config;
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

  // config - computed: false, optional: false, required: true
  private _config = new TunnelConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: TunnelConfigConfig) {
    this._config.internalValue = value;
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
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
      config: tunnelConfigConfigToTerraform(this._config.internalValue),
    };
  }
}
