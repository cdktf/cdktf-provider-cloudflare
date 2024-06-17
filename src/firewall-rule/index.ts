/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to apply to a matched request. Available values: `block`, `challenge`, `allow`, `js_challenge`, `managed_challenge`, `log`, `bypass`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#action FirewallRule#action}
  */
  readonly action: string;
  /**
  * A description of the rule to help identify it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#description FirewallRule#description}
  */
  readonly description?: string;
  /**
  * The identifier of the Filter to use for determining if the Firewall Rule should be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#filter_id FirewallRule#filter_id}
  */
  readonly filterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#id FirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this filter based firewall rule is currently paused.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#paused FirewallRule#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * The priority of the rule to allow control of processing order. A lower number indicates high priority. If not provided, any rules with a priority will be sequenced before those without.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#priority FirewallRule#priority}
  */
  readonly priority?: number;
  /**
  * List of products to bypass for a request when the bypass action is used. Available values: `zoneLockdown`, `uaBlock`, `bic`, `hot`, `securityLevel`, `rateLimit`, `waf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#products FirewallRule#products}
  */
  readonly products?: string[];
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#zone_id FirewallRule#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule cloudflare_firewall_rule}
*/
export class FirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallRule to import
  * @param importFromId The id of the existing FirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/firewall_rule cloudflare_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.35.0',
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
    this._action = config.action;
    this._description = config.description;
    this._filterId = config.filterId;
    this._id = config.id;
    this._paused = config.paused;
    this._priority = config.priority;
    this._products = config.products;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // filter_id - computed: false, optional: false, required: true
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
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

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // products - computed: false, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return cdktf.Fn.tolist(this.getListAttribute('products'));
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      filter_id: cdktf.stringToTerraform(this._filterId),
      id: cdktf.stringToTerraform(this._id),
      paused: cdktf.booleanToTerraform(this._paused),
      priority: cdktf.numberToTerraform(this._priority),
      products: cdktf.listMapper(cdktf.stringToTerraform, false)(this._products),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_id: {
        value: cdktf.stringToHclTerraform(this._filterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      products: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._products),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
