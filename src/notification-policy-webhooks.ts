// https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyWebhooksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks#account_id NotificationPolicyWebhooks#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks#id NotificationPolicyWebhooks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks#name NotificationPolicyWebhooks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks#secret NotificationPolicyWebhooks#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks#url NotificationPolicyWebhooks#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks cloudflare_notification_policy_webhooks}
*/
export class NotificationPolicyWebhooks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_notification_policy_webhooks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/notification_policy_webhooks cloudflare_notification_policy_webhooks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyWebhooksConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyWebhooksConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_notification_policy_webhooks',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.20.0',
        providerVersionConstraint: '~> 3.14'
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
    this._id = config.id;
    this._name = config.name;
    this._secret = config.secret;
    this._url = config.url;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // last_failure - computed: true, optional: false, required: false
  public get lastFailure() {
    return this.getStringAttribute('last_failure');
  }

  // last_success - computed: true, optional: false, required: false
  public get lastSuccess() {
    return this.getStringAttribute('last_success');
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
