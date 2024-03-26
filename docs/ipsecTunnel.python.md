# `ipsecTunnel` Submodule <a name="`ipsecTunnel` Submodule" id="@cdktf/provider-cloudflare.ipsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IpsecTunnel <a name="IpsecTunnel" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel cloudflare_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ipsec_tunnel

ipsecTunnel.IpsecTunnel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloudflare_endpoint: str,
  customer_endpoint: str,
  interface_address: str,
  name: str,
  account_id: str = None,
  allow_null_cipher: typing.Union[bool, IResolvable] = None,
  description: str = None,
  fqdn_id: str = None,
  health_check_enabled: typing.Union[bool, IResolvable] = None,
  health_check_target: str = None,
  health_check_type: str = None,
  hex_id: str = None,
  id: str = None,
  psk: str = None,
  remote_id: str = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.interfaceAddress">interface_address</a></code> | <code>str</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.allowNullCipher">allow_null_cipher</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.fqdnId">fqdn_id</a></code> | <code>str</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckEnabled">health_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckTarget">health_check_target</a></code> | <code>str</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckType">health_check_type</a></code> | <code>str</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.hexId">hex_id</a></code> | <code>str</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.psk">psk</a></code> | <code>str</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.remoteId">remote_id</a></code> | <code>str</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.cloudflareEndpoint"></a>

- *Type:* str

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.customerEndpoint"></a>

- *Type:* str

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.interfaceAddress"></a>

- *Type:* str

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#interface_address IpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.name"></a>

- *Type:* str

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#name IpsecTunnel#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#account_id IpsecTunnel#account_id}

---

##### `allow_null_cipher`<sup>Optional</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.allowNullCipher"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#description IpsecTunnel#description}

---

##### `fqdn_id`<sup>Optional</sup> <a name="fqdn_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.fqdnId"></a>

- *Type:* str

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}

---

##### `health_check_enabled`<sup>Optional</sup> <a name="health_check_enabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}

---

##### `health_check_target`<sup>Optional</sup> <a name="health_check_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckTarget"></a>

- *Type:* str

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}

---

##### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.healthCheckType"></a>

- *Type:* str

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}

---

##### `hex_id`<sup>Optional</sup> <a name="hex_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.hexId"></a>

- *Type:* str

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#hex_id IpsecTunnel#hex_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.psk"></a>

- *Type:* str

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#psk IpsecTunnel#psk}

---

##### `remote_id`<sup>Optional</sup> <a name="remote_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.remoteId"></a>

- *Type:* str

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#remote_id IpsecTunnel#remote_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.userId"></a>

- *Type:* str

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#user_id IpsecTunnel#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher">reset_allow_null_cipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId">reset_fqdn_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled">reset_health_check_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget">reset_health_check_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType">reset_health_check_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId">reset_hex_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk">reset_psk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId">reset_remote_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_allow_null_cipher` <a name="reset_allow_null_cipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher"></a>

```python
def reset_allow_null_cipher() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fqdn_id` <a name="reset_fqdn_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId"></a>

```python
def reset_fqdn_id() -> None
```

##### `reset_health_check_enabled` <a name="reset_health_check_enabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled"></a>

```python
def reset_health_check_enabled() -> None
```

##### `reset_health_check_target` <a name="reset_health_check_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget"></a>

```python
def reset_health_check_target() -> None
```

##### `reset_health_check_type` <a name="reset_health_check_type" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType"></a>

```python
def reset_health_check_type() -> None
```

##### `reset_hex_id` <a name="reset_hex_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId"></a>

```python
def reset_hex_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_psk` <a name="reset_psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk"></a>

```python
def reset_psk() -> None
```

##### `reset_remote_id` <a name="reset_remote_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId"></a>

```python
def reset_remote_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import ipsec_tunnel

ipsecTunnel.IpsecTunnel.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import ipsec_tunnel

ipsecTunnel.IpsecTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import ipsec_tunnel

ipsecTunnel.IpsecTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import ipsec_tunnel

ipsecTunnel.IpsecTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IpsecTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput">allow_null_cipher_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput">cloudflare_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput">customer_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput">fqdn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput">health_check_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput">health_check_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput">health_check_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput">hex_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput">interface_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput">psk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput">remote_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher">allow_null_cipher</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId">fqdn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled">health_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget">health_check_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType">health_check_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId">hex_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk">psk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId">remote_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `allow_null_cipher_input`<sup>Optional</sup> <a name="allow_null_cipher_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput"></a>

```python
allow_null_cipher_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudflare_endpoint_input`<sup>Optional</sup> <a name="cloudflare_endpoint_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput"></a>

```python
cloudflare_endpoint_input: str
```

- *Type:* str

---

##### `customer_endpoint_input`<sup>Optional</sup> <a name="customer_endpoint_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput"></a>

```python
customer_endpoint_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fqdn_id_input`<sup>Optional</sup> <a name="fqdn_id_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput"></a>

```python
fqdn_id_input: str
```

- *Type:* str

---

##### `health_check_enabled_input`<sup>Optional</sup> <a name="health_check_enabled_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput"></a>

```python
health_check_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_target_input`<sup>Optional</sup> <a name="health_check_target_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput"></a>

```python
health_check_target_input: str
```

- *Type:* str

---

##### `health_check_type_input`<sup>Optional</sup> <a name="health_check_type_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput"></a>

```python
health_check_type_input: str
```

- *Type:* str

---

##### `hex_id_input`<sup>Optional</sup> <a name="hex_id_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput"></a>

```python
hex_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interface_address_input`<sup>Optional</sup> <a name="interface_address_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput"></a>

```python
interface_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `psk_input`<sup>Optional</sup> <a name="psk_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput"></a>

```python
psk_input: str
```

- *Type:* str

---

##### `remote_id_input`<sup>Optional</sup> <a name="remote_id_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput"></a>

```python
remote_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `allow_null_cipher`<sup>Required</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher"></a>

```python
allow_null_cipher: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `fqdn_id`<sup>Required</sup> <a name="fqdn_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId"></a>

```python
fqdn_id: str
```

- *Type:* str

---

##### `health_check_enabled`<sup>Required</sup> <a name="health_check_enabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled"></a>

```python
health_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_target`<sup>Required</sup> <a name="health_check_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget"></a>

```python
health_check_target: str
```

- *Type:* str

---

##### `health_check_type`<sup>Required</sup> <a name="health_check_type" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

---

##### `hex_id`<sup>Required</sup> <a name="hex_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId"></a>

```python
hex_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk"></a>

```python
psk: str
```

- *Type:* str

---

##### `remote_id`<sup>Required</sup> <a name="remote_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId"></a>

```python
remote_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IpsecTunnelConfig <a name="IpsecTunnelConfig" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ipsec_tunnel

ipsecTunnel.IpsecTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloudflare_endpoint: str,
  customer_endpoint: str,
  interface_address: str,
  name: str,
  account_id: str = None,
  allow_null_cipher: typing.Union[bool, IResolvable] = None,
  description: str = None,
  fqdn_id: str = None,
  health_check_enabled: typing.Union[bool, IResolvable] = None,
  health_check_target: str = None,
  health_check_type: str = None,
  hex_id: str = None,
  id: str = None,
  psk: str = None,
  remote_id: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress">interface_address</a></code> | <code>str</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name">name</a></code> | <code>str</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher">allow_null_cipher</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description">description</a></code> | <code>str</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId">fqdn_id</a></code> | <code>str</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled">health_check_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget">health_check_target</a></code> | <code>str</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType">health_check_type</a></code> | <code>str</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId">hex_id</a></code> | <code>str</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk">psk</a></code> | <code>str</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId">remote_id</a></code> | <code>str</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId">user_id</a></code> | <code>str</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#interface_address IpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#name IpsecTunnel#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#account_id IpsecTunnel#account_id}

---

##### `allow_null_cipher`<sup>Optional</sup> <a name="allow_null_cipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher"></a>

```python
allow_null_cipher: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#description IpsecTunnel#description}

---

##### `fqdn_id`<sup>Optional</sup> <a name="fqdn_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId"></a>

```python
fqdn_id: str
```

- *Type:* str

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}

---

##### `health_check_enabled`<sup>Optional</sup> <a name="health_check_enabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled"></a>

```python
health_check_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}

---

##### `health_check_target`<sup>Optional</sup> <a name="health_check_target" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget"></a>

```python
health_check_target: str
```

- *Type:* str

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}

---

##### `health_check_type`<sup>Optional</sup> <a name="health_check_type" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType"></a>

```python
health_check_type: str
```

- *Type:* str

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}

---

##### `hex_id`<sup>Optional</sup> <a name="hex_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId"></a>

```python
hex_id: str
```

- *Type:* str

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#hex_id IpsecTunnel#hex_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk"></a>

```python
psk: str
```

- *Type:* str

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#psk IpsecTunnel#psk}

---

##### `remote_id`<sup>Optional</sup> <a name="remote_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId"></a>

```python
remote_id: str
```

- *Type:* str

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#remote_id IpsecTunnel#remote_id}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.27.0/docs/resources/ipsec_tunnel#user_id IpsecTunnel#user_id}

---



