// https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpectrumApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}
  */
  readonly argoSmartRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#edge_ip_connectivity SpectrumApplication#edge_ip_connectivity}
  */
  readonly edgeIpConnectivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#edge_ips SpectrumApplication#edge_ips}
  */
  readonly edgeIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#id SpectrumApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}
  */
  readonly ipFirewall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#origin_direct SpectrumApplication#origin_direct}
  */
  readonly originDirect?: string[];
  /**
  * Conflicts with `origin_port_range`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#origin_port SpectrumApplication#origin_port}
  */
  readonly originPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#protocol SpectrumApplication#protocol}
  */
  readonly protocol: string;
  /**
  * Defaults to `off`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * Defaults to `off`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#tls SpectrumApplication#tls}
  */
  readonly tls?: string;
  /**
  * Defaults to `direct`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#traffic_type SpectrumApplication#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#zone_id SpectrumApplication#zone_id}
  */
  readonly zoneId: string;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#dns SpectrumApplication#dns}
  */
  readonly dns: SpectrumApplicationDns;
  /**
  * origin_dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#origin_dns SpectrumApplication#origin_dns}
  */
  readonly originDns?: SpectrumApplicationOriginDns;
  /**
  * origin_port_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#origin_port_range SpectrumApplication#origin_port_range}
  */
  readonly originPortRange?: SpectrumApplicationOriginPortRange;
}
export interface SpectrumApplicationDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#name SpectrumApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#type SpectrumApplication#type}
  */
  readonly type: string;
}

export function spectrumApplicationDnsToTerraform(struct?: SpectrumApplicationDnsOutputReference | SpectrumApplicationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SpectrumApplicationDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpectrumApplicationDns | undefined {
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

  public set internalValue(value: SpectrumApplicationDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpectrumApplicationOriginDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#name SpectrumApplication#name}
  */
  readonly name: string;
}

export function spectrumApplicationOriginDnsToTerraform(struct?: SpectrumApplicationOriginDnsOutputReference | SpectrumApplicationOriginDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SpectrumApplicationOriginDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpectrumApplicationOriginDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpectrumApplicationOriginDns | undefined) {
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
export interface SpectrumApplicationOriginPortRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#end SpectrumApplication#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application#start SpectrumApplication#start}
  */
  readonly start: number;
}

export function spectrumApplicationOriginPortRangeToTerraform(struct?: SpectrumApplicationOriginPortRangeOutputReference | SpectrumApplicationOriginPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class SpectrumApplicationOriginPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpectrumApplicationOriginPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpectrumApplicationOriginPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application cloudflare_spectrum_application}
*/
export class SpectrumApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_spectrum_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application cloudflare_spectrum_application} Resource
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
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._argoSmartRouting = config.argoSmartRouting;
    this._edgeIpConnectivity = config.edgeIpConnectivity;
    this._edgeIps = config.edgeIps;
    this._id = config.id;
    this._ipFirewall = config.ipFirewall;
    this._originDirect = config.originDirect;
    this._originPort = config.originPort;
    this._protocol = config.protocol;
    this._proxyProtocol = config.proxyProtocol;
    this._tls = config.tls;
    this._trafficType = config.trafficType;
    this._zoneId = config.zoneId;
    this._dns.internalValue = config.dns;
    this._originDns.internalValue = config.originDns;
    this._originPortRange.internalValue = config.originPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argo_smart_routing - computed: false, optional: true, required: false
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

  // edge_ip_connectivity - computed: true, optional: true, required: false
  private _edgeIpConnectivity?: string; 
  public get edgeIpConnectivity() {
    return this.getStringAttribute('edge_ip_connectivity');
  }
  public set edgeIpConnectivity(value: string) {
    this._edgeIpConnectivity = value;
  }
  public resetEdgeIpConnectivity() {
    this._edgeIpConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIpConnectivityInput() {
    return this._edgeIpConnectivity;
  }

  // edge_ips - computed: false, optional: true, required: false
  private _edgeIps?: string[]; 
  public get edgeIps() {
    return this.getListAttribute('edge_ips');
  }
  public set edgeIps(value: string[]) {
    this._edgeIps = value;
  }
  public resetEdgeIps() {
    this._edgeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIpsInput() {
    return this._edgeIps;
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

  // ip_firewall - computed: false, optional: true, required: false
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

  // origin_port - computed: false, optional: true, required: false
  private _originPort?: number; 
  public get originPort() {
    return this.getNumberAttribute('origin_port');
  }
  public set originPort(value: number) {
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

  // proxy_protocol - computed: false, optional: true, required: false
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

  // tls - computed: false, optional: true, required: false
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

  // traffic_type - computed: false, optional: true, required: false
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

  // origin_port_range - computed: false, optional: true, required: false
  private _originPortRange = new SpectrumApplicationOriginPortRangeOutputReference(this, "origin_port_range");
  public get originPortRange() {
    return this._originPortRange;
  }
  public putOriginPortRange(value: SpectrumApplicationOriginPortRange) {
    this._originPortRange.internalValue = value;
  }
  public resetOriginPortRange() {
    this._originPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortRangeInput() {
    return this._originPortRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      argo_smart_routing: cdktf.booleanToTerraform(this._argoSmartRouting),
      edge_ip_connectivity: cdktf.stringToTerraform(this._edgeIpConnectivity),
      edge_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._edgeIps),
      id: cdktf.stringToTerraform(this._id),
      ip_firewall: cdktf.booleanToTerraform(this._ipFirewall),
      origin_direct: cdktf.listMapper(cdktf.stringToTerraform)(this._originDirect),
      origin_port: cdktf.numberToTerraform(this._originPort),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
      tls: cdktf.stringToTerraform(this._tls),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      dns: spectrumApplicationDnsToTerraform(this._dns.internalValue),
      origin_dns: spectrumApplicationOriginDnsToTerraform(this._originDns.internalValue),
      origin_port_range: spectrumApplicationOriginPortRangeToTerraform(this._originPortRange.internalValue),
    };
  }
}
