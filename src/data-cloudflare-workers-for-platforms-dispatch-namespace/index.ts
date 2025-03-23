// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/workers_for_platforms_dispatch_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWorkersForPlatformsDispatchNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/workers_for_platforms_dispatch_namespace#account_id DataCloudflareWorkersForPlatformsDispatchNamespace#account_id}
  */
  readonly accountId: string;
  /**
  * Name of the Workers for Platforms dispatch namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/workers_for_platforms_dispatch_namespace#dispatch_namespace DataCloudflareWorkersForPlatformsDispatchNamespace#dispatch_namespace}
  */
  readonly dispatchNamespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}
*/
export class DataCloudflareWorkersForPlatformsDispatchNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_workers_for_platforms_dispatch_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespace to import
  * @param importFromId The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_for_platforms_dispatch_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareWorkersForPlatformsDispatchNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareWorkersForPlatformsDispatchNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_workers_for_platforms_dispatch_namespace',
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
    this._dispatchNamespace = config.dispatchNamespace;
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dispatch_namespace - computed: false, optional: true, required: false
  private _dispatchNamespace?: string; 
  public get dispatchNamespace() {
    return this.getStringAttribute('dispatch_namespace');
  }
  public set dispatchNamespace(value: string) {
    this._dispatchNamespace = value;
  }
  public resetDispatchNamespace() {
    this._dispatchNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchNamespaceInput() {
    return this._dispatchNamespace;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // script_count - computed: true, optional: false, required: false
  public get scriptCount() {
    return this.getNumberAttribute('script_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      dispatch_namespace: cdktf.stringToTerraform(this._dispatchNamespace),
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
      dispatch_namespace: {
        value: cdktf.stringToHclTerraform(this._dispatchNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
