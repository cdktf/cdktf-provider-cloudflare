// https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareDnsFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_firewall#account_id DataCloudflareDnsFirewall#account_id}
  */
  readonly accountId: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_firewall#dns_firewall_id DataCloudflareDnsFirewall#dns_firewall_id}
  */
  readonly dnsFirewallId?: string;
}
export interface DataCloudflareDnsFirewallAttackMitigation {
}

export function dataCloudflareDnsFirewallAttackMitigationToTerraform(struct?: DataCloudflareDnsFirewallAttackMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsFirewallAttackMitigationToHclTerraform(struct?: DataCloudflareDnsFirewallAttackMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsFirewallAttackMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsFirewallAttackMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsFirewallAttackMitigation | undefined) {
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

  // only_when_upstream_unhealthy - computed: true, optional: false, required: false
  public get onlyWhenUpstreamUnhealthy() {
    return this.getBooleanAttribute('only_when_upstream_unhealthy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_firewall cloudflare_dns_firewall}
*/
export class DataCloudflareDnsFirewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareDnsFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDnsFirewall to import
  * @param importFromId The id of the existing DataCloudflareDnsFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDnsFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/dns_firewall cloudflare_dns_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDnsFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDnsFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_firewall',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.5.0',
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
    this._dnsFirewallId = config.dnsFirewallId;
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

  // attack_mitigation - computed: true, optional: false, required: false
  private _attackMitigation = new DataCloudflareDnsFirewallAttackMitigationOutputReference(this, "attack_mitigation");
  public get attackMitigation() {
    return this._attackMitigation;
  }

  // deprecate_any_requests - computed: true, optional: false, required: false
  public get deprecateAnyRequests() {
    return this.getBooleanAttribute('deprecate_any_requests');
  }

  // dns_firewall_id - computed: false, optional: true, required: false
  private _dnsFirewallId?: string; 
  public get dnsFirewallId() {
    return this.getStringAttribute('dns_firewall_id');
  }
  public set dnsFirewallId(value: string) {
    this._dnsFirewallId = value;
  }
  public resetDnsFirewallId() {
    this._dnsFirewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFirewallIdInput() {
    return this._dnsFirewallId;
  }

  // dns_firewall_ips - computed: true, optional: false, required: false
  public get dnsFirewallIps() {
    return this.getListAttribute('dns_firewall_ips');
  }

  // ecs_fallback - computed: true, optional: false, required: false
  public get ecsFallback() {
    return this.getBooleanAttribute('ecs_fallback');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_cache_ttl - computed: true, optional: false, required: false
  public get maximumCacheTtl() {
    return this.getNumberAttribute('maximum_cache_ttl');
  }

  // minimum_cache_ttl - computed: true, optional: false, required: false
  public get minimumCacheTtl() {
    return this.getNumberAttribute('minimum_cache_ttl');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negative_cache_ttl - computed: true, optional: false, required: false
  public get negativeCacheTtl() {
    return this.getNumberAttribute('negative_cache_ttl');
  }

  // ratelimit - computed: true, optional: false, required: false
  public get ratelimit() {
    return this.getNumberAttribute('ratelimit');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // upstream_ips - computed: true, optional: false, required: false
  public get upstreamIps() {
    return this.getListAttribute('upstream_ips');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      dns_firewall_id: cdktf.stringToTerraform(this._dnsFirewallId),
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
      dns_firewall_id: {
        value: cdktf.stringToHclTerraform(this._dnsFirewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
