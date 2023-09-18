// https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Web3HostnameConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of the hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname#description Web3Hostname#description}
  */
  readonly description?: string;
  /**
  * DNSLink value used if the target is ipfs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname#dnslink Web3Hostname#dnslink}
  */
  readonly dnslink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname#id Web3Hostname#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The hostname that will point to the target gateway via CNAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname#name Web3Hostname#name}
  */
  readonly name: string;
  /**
  * Target gateway of the hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname#target Web3Hostname#target}
  */
  readonly target: string;
  /**
  * The zone identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname#zone_id Web3Hostname#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname cloudflare_web3_hostname}
*/
export class Web3Hostname extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_web3_hostname";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.14.0/docs/resources/web3_hostname cloudflare_web3_hostname} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Web3HostnameConfig
  */
  public constructor(scope: Construct, id: string, config: Web3HostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_web3_hostname',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.14.0',
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
    this._description = config.description;
    this._dnslink = config.dnslink;
    this._id = config.id;
    this._name = config.name;
    this._target = config.target;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // dnslink - computed: false, optional: true, required: false
  private _dnslink?: string; 
  public get dnslink() {
    return this.getStringAttribute('dnslink');
  }
  public set dnslink(value: string) {
    this._dnslink = value;
  }
  public resetDnslink() {
    this._dnslink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnslinkInput() {
    return this._dnslink;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
      description: cdktf.stringToTerraform(this._description),
      dnslink: cdktf.stringToTerraform(this._dnslink),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      target: cdktf.stringToTerraform(this._target),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
