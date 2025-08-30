/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudforceOneRequestPriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority#account_id CloudforceOneRequestPriority#account_id}
  */
  readonly accountId: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority#labels CloudforceOneRequestPriority#labels}
  */
  readonly labels: string[];
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority#priority CloudforceOneRequestPriority#priority}
  */
  readonly priority: number;
  /**
  * Requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority#requirement CloudforceOneRequestPriority#requirement}
  */
  readonly requirement: string;
  /**
  * The CISA defined Traffic Light Protocol (TLP).
  * Available values: "clear", "amber", "amber-strict", "green", "red".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority#tlp CloudforceOneRequestPriority#tlp}
  */
  readonly tlp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}
*/
export class CloudforceOneRequestPriority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_cloudforce_one_request_priority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudforceOneRequestPriority to import
  * @param importFromId The id of the existing CloudforceOneRequestPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudforceOneRequestPriority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_priority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudforceOneRequestPriorityConfig
  */
  public constructor(scope: Construct, id: string, config: CloudforceOneRequestPriorityConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_cloudforce_one_request_priority',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.9.0',
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
    this._labels = config.labels;
    this._priority = config.priority;
    this._requirement = config.requirement;
    this._tlp = config.tlp;
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

  // completed - computed: true, optional: false, required: false
  public get completed() {
    return this.getStringAttribute('completed');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // message_tokens - computed: true, optional: false, required: false
  public get messageTokens() {
    return this.getNumberAttribute('message_tokens');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // readable_id - computed: true, optional: false, required: false
  public get readableId() {
    return this.getStringAttribute('readable_id');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }

  // requirement - computed: false, optional: false, required: true
  private _requirement?: string; 
  public get requirement() {
    return this.getStringAttribute('requirement');
  }
  public set requirement(value: string) {
    this._requirement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementInput() {
    return this._requirement;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // tlp - computed: false, optional: false, required: true
  private _tlp?: string; 
  public get tlp() {
    return this.getStringAttribute('tlp');
  }
  public set tlp(value: string) {
    this._tlp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlpInput() {
    return this._tlp;
  }

  // tokens - computed: true, optional: false, required: false
  public get tokens() {
    return this.getNumberAttribute('tokens');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      priority: cdktf.numberToTerraform(this._priority),
      requirement: cdktf.stringToTerraform(this._requirement),
      tlp: cdktf.stringToTerraform(this._tlp),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requirement: {
        value: cdktf.stringToHclTerraform(this._requirement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tlp: {
        value: cdktf.stringToHclTerraform(this._tlp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
