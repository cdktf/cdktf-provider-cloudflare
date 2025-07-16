/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#account_id DnsFirewall#account_id}
  */
  readonly accountId: string;
  /**
  * Attack mitigation settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}
  */
  readonly attackMitigation?: DnsFirewallAttackMitigation;
  /**
  * Whether to refuse to answer queries for the ANY type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}
  */
  readonly deprecateAnyRequests?: boolean | cdktf.IResolvable;
  /**
  * Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}
  */
  readonly ecsFallback?: boolean | cdktf.IResolvable;
  /**
  * Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. Higher TTLs will be decreased to the maximum defined here for caching purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}
  */
  readonly maximumCacheTtl?: number;
  /**
  * Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. Lower TTLs will be increased to the minimum defined here for caching purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}
  */
  readonly minimumCacheTtl?: number;
  /**
  * DNS Firewall cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#name DnsFirewall#name}
  */
  readonly name: string;
  /**
  * Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}
  */
  readonly negativeCacheTtl?: number;
  /**
  * Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}
  */
  readonly ratelimit?: number;
  /**
  * Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#retries DnsFirewall#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}
  */
  readonly upstreamIps: string[];
}
export interface DnsFirewallAttackMitigation {
  /**
  * When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#enabled DnsFirewall#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Only mitigate attacks when upstream servers seem unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}
  */
  readonly onlyWhenUpstreamUnhealthy?: boolean | cdktf.IResolvable;
}

export function dnsFirewallAttackMitigationToTerraform(struct?: DnsFirewallAttackMitigation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    only_when_upstream_unhealthy: cdktf.booleanToTerraform(struct!.onlyWhenUpstreamUnhealthy),
  }
}


export function dnsFirewallAttackMitigationToHclTerraform(struct?: DnsFirewallAttackMitigation | cdktf.IResolvable): any {
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
    only_when_upstream_unhealthy: {
      value: cdktf.booleanToHclTerraform(struct!.onlyWhenUpstreamUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsFirewallAttackMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsFirewallAttackMitigation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._onlyWhenUpstreamUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyWhenUpstreamUnhealthy = this._onlyWhenUpstreamUnhealthy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsFirewallAttackMitigation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._onlyWhenUpstreamUnhealthy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._onlyWhenUpstreamUnhealthy = value.onlyWhenUpstreamUnhealthy;
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

  // only_when_upstream_unhealthy - computed: true, optional: true, required: false
  private _onlyWhenUpstreamUnhealthy?: boolean | cdktf.IResolvable; 
  public get onlyWhenUpstreamUnhealthy() {
    return this.getBooleanAttribute('only_when_upstream_unhealthy');
  }
  public set onlyWhenUpstreamUnhealthy(value: boolean | cdktf.IResolvable) {
    this._onlyWhenUpstreamUnhealthy = value;
  }
  public resetOnlyWhenUpstreamUnhealthy() {
    this._onlyWhenUpstreamUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyWhenUpstreamUnhealthyInput() {
    return this._onlyWhenUpstreamUnhealthy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall cloudflare_dns_firewall}
*/
export class DnsFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsFirewall to import
  * @param importFromId The id of the existing DnsFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/dns_firewall cloudflare_dns_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: DnsFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_firewall',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
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
    this._attackMitigation.internalValue = config.attackMitigation;
    this._deprecateAnyRequests = config.deprecateAnyRequests;
    this._ecsFallback = config.ecsFallback;
    this._maximumCacheTtl = config.maximumCacheTtl;
    this._minimumCacheTtl = config.minimumCacheTtl;
    this._name = config.name;
    this._negativeCacheTtl = config.negativeCacheTtl;
    this._ratelimit = config.ratelimit;
    this._retries = config.retries;
    this._upstreamIps = config.upstreamIps;
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

  // attack_mitigation - computed: true, optional: true, required: false
  private _attackMitigation = new DnsFirewallAttackMitigationOutputReference(this, "attack_mitigation");
  public get attackMitigation() {
    return this._attackMitigation;
  }
  public putAttackMitigation(value: DnsFirewallAttackMitigation) {
    this._attackMitigation.internalValue = value;
  }
  public resetAttackMitigation() {
    this._attackMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackMitigationInput() {
    return this._attackMitigation.internalValue;
  }

  // deprecate_any_requests - computed: false, optional: true, required: false
  private _deprecateAnyRequests?: boolean | cdktf.IResolvable; 
  public get deprecateAnyRequests() {
    return this.getBooleanAttribute('deprecate_any_requests');
  }
  public set deprecateAnyRequests(value: boolean | cdktf.IResolvable) {
    this._deprecateAnyRequests = value;
  }
  public resetDeprecateAnyRequests() {
    this._deprecateAnyRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecateAnyRequestsInput() {
    return this._deprecateAnyRequests;
  }

  // dns_firewall_ips - computed: true, optional: false, required: false
  public get dnsFirewallIps() {
    return this.getListAttribute('dns_firewall_ips');
  }

  // ecs_fallback - computed: false, optional: true, required: false
  private _ecsFallback?: boolean | cdktf.IResolvable; 
  public get ecsFallback() {
    return this.getBooleanAttribute('ecs_fallback');
  }
  public set ecsFallback(value: boolean | cdktf.IResolvable) {
    this._ecsFallback = value;
  }
  public resetEcsFallback() {
    this._ecsFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsFallbackInput() {
    return this._ecsFallback;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_cache_ttl - computed: true, optional: true, required: false
  private _maximumCacheTtl?: number; 
  public get maximumCacheTtl() {
    return this.getNumberAttribute('maximum_cache_ttl');
  }
  public set maximumCacheTtl(value: number) {
    this._maximumCacheTtl = value;
  }
  public resetMaximumCacheTtl() {
    this._maximumCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCacheTtlInput() {
    return this._maximumCacheTtl;
  }

  // minimum_cache_ttl - computed: true, optional: true, required: false
  private _minimumCacheTtl?: number; 
  public get minimumCacheTtl() {
    return this.getNumberAttribute('minimum_cache_ttl');
  }
  public set minimumCacheTtl(value: number) {
    this._minimumCacheTtl = value;
  }
  public resetMinimumCacheTtl() {
    this._minimumCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCacheTtlInput() {
    return this._minimumCacheTtl;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // negative_cache_ttl - computed: false, optional: true, required: false
  private _negativeCacheTtl?: number; 
  public get negativeCacheTtl() {
    return this.getNumberAttribute('negative_cache_ttl');
  }
  public set negativeCacheTtl(value: number) {
    this._negativeCacheTtl = value;
  }
  public resetNegativeCacheTtl() {
    this._negativeCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCacheTtlInput() {
    return this._negativeCacheTtl;
  }

  // ratelimit - computed: false, optional: true, required: false
  private _ratelimit?: number; 
  public get ratelimit() {
    return this.getNumberAttribute('ratelimit');
  }
  public set ratelimit(value: number) {
    this._ratelimit = value;
  }
  public resetRatelimit() {
    this._ratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratelimitInput() {
    return this._ratelimit;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // upstream_ips - computed: false, optional: false, required: true
  private _upstreamIps?: string[]; 
  public get upstreamIps() {
    return this.getListAttribute('upstream_ips');
  }
  public set upstreamIps(value: string[]) {
    this._upstreamIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamIpsInput() {
    return this._upstreamIps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      attack_mitigation: dnsFirewallAttackMitigationToTerraform(this._attackMitigation.internalValue),
      deprecate_any_requests: cdktf.booleanToTerraform(this._deprecateAnyRequests),
      ecs_fallback: cdktf.booleanToTerraform(this._ecsFallback),
      maximum_cache_ttl: cdktf.numberToTerraform(this._maximumCacheTtl),
      minimum_cache_ttl: cdktf.numberToTerraform(this._minimumCacheTtl),
      name: cdktf.stringToTerraform(this._name),
      negative_cache_ttl: cdktf.numberToTerraform(this._negativeCacheTtl),
      ratelimit: cdktf.numberToTerraform(this._ratelimit),
      retries: cdktf.numberToTerraform(this._retries),
      upstream_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._upstreamIps),
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
      attack_mitigation: {
        value: dnsFirewallAttackMitigationToHclTerraform(this._attackMitigation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsFirewallAttackMitigation",
      },
      deprecate_any_requests: {
        value: cdktf.booleanToHclTerraform(this._deprecateAnyRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ecs_fallback: {
        value: cdktf.booleanToHclTerraform(this._ecsFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._maximumCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._minimumCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negative_cache_ttl: {
        value: cdktf.numberToHclTerraform(this._negativeCacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ratelimit: {
        value: cdktf.numberToHclTerraform(this._ratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upstream_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._upstreamIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
