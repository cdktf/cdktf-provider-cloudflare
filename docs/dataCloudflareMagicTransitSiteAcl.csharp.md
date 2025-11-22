# `dataCloudflareMagicTransitSiteAcl` Submodule <a name="`dataCloudflareMagicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteAcl <a name="DataCloudflareMagicTransitSiteAcl" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAcl(Construct Scope, string Id, DataCloudflareMagicTransitSiteAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig">DataCloudflareMagicTransitSiteAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig">DataCloudflareMagicTransitSiteAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcl.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareMagicTransitSiteAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally">ForwardLocally</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1">Lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2">Lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional">Unidirectional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput">AclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput">SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId">AclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForwardLocally`<sup>Required</sup> <a name="ForwardLocally" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally"></a>

```csharp
public IResolvable ForwardLocally { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Lan1`<sup>Required</sup> <a name="Lan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1"></a>

```csharp
public DataCloudflareMagicTransitSiteAclLan1OutputReference Lan1 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a>

---

##### `Lan2`<sup>Required</sup> <a name="Lan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2"></a>

```csharp
public DataCloudflareMagicTransitSiteAclLan2OutputReference Lan2 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `Unidirectional`<sup>Required</sup> <a name="Unidirectional" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional"></a>

```csharp
public IResolvable Unidirectional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AclIdInput`<sup>Optional</sup> <a name="AclIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput"></a>

```csharp
public string AclIdInput { get; }
```

- *Type:* string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput"></a>

```csharp
public string SiteIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId"></a>

```csharp
public string AclId { get; }
```

- *Type:* string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteAclConfig <a name="DataCloudflareMagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string AclId,
    string SiteId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId">AclId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId">SiteId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#account_id DataCloudflareMagicTransitSiteAcl#account_id}

---

##### `AclId`<sup>Required</sup> <a name="AclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId"></a>

```csharp
public string AclId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#acl_id DataCloudflareMagicTransitSiteAcl#acl_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId"></a>

```csharp
public string SiteId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/magic_transit_site_acl#site_id DataCloudflareMagicTransitSiteAcl#site_id}

---

### DataCloudflareMagicTransitSiteAclLan1 <a name="DataCloudflareMagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclLan1 {

};
```


### DataCloudflareMagicTransitSiteAclLan2 <a name="DataCloudflareMagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclLan2 {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteAclLan1OutputReference <a name="DataCloudflareMagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclLan1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId">LanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName">LanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```csharp
public string LanId { get; }
```

- *Type:* string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```csharp
public string LanName { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteAclLan1 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a>

---


### DataCloudflareMagicTransitSiteAclLan2OutputReference <a name="DataCloudflareMagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareMagicTransitSiteAclLan2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId">LanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName">LanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```csharp
public string LanId { get; }
```

- *Type:* string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```csharp
public string LanName { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicTransitSiteAclLan2 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a>

---



