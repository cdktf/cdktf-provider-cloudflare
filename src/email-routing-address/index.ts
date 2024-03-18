// https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailRoutingAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_address#account_id EmailRoutingAddress#account_id}
  */
  readonly accountId: string;
  /**
  * The contact email address of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_address#email EmailRoutingAddress#email}
  */
  readonly email: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_address cloudflare_email_routing_address}
*/
export class EmailRoutingAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_routing_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailRoutingAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailRoutingAddress to import
  * @param importFromId The id of the existing EmailRoutingAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailRoutingAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_routing_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.26.0/docs/resources/email_routing_address cloudflare_email_routing_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailRoutingAddressConfig
  */
  public constructor(scope: Construct, id: string, config: EmailRoutingAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_routing_address',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.26.0',
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
    this._accountId = config.accountId;
    this._email = config.email;
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getStringAttribute('verified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      email: cdktf.stringToTerraform(this._email),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
