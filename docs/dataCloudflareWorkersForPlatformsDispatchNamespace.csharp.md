# `dataCloudflareWorkersForPlatformsDispatchNamespace` Submodule <a name="`dataCloudflareWorkersForPlatformsDispatchNamespace` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespace <a name="DataCloudflareWorkersForPlatformsDispatchNamespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkersForPlatformsDispatchNamespace(Construct Scope, string Id, DataCloudflareWorkersForPlatformsDispatchNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig">DataCloudflareWorkersForPlatformsDispatchNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig">DataCloudflareWorkersForPlatformsDispatchNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.resetDispatchNamespace">ResetDispatchNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDispatchNamespace` <a name="ResetDispatchNamespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.resetDispatchNamespace"></a>

```csharp
private void ResetDispatchNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsDispatchNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsDispatchNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsDispatchNamespace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareWorkersForPlatformsDispatchNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.modifiedBy">ModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.scriptCount">ScriptCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.dispatchNamespaceInput">DispatchNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.modifiedBy"></a>

```csharp
public string ModifiedBy { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ScriptCount`<sup>Required</sup> <a name="ScriptCount" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.scriptCount"></a>

```csharp
public double ScriptCount { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DispatchNamespaceInput`<sup>Optional</sup> <a name="DispatchNamespaceInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.dispatchNamespaceInput"></a>

```csharp
public string DispatchNamespaceInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DispatchNamespace`<sup>Required</sup> <a name="DispatchNamespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersForPlatformsDispatchNamespaceConfig <a name="DataCloudflareWorkersForPlatformsDispatchNamespaceConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareWorkersForPlatformsDispatchNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string DispatchNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | Name of the Workers for Platforms dispatch namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/workers_for_platforms_dispatch_namespace#account_id DataCloudflareWorkersForPlatformsDispatchNamespace#account_id}

---

##### `DispatchNamespace`<sup>Optional</sup> <a name="DispatchNamespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkersForPlatformsDispatchNamespace.DataCloudflareWorkersForPlatformsDispatchNamespaceConfig.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; set; }
```

- *Type:* string

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/data-sources/workers_for_platforms_dispatch_namespace#dispatch_namespace DataCloudflareWorkersForPlatformsDispatchNamespace#dispatch_namespace}

---



