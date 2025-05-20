# `dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
  max_items: typing.Union[int, float] = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id">id</a></code> | <code>str</code> | UUID of the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted virtual networks. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-friendly name for the virtual network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id"></a>

- *Type:* str

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default}

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted virtual networks.

If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#max_items DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.name"></a>

- *Type:* str

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDeleted">reset_is_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_is_deleted` <a name="reset_is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDeleted"></a>

```python
def reset_is_deleted() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeletedInput">is_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.result"></a>

```python
result: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_deleted_input`<sup>Optional</sup> <a name="is_deleted_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeletedInput"></a>

```python
is_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
  max_items: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.id">id</a></code> | <code>str</code> | UUID of the virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted virtual networks. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.name">name</a></code> | <code>str</code> | A user-friendly name for the virtual network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default}

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted virtual networks.

If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#max_items DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#name}

---

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks

dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.isDefaultNetwork">is_default_network</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default_network`<sup>Required</sup> <a name="is_default_network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.isDefaultNetwork"></a>

```python
is_default_network: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult</a>

---



