// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostnameTlsSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hostname for which the tls settings are set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting#hostname HostnameTlsSetting#hostname}
  */
  readonly hostname?: string;
  /**
  * The TLS Setting name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting#setting_id HostnameTlsSetting#setting_id}
  */
  readonly settingId: string;
  /**
  * The tls setting value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting#value HostnameTlsSetting#value}
  */
  readonly value: { [key: string]: any };
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting#zone_id HostnameTlsSetting#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting}
*/
export class HostnameTlsSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_hostname_tls_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostnameTlsSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostnameTlsSetting to import
  * @param importFromId The id of the existing HostnameTlsSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostnameTlsSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_hostname_tls_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/hostname_tls_setting cloudflare_hostname_tls_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostnameTlsSettingConfig
  */
  public constructor(scope: Construct, id: string, config: HostnameTlsSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_hostname_tls_setting',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
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
    this._hostname = config.hostname;
    this._settingId = config.settingId;
    this._value = config.value;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: any }; 
  public get value() {
    return this.getAnyMapAttribute('value');
  }
  public set value(value: { [key: string]: any }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
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
      hostname: cdktf.stringToTerraform(this._hostname),
      setting_id: cdktf.stringToTerraform(this._settingId),
      value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
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
