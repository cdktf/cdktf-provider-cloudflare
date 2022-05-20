// https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FallbackDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain#account_id FallbackDomain#account_id}
  */
  readonly accountId: string;
  /**
  * domains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain#domains FallbackDomain#domains}
  */
  readonly domains: FallbackDomainDomains[] | cdktf.IResolvable;
}
export interface FallbackDomainDomains {
  /**
  * A description of the fallback domain, displayed in the client UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain#description FallbackDomain#description}
  */
  readonly description?: string;
  /**
  * A list of IP addresses to handle domain resolution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain#dns_server FallbackDomain#dns_server}
  */
  readonly dnsServer?: string[];
  /**
  * The domain suffix to match when resolving locally.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain#suffix FallbackDomain#suffix}
  */
  readonly suffix?: string;
}

export function fallbackDomainDomainsToTerraform(struct?: FallbackDomainDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dns_server: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServer),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain cloudflare_fallback_domain}
*/
export class FallbackDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_fallback_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/fallback_domain cloudflare_fallback_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FallbackDomainConfig
  */
  public constructor(scope: Construct, id: string, config: FallbackDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_fallback_domain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._domains = config.domains;
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: FallbackDomainDomains[] | cdktf.IResolvable; 
  public get domains() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('domains');
  }
  public set domains(value: FallbackDomainDomains[] | cdktf.IResolvable) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      domains: cdktf.listMapper(fallbackDomainDomainsToTerraform)(this._domains),
    };
  }
}
