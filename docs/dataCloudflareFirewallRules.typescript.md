# `dataCloudflareFirewallRules` Submodule <a name="`dataCloudflareFirewallRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareFirewallRules <a name="DataCloudflareFirewallRules" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules cloudflare_firewall_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

new dataCloudflareFirewallRules.DataCloudflareFirewallRules(scope: Construct, id: string, config: DataCloudflareFirewallRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig">DataCloudflareFirewallRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig">DataCloudflareFirewallRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetPaused">resetPaused</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.resetPaused"></a>

```typescript
public resetPaused(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareFirewallRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isConstruct"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

dataCloudflareFirewallRules.DataCloudflareFirewallRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformElement"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformDataSource"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareFirewallRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareFirewallRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareFirewallRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareFirewallRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList">DataCloudflareFirewallRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.result"></a>

```typescript
public readonly result: DataCloudflareFirewallRulesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList">DataCloudflareFirewallRulesResultList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareFirewallRulesConfig <a name="DataCloudflareFirewallRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

const dataCloudflareFirewallRulesConfig: dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.action">action</a></code> | <code>string</code> | The action to search for. Must be an exact match. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.description">description</a></code> | <code>string</code> | A case-insensitive string to find in the description. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.id">id</a></code> | <code>string</code> | The unique identifier of the firewall rule. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, indicates that the firewall rule is currently paused. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#zone_id DataCloudflareFirewallRules#zone_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action to search for. Must be an exact match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#action DataCloudflareFirewallRules#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A case-insensitive string to find in the description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#description DataCloudflareFirewallRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#id DataCloudflareFirewallRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#max_items DataCloudflareFirewallRules#max_items}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, indicates that the firewall rule is currently paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/firewall_rules#paused DataCloudflareFirewallRules#paused}

---

### DataCloudflareFirewallRulesResult <a name="DataCloudflareFirewallRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResult.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

const dataCloudflareFirewallRulesResult: dataCloudflareFirewallRules.DataCloudflareFirewallRulesResult = { ... }
```


### DataCloudflareFirewallRulesResultFilter <a name="DataCloudflareFirewallRulesResultFilter" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilter.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

const dataCloudflareFirewallRulesResultFilter: dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareFirewallRulesResultFilterOutputReference <a name="DataCloudflareFirewallRulesResultFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

new dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilter">DataCloudflareFirewallRulesResultFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareFirewallRulesResultFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilter">DataCloudflareFirewallRulesResultFilter</a>

---


### DataCloudflareFirewallRulesResultList <a name="DataCloudflareFirewallRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

new dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareFirewallRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareFirewallRulesResultOutputReference <a name="DataCloudflareFirewallRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareFirewallRules } from '@cdktf/provider-cloudflare'

new dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference">DataCloudflareFirewallRulesResultFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResult">DataCloudflareFirewallRulesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.filter"></a>

```typescript
public readonly filter: DataCloudflareFirewallRulesResultFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultFilterOutputReference">DataCloudflareFirewallRulesResultFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.paused"></a>

```typescript
public readonly paused: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareFirewallRulesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareFirewallRules.DataCloudflareFirewallRulesResult">DataCloudflareFirewallRulesResult</a>

---



