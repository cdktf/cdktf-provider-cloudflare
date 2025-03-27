// https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancer_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareLoadBalancerMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancer_monitor#account_id DataCloudflareLoadBalancerMonitor#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancer_monitor#monitor_id DataCloudflareLoadBalancerMonitor#monitor_id}
  */
  readonly monitorId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancer_monitor cloudflare_load_balancer_monitor}
*/
export class DataCloudflareLoadBalancerMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_load_balancer_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareLoadBalancerMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareLoadBalancerMonitor to import
  * @param importFromId The id of the existing DataCloudflareLoadBalancerMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareLoadBalancerMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_load_balancer_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/data-sources/load_balancer_monitor cloudflare_load_balancer_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareLoadBalancerMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareLoadBalancerMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_monitor',
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
    this._monitorId = config.monitorId;
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

  // allow_insecure - computed: true, optional: false, required: false
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }

  // consecutive_down - computed: true, optional: false, required: false
  public get consecutiveDown() {
    return this.getNumberAttribute('consecutive_down');
  }

  // consecutive_up - computed: true, optional: false, required: false
  public get consecutiveUp() {
    return this.getNumberAttribute('consecutive_up');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expected_body - computed: true, optional: false, required: false
  public get expectedBody() {
    return this.getStringAttribute('expected_body');
  }

  // expected_codes - computed: true, optional: false, required: false
  public get expectedCodes() {
    return this.getStringAttribute('expected_codes');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // header - computed: true, optional: false, required: false
  private _header = new cdktf.StringListMap(this, "header");
  public get header() {
    return this._header;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // monitor_id - computed: false, optional: true, required: false
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  public resetMonitorId() {
    this._monitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // probe_zone - computed: true, optional: false, required: false
  public get probeZone() {
    return this.getStringAttribute('probe_zone');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      monitor_id: cdktf.stringToTerraform(this._monitorId),
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
      monitor_id: {
        value: cdktf.stringToHclTerraform(this._monitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
