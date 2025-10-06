# `dataCloudflareWorkersForPlatformsDispatchNamespaces` Submodule <a name="`dataCloudflareWorkersForPlatformsDispatchNamespaces` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespaces <a name="DataCloudflareWorkersForPlatformsDispatchNamespaces" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/workers_for_platforms_dispatch_namespaces cloudflare_workers_for_platforms_dispatch_namespaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#account_id DataCloudflareWorkersForPlatformsDispatchNamespaces#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#max_items DataCloudflareWorkersForPlatformsDispatchNamespaces#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetMaxItems">reset_max_items</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList">DataCloudflareWorkersForPlatformsDispatchNamespacesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.result"></a>

```python
result: DataCloudflareWorkersForPlatformsDispatchNamespacesResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList">DataCloudflareWorkersForPlatformsDispatchNamespacesResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespacesConfig <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  max_items: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#account_id DataCloudflareWorkersForPlatformsDispatchNamespaces#account_id}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/workers_for_platforms_dispatch_namespaces#max_items DataCloudflareWorkersForPlatformsDispatchNamespaces#max_items}

---

### DataCloudflareWorkersForPlatformsDispatchNamespacesResult <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResult" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespacesResultList <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResultList" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference <a name="DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_workers_for_platforms_dispatch_namespaces

dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.scriptCount">script_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.trustedWorkers">trusted_workers</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult">DataCloudflareWorkersForPlatformsDispatchNamespacesResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `script_count`<sup>Required</sup> <a name="script_count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.scriptCount"></a>

```python
script_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_workers`<sup>Required</sup> <a name="trusted_workers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.trustedWorkers"></a>

```python
trusted_workers: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareWorkersForPlatformsDispatchNamespacesResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespaces.DataCloudflareWorkersForPlatformsDispatchNamespacesResult">DataCloudflareWorkersForPlatformsDispatchNamespacesResult</a>

---



