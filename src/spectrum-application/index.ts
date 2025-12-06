/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpectrumApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables Argo Smart Routing for this application.
  * Notes: Only available for TCP applications with traffic_type set to "direct".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}
  */
  readonly argoSmartRouting?: boolean | cdktf.IResolvable;
  /**
  * The name and type of DNS record for the Spectrum application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#dns SpectrumApplication#dns}
  */
  readonly dns: SpectrumApplicationDns;
  /**
  * The anycast edge IP configuration for the hostname of this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}
  */
  readonly edgeIps?: SpectrumApplicationEdgeIps;
  /**
  * Enables IP Access Rules for this application.
  * Notes: Only available for TCP applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}
  */
  readonly ipFirewall?: boolean | cdktf.IResolvable;
  /**
  * List of origin IP addresses. Array may contain multiple IP addresses for load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}
  */
  readonly originDirect?: string[];
  /**
  * The name and type of DNS record for the Spectrum application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}
  */
  readonly originDns?: SpectrumApplicationOriginDns;
  /**
  * The destination port at the origin. Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.
  * Notes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}
  */
  readonly originPort?: { [key: string]: any };
  /**
  * The port configuration at Cloudflare's edge. May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}
  */
  readonly protocol: string;
  /**
  * Enables Proxy Protocol to the origin. Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.
  * Available values: "off", "v1", "v2", "simple".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * The type of TLS termination associated with the application.
  * Available values: "off", "flexible", "full", "strict".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#tls SpectrumApplication#tls}
  */
  readonly tls?: string;
  /**
  * Determines how data travels from the edge to your origin. When set to "direct", Spectrum will send traffic directly to your origin, and the application's type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.
  * Available values: "direct", "http", "https".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * Zone identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}
  */
  readonly zoneId: string;
}
export interface SpectrumApplicationDns {
  /**
  * The name of the DNS record associated with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#name SpectrumApplication#name}
  */
  readonly name?: string;
  /**
  * The type of DNS record associated with the application.
  * Available values: "CNAME", "ADDRESS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#type SpectrumApplication#type}
  */
  readonly type?: string;
}

export function spectrumApplicationDnsToTerraform(struct?: SpectrumApplicationDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spectrumApplicationDnsToHclTerraform(struct?: SpectrumApplicationDns | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpectrumApplicationDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpectrumApplicationDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpectrumApplicationDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
}
export interface SpectrumApplicationEdgeIps {
  /**
  * The IP versions supported for inbound connections on Spectrum anycast IPs.
  * Available values: "all", "ipv4", "ipv6".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#connectivity SpectrumApplication#connectivity}
  */
  readonly connectivity?: string;
  /**
  * The array of customer owned IPs we broadcast via anycast for this hostname and application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#ips SpectrumApplication#ips}
  */
  readonly ips?: string[];
  /**
  * The type of edge IP configuration specified. Dynamically allocated edge IPs use Spectrum anycast IPs in accordance with the connectivity you specify. Only valid with CNAME DNS names.
  * Available values: "dynamic", "static".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#type SpectrumApplication#type}
  */
  readonly type?: string;
}

export function spectrumApplicationEdgeIpsToTerraform(struct?: SpectrumApplicationEdgeIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity: cdktf.stringToTerraform(struct!.connectivity),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spectrumApplicationEdgeIpsToHclTerraform(struct?: SpectrumApplicationEdgeIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity: {
      value: cdktf.stringToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpectrumApplicationEdgeIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpectrumApplicationEdgeIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpectrumApplicationEdgeIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectivity = undefined;
      this._ips = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectivity = value.connectivity;
      this._ips = value.ips;
      this._type = value.type;
    }
  }

  // connectivity - computed: true, optional: true, required: false
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  public resetConnectivity() {
    this._connectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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
}
export interface SpectrumApplicationOriginDns {
  /**
  * The name of the DNS record associated with the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#name SpectrumApplication#name}
  */
  readonly name?: string;
  /**
  * The TTL of our resolution of your DNS record in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#ttl SpectrumApplication#ttl}
  */
  readonly ttl?: number;
  /**
  * The type of DNS record associated with the origin. "" is used to specify a combination of A/AAAA records.
  * Available values: "", "A", "AAAA", "SRV".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#type SpectrumApplication#type}
  */
  readonly type?: string;
}

export function spectrumApplicationOriginDnsToTerraform(struct?: SpectrumApplicationOriginDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spectrumApplicationOriginDnsToHclTerraform(struct?: SpectrumApplicationOriginDns | cdktf.IResolvable): any {
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpectrumApplicationOriginDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpectrumApplicationOriginDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpectrumApplicationOriginDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ttl = value.ttl;
      this._type = value.type;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application cloudflare_spectrum_application}
*/
export class SpectrumApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_spectrum_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpectrumApplication to import
  * @param importFromId The id of the existing SpectrumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpectrumApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_spectrum_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/spectrum_application cloudflare_spectrum_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpectrumApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: SpectrumApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_spectrum_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._argoSmartRouting = config.argoSmartRouting;
    this._dns.internalValue = config.dns;
    this._edgeIps.internalValue = config.edgeIps;
    this._ipFirewall = config.ipFirewall;
    this._originDirect = config.originDirect;
    this._originDns.internalValue = config.originDns;
    this._originPort = config.originPort;
    this._protocol = config.protocol;
    this._proxyProtocol = config.proxyProtocol;
    this._tls = config.tls;
    this._trafficType = config.trafficType;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argo_smart_routing - computed: true, optional: true, required: false
  private _argoSmartRouting?: boolean | cdktf.IResolvable; 
  public get argoSmartRouting() {
    return this.getBooleanAttribute('argo_smart_routing');
  }
  public set argoSmartRouting(value: boolean | cdktf.IResolvable) {
    this._argoSmartRouting = value;
  }
  public resetArgoSmartRouting() {
    this._argoSmartRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoSmartRoutingInput() {
    return this._argoSmartRouting;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dns - computed: false, optional: false, required: true
  private _dns = new SpectrumApplicationDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: SpectrumApplicationDns) {
    this._dns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // edge_ips - computed: true, optional: true, required: false
  private _edgeIps = new SpectrumApplicationEdgeIpsOutputReference(this, "edge_ips");
  public get edgeIps() {
    return this._edgeIps;
  }
  public putEdgeIps(value: SpectrumApplicationEdgeIps) {
    this._edgeIps.internalValue = value;
  }
  public resetEdgeIps() {
    this._edgeIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIpsInput() {
    return this._edgeIps.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_firewall - computed: true, optional: true, required: false
  private _ipFirewall?: boolean | cdktf.IResolvable; 
  public get ipFirewall() {
    return this.getBooleanAttribute('ip_firewall');
  }
  public set ipFirewall(value: boolean | cdktf.IResolvable) {
    this._ipFirewall = value;
  }
  public resetIpFirewall() {
    this._ipFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFirewallInput() {
    return this._ipFirewall;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // origin_direct - computed: false, optional: true, required: false
  private _originDirect?: string[]; 
  public get originDirect() {
    return this.getListAttribute('origin_direct');
  }
  public set originDirect(value: string[]) {
    this._originDirect = value;
  }
  public resetOriginDirect() {
    this._originDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDirectInput() {
    return this._originDirect;
  }

  // origin_dns - computed: false, optional: true, required: false
  private _originDns = new SpectrumApplicationOriginDnsOutputReference(this, "origin_dns");
  public get originDns() {
    return this._originDns;
  }
  public putOriginDns(value: SpectrumApplicationOriginDns) {
    this._originDns.internalValue = value;
  }
  public resetOriginDns() {
    this._originDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDnsInput() {
    return this._originDns.internalValue;
  }

  // origin_port - computed: false, optional: true, required: false
  private _originPort?: { [key: string]: any }; 
  public get originPort() {
    return this.getAnyMapAttribute('origin_port');
  }
  public set originPort(value: { [key: string]: any }) {
    this._originPort = value;
  }
  public resetOriginPort() {
    this._originPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortInput() {
    return this._originPort;
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

  // proxy_protocol - computed: true, optional: true, required: false
  private _proxyProtocol?: string; 
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
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
      argo_smart_routing: cdktf.booleanToTerraform(this._argoSmartRouting),
      dns: spectrumApplicationDnsToTerraform(this._dns.internalValue),
      edge_ips: spectrumApplicationEdgeIpsToTerraform(this._edgeIps.internalValue),
      ip_firewall: cdktf.booleanToTerraform(this._ipFirewall),
      origin_direct: cdktf.listMapper(cdktf.stringToTerraform, false)(this._originDirect),
      origin_dns: spectrumApplicationOriginDnsToTerraform(this._originDns.internalValue),
      origin_port: cdktf.hashMapper(cdktf.anyToTerraform)(this._originPort),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
      tls: cdktf.stringToTerraform(this._tls),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      argo_smart_routing: {
        value: cdktf.booleanToHclTerraform(this._argoSmartRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns: {
        value: spectrumApplicationDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpectrumApplicationDns",
      },
      edge_ips: {
        value: spectrumApplicationEdgeIpsToHclTerraform(this._edgeIps.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpectrumApplicationEdgeIps",
      },
      ip_firewall: {
        value: cdktf.booleanToHclTerraform(this._ipFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      origin_direct: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._originDirect),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      origin_dns: {
        value: spectrumApplicationOriginDnsToHclTerraform(this._originDns.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpectrumApplicationOriginDns",
      },
      origin_port: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._originPort),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_protocol: {
        value: cdktf.stringToHclTerraform(this._proxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls: {
        value: cdktf.stringToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
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
