// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface R2ManagedDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain#account_id R2ManagedDomain#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain#bucket_name R2ManagedDomain#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Whether to enable public bucket access at the r2.dev domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain#enabled R2ManagedDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Jurisdiction of the bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain#jurisdiction R2ManagedDomain#jurisdiction}
  */
  readonly jurisdiction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain cloudflare_r2_managed_domain}
*/
export class R2ManagedDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_r2_managed_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a R2ManagedDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the R2ManagedDomain to import
  * @param importFromId The id of the existing R2ManagedDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the R2ManagedDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_managed_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/r2_managed_domain cloudflare_r2_managed_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options R2ManagedDomainConfig
  */
  public constructor(scope: Construct, id: string, config: R2ManagedDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_r2_managed_domain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.2.0',
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
    this._bucketName = config.bucketName;
    this._enabled = config.enabled;
    this._jurisdiction = config.jurisdiction;
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

  // bucket_id - computed: true, optional: false, required: false
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // jurisdiction - computed: true, optional: true, required: false
  private _jurisdiction?: string; 
  public get jurisdiction() {
    return this.getStringAttribute('jurisdiction');
  }
  public set jurisdiction(value: string) {
    this._jurisdiction = value;
  }
  public resetJurisdiction() {
    this._jurisdiction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jurisdictionInput() {
    return this._jurisdiction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
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
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jurisdiction: {
        value: cdktf.stringToHclTerraform(this._jurisdiction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
