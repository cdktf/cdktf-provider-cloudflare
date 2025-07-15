# `dataCloudflareSchemaValidationSchemas` Submodule <a name="`dataCloudflareSchemaValidationSchemas` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationSchemas <a name="DataCloudflareSchemaValidationSchemas" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas cloudflare_schema_validation_schemas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  filter: DataCloudflareSchemaValidationSchemasFilter = None,
  omit_source: typing.Union[bool, IResolvable] = None,
  schema_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.omitSource">omit_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.schemaId">schema_id</a></code> | <code>str</code> | UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#zone_id DataCloudflareSchemaValidationSchemas#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}.

---

##### `omit_source`<sup>Optional</sup> <a name="omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.omitSource"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.Initializer.parameter.schemaId"></a>

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#schema_id DataCloudflareSchemaValidationSchemas#schema_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOmitSource">reset_omit_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetSchemaId">reset_schema_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter"></a>

```python
def put_filter(
  omit_source: typing.Union[bool, IResolvable] = None,
  validation_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `omit_source`<sup>Optional</sup> <a name="omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter.parameter.omitSource"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}

---

###### `validation_enabled`<sup>Optional</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.putFilter.parameter.validationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#validation_enabled DataCloudflareSchemaValidationSchemas#validation_enabled}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_omit_source` <a name="reset_omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetOmitSource"></a>

```python
def reset_omit_source() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareSchemaValidationSchemas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareSchemaValidationSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference">DataCloudflareSchemaValidationSchemasFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.validationEnabled">validation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSourceInput">omit_source_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSource">omit_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filter"></a>

```python
filter: DataCloudflareSchemaValidationSchemasFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference">DataCloudflareSchemaValidationSchemasFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `validation_enabled`<sup>Required</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.validationEnabled"></a>

```python
validation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareSchemaValidationSchemasFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>]

---

##### `omit_source_input`<sup>Optional</sup> <a name="omit_source_input" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSourceInput"></a>

```python
omit_source_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `omit_source`<sup>Required</sup> <a name="omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.omitSource"></a>

```python
omit_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationSchemasConfig <a name="DataCloudflareSchemaValidationSchemasConfig" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  filter: DataCloudflareSchemaValidationSchemasFilter = None,
  omit_source: typing.Union[bool, IResolvable] = None,
  schema_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.omitSource">omit_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.schemaId">schema_id</a></code> | <code>str</code> | UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#zone_id DataCloudflareSchemaValidationSchemas#zone_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.filter"></a>

```python
filter: DataCloudflareSchemaValidationSchemasFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#filter DataCloudflareSchemaValidationSchemas#filter}.

---

##### `omit_source`<sup>Optional</sup> <a name="omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.omitSource"></a>

```python
omit_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasConfig.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#schema_id DataCloudflareSchemaValidationSchemas#schema_id}

---

### DataCloudflareSchemaValidationSchemasFilter <a name="DataCloudflareSchemaValidationSchemasFilter" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter(
  omit_source: typing.Union[bool, IResolvable] = None,
  validation_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.property.omitSource">omit_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.property.validationEnabled">validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Filter for enabled schemas. |

---

##### `omit_source`<sup>Optional</sup> <a name="omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.property.omitSource"></a>

```python
omit_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#omit_source DataCloudflareSchemaValidationSchemas#omit_source}

---

##### `validation_enabled`<sup>Optional</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter.property.validationEnabled"></a>

```python
validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/schema_validation_schemas#validation_enabled DataCloudflareSchemaValidationSchemas#validation_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationSchemasFilterOutputReference <a name="DataCloudflareSchemaValidationSchemasFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_schema_validation_schemas

dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resetOmitSource">reset_omit_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resetValidationEnabled">reset_validation_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_omit_source` <a name="reset_omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resetOmitSource"></a>

```python
def reset_omit_source() -> None
```

##### `reset_validation_enabled` <a name="reset_validation_enabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.resetValidationEnabled"></a>

```python
def reset_validation_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.omitSourceInput">omit_source_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabledInput">validation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.omitSource">omit_source</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabled">validation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `omit_source_input`<sup>Optional</sup> <a name="omit_source_input" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.omitSourceInput"></a>

```python
omit_source_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validation_enabled_input`<sup>Optional</sup> <a name="validation_enabled_input" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabledInput"></a>

```python
validation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `omit_source`<sup>Required</sup> <a name="omit_source" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.omitSource"></a>

```python
omit_source: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validation_enabled`<sup>Required</sup> <a name="validation_enabled" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.validationEnabled"></a>

```python
validation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareSchemaValidationSchemasFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareSchemaValidationSchemas.DataCloudflareSchemaValidationSchemasFilter">DataCloudflareSchemaValidationSchemasFilter</a>]

---



