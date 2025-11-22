# `dataCloudflareMagicWanStaticRoute` Submodule <a name="`dataCloudflareMagicWanStaticRoute` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanStaticRoute <a name="DataCloudflareMagicWanStaticRoute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_static_route cloudflare_magic_wan_static_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute(
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
  route_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.routeId">route_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_static_route#account_id DataCloudflareMagicWanStaticRoute#account_id}

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.Initializer.parameter.routeId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_static_route#route_id DataCloudflareMagicWanStaticRoute#route_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareMagicWanStaticRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareMagicWanStaticRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareMagicWanStaticRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareMagicWanStaticRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_static_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanStaticRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.route">route</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference">DataCloudflareMagicWanStaticRouteRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeIdInput">route_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeId">route_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.route"></a>

```python
route: DataCloudflareMagicWanStaticRouteRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference">DataCloudflareMagicWanStaticRouteRouteOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `route_id_input`<sup>Optional</sup> <a name="route_id_input" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeIdInput"></a>

```python
route_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.routeId"></a>

```python
route_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanStaticRouteConfig <a name="DataCloudflareMagicWanStaticRouteConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  route_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.routeId">route_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_static_route#account_id DataCloudflareMagicWanStaticRoute#account_id}

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteConfig.property.routeId"></a>

```python
route_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_wan_static_route#route_id DataCloudflareMagicWanStaticRoute#route_id}

---

### DataCloudflareMagicWanStaticRouteRoute <a name="DataCloudflareMagicWanStaticRouteRoute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute()
```


### DataCloudflareMagicWanStaticRouteRouteScope <a name="DataCloudflareMagicWanStaticRouteRouteScope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanStaticRouteRouteOutputReference <a name="DataCloudflareMagicWanStaticRouteRouteOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.nexthop">nexthop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference">DataCloudflareMagicWanStaticRouteRouteScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute">DataCloudflareMagicWanStaticRouteRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.scope"></a>

```python
scope: DataCloudflareMagicWanStaticRouteRouteScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference">DataCloudflareMagicWanStaticRouteRouteScopeOutputReference</a>

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanStaticRouteRoute
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRoute">DataCloudflareMagicWanStaticRouteRoute</a>

---


### DataCloudflareMagicWanStaticRouteRouteScopeOutputReference <a name="DataCloudflareMagicWanStaticRouteRouteScopeOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_magic_wan_static_route

dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope">DataCloudflareMagicWanStaticRouteRouteScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colo_names`<sup>Required</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions`<sup>Required</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScopeOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareMagicWanStaticRouteRouteScope
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicWanStaticRoute.DataCloudflareMagicWanStaticRouteRouteScope">DataCloudflareMagicWanStaticRouteRouteScope</a>

---



