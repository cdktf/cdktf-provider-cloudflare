# `dataCloudflareZeroTrustTunnelWarpConnector` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnector` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnector <a name="DataCloudflareZeroTrustTunnelWarpConnector" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector(
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
  filter: DataCloudflareZeroTrustTunnelWarpConnectorFilter = None,
  tunnel_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#filter DataCloudflareZeroTrustTunnelWarpConnector#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#account_id DataCloudflareZeroTrustTunnelWarpConnector#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#filter DataCloudflareZeroTrustTunnelWarpConnector#filter}.

---

##### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.Initializer.parameter.tunnelId"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#tunnel_id DataCloudflareZeroTrustTunnelWarpConnector#tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.resetTunnelId">reset_tunnel_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter"></a>

```python
def put_filter(
  exclude_prefix: str = None,
  existed_at: str = None,
  include_prefix: str = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
  name: str = None,
  status: str = None,
  uuid: str = None,
  was_active_at: str = None,
  was_inactive_at: str = None
) -> None
```

###### `exclude_prefix`<sup>Optional</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.excludePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnector#exclude_prefix}.

---

###### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.existedAt"></a>

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#existed_at DataCloudflareZeroTrustTunnelWarpConnector#existed_at}

---

###### `include_prefix`<sup>Optional</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.includePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#include_prefix DataCloudflareZeroTrustTunnelWarpConnector#include_prefix}.

---

###### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.isDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#is_deleted DataCloudflareZeroTrustTunnelWarpConnector#is_deleted}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.name"></a>

- *Type:* str

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#name DataCloudflareZeroTrustTunnelWarpConnector#name}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.status"></a>

- *Type:* str

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#status DataCloudflareZeroTrustTunnelWarpConnector#status}

---

###### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.uuid"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#uuid DataCloudflareZeroTrustTunnelWarpConnector#uuid}

---

###### `was_active_at`<sup>Optional</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.wasActiveAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_active_at DataCloudflareZeroTrustTunnelWarpConnector#was_active_at}.

---

###### `was_inactive_at`<sup>Optional</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.putFilter.parameter.wasInactiveAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnector#was_inactive_at}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_tunnel_id` <a name="reset_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.resetTunnelId"></a>

```python
def reset_tunnel_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustTunnelWarpConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.configSrc">config_src</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.connsActiveAt">conns_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.connsInactiveAt">conns_inactive_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.remoteConfig">remote_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tunType">tun_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `config_src`<sup>Required</sup> <a name="config_src" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.configSrc"></a>

```python
config_src: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.connections"></a>

```python
connections: DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList</a>

---

##### `conns_active_at`<sup>Required</sup> <a name="conns_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.connsActiveAt"></a>

```python
conns_active_at: str
```

- *Type:* str

---

##### `conns_inactive_at`<sup>Required</sup> <a name="conns_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.connsInactiveAt"></a>

```python
conns_inactive_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.filter"></a>

```python
filter: DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_config`<sup>Required</sup> <a name="remote_config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.remoteConfig"></a>

```python
remote_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tun_type`<sup>Required</sup> <a name="tun_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tunType"></a>

```python
tun_type: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareZeroTrustTunnelWarpConnectorFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a>]

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  filter: DataCloudflareZeroTrustTunnelWarpConnectorFilter = None,
  tunnel_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#filter DataCloudflareZeroTrustTunnelWarpConnector#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | UUID of the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#account_id DataCloudflareZeroTrustTunnelWarpConnector#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustTunnelWarpConnectorFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#filter DataCloudflareZeroTrustTunnelWarpConnector#filter}.

---

##### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#tunnel_id DataCloudflareZeroTrustTunnelWarpConnector#tunnel_id}

---

### DataCloudflareZeroTrustTunnelWarpConnectorConnections <a name="DataCloudflareZeroTrustTunnelWarpConnectorConnections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnections()
```


### DataCloudflareZeroTrustTunnelWarpConnectorFilter <a name="DataCloudflareZeroTrustTunnelWarpConnectorFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter(
  exclude_prefix: str = None,
  existed_at: str = None,
  include_prefix: str = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
  name: str = None,
  status: str = None,
  uuid: str = None,
  was_active_at: str = None,
  was_inactive_at: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.excludePrefix">exclude_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnector#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.includePrefix">include_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#include_prefix DataCloudflareZeroTrustTunnelWarpConnector#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.name">name</a></code> | <code>str</code> | A user-friendly name for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.status">status</a></code> | <code>str</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.uuid">uuid</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.wasActiveAt">was_active_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_active_at DataCloudflareZeroTrustTunnelWarpConnector#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnector#was_inactive_at}. |

---

##### `exclude_prefix`<sup>Optional</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.excludePrefix"></a>

```python
exclude_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnector#exclude_prefix}.

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#existed_at DataCloudflareZeroTrustTunnelWarpConnector#existed_at}

---

##### `include_prefix`<sup>Optional</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.includePrefix"></a>

```python
include_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#include_prefix DataCloudflareZeroTrustTunnelWarpConnector#include_prefix}.

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#is_deleted DataCloudflareZeroTrustTunnelWarpConnector#is_deleted}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.name"></a>

```python
name: str
```

- *Type:* str

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#name DataCloudflareZeroTrustTunnelWarpConnector#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#status DataCloudflareZeroTrustTunnelWarpConnector#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#uuid DataCloudflareZeroTrustTunnelWarpConnector#uuid}

---

##### `was_active_at`<sup>Optional</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.wasActiveAt"></a>

```python
was_active_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_active_at DataCloudflareZeroTrustTunnelWarpConnector#was_active_at}.

---

##### `was_inactive_at`<sup>Optional</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter.property.wasInactiveAt"></a>

```python
was_inactive_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/zero_trust_tunnel_warp_connector#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnector#was_inactive_at}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName">colo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect">is_pending_reconnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt">opened_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp">origin_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnections">DataCloudflareZeroTrustTunnelWarpConnectorConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `colo_name`<sup>Required</sup> <a name="colo_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName"></a>

```python
colo_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_pending_reconnect`<sup>Required</sup> <a name="is_pending_reconnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect"></a>

```python
is_pending_reconnect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `opened_at`<sup>Required</sup> <a name="opened_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt"></a>

```python
opened_at: str
```

- *Type:* str

---

##### `origin_ip`<sup>Required</sup> <a name="origin_ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp"></a>

```python
origin_ip: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelWarpConnectorConnections
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorConnections">DataCloudflareZeroTrustTunnelWarpConnectorConnections</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connector

dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetExcludePrefix">reset_exclude_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetExistedAt">reset_existed_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetIncludePrefix">reset_include_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetIsDeleted">reset_is_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetWasActiveAt">reset_was_active_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetWasInactiveAt">reset_was_inactive_at</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_prefix` <a name="reset_exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetExcludePrefix"></a>

```python
def reset_exclude_prefix() -> None
```

##### `reset_existed_at` <a name="reset_existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetExistedAt"></a>

```python
def reset_existed_at() -> None
```

##### `reset_include_prefix` <a name="reset_include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetIncludePrefix"></a>

```python
def reset_include_prefix() -> None
```

##### `reset_is_deleted` <a name="reset_is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetIsDeleted"></a>

```python
def reset_is_deleted() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_was_active_at` <a name="reset_was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetWasActiveAt"></a>

```python
def reset_was_active_at() -> None
```

##### `reset_was_inactive_at` <a name="reset_was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.resetWasInactiveAt"></a>

```python
def reset_was_inactive_at() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.excludePrefixInput">exclude_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.existedAtInput">existed_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.includePrefixInput">include_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.isDeletedInput">is_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasActiveAtInput">was_active_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasInactiveAtInput">was_inactive_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.excludePrefix">exclude_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.existedAt">existed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.includePrefix">include_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasActiveAt">was_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_prefix_input`<sup>Optional</sup> <a name="exclude_prefix_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.excludePrefixInput"></a>

```python
exclude_prefix_input: str
```

- *Type:* str

---

##### `existed_at_input`<sup>Optional</sup> <a name="existed_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.existedAtInput"></a>

```python
existed_at_input: str
```

- *Type:* str

---

##### `include_prefix_input`<sup>Optional</sup> <a name="include_prefix_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.includePrefixInput"></a>

```python
include_prefix_input: str
```

- *Type:* str

---

##### `is_deleted_input`<sup>Optional</sup> <a name="is_deleted_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.isDeletedInput"></a>

```python
is_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `was_active_at_input`<sup>Optional</sup> <a name="was_active_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasActiveAtInput"></a>

```python
was_active_at_input: str
```

- *Type:* str

---

##### `was_inactive_at_input`<sup>Optional</sup> <a name="was_inactive_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasInactiveAtInput"></a>

```python
was_inactive_at_input: str
```

- *Type:* str

---

##### `exclude_prefix`<sup>Required</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.excludePrefix"></a>

```python
exclude_prefix: str
```

- *Type:* str

---

##### `existed_at`<sup>Required</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

---

##### `include_prefix`<sup>Required</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.includePrefix"></a>

```python
include_prefix: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `was_active_at`<sup>Required</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasActiveAt"></a>

```python
was_active_at: str
```

- *Type:* str

---

##### `was_inactive_at`<sup>Required</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.wasInactiveAt"></a>

```python
was_inactive_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareZeroTrustTunnelWarpConnectorFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnector.DataCloudflareZeroTrustTunnelWarpConnectorFilter">DataCloudflareZeroTrustTunnelWarpConnectorFilter</a>]

---



