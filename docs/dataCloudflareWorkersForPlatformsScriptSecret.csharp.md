# `dataCloudflareWorkersForPlatformsScriptSecret` Submodule <a name="`dataCloudflareWorkersForPlatformsScriptSecret` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersForPlatformsScriptSecret <a name="DataCloudflareWorkersForPlatformsScriptSecret" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/workers_for_platforms_script_secret cloudflare_workers_for_platforms_script_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkersForPlatformsScriptSecret(Construct Scope, string Id, DataCloudflareWorkersForPlatformsScriptSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig">DataCloudflareWorkersForPlatformsScriptSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig">DataCloudflareWorkersForPlatformsScriptSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsScriptSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsScriptSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsScriptSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsScriptSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkersForPlatformsScriptSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkersForPlatformsScriptSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/workers_for_platforms_script_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersForPlatformsScriptSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.dispatchNamespaceInput">DispatchNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DispatchNamespaceInput`<sup>Optional</sup> <a name="DispatchNamespaceInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.dispatchNamespaceInput"></a>

```csharp
public string DispatchNamespaceInput { get; }
```

- *Type:* string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DispatchNamespace`<sup>Required</sup> <a name="DispatchNamespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersForPlatformsScriptSecretConfig <a name="DataCloudflareWorkersForPlatformsScriptSecretConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkersForPlatformsScriptSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string DispatchNamespace,
    string ScriptName,
    string SecretName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.scriptName">ScriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | A JavaScript variable name for the secret binding. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/workers_for_platforms_script_secret#account_id DataCloudflareWorkersForPlatformsScriptSecret#account_id}

---

##### `DispatchNamespace`<sup>Required</sup> <a name="DispatchNamespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; set; }
```

- *Type:* string

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/workers_for_platforms_script_secret#dispatch_namespace DataCloudflareWorkersForPlatformsScriptSecret#dispatch_namespace}

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/workers_for_platforms_script_secret#script_name DataCloudflareWorkersForPlatformsScriptSecret#script_name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsScriptSecret.DataCloudflareWorkersForPlatformsScriptSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

A JavaScript variable name for the secret binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/workers_for_platforms_script_secret#secret_name DataCloudflareWorkersForPlatformsScriptSecret#secret_name}

---



