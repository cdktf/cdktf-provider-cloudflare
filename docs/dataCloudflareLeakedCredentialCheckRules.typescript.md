# `dataCloudflareLeakedCredentialCheckRules` Submodule <a name="`dataCloudflareLeakedCredentialCheckRules` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLeakedCredentialCheckRules <a name="DataCloudflareLeakedCredentialCheckRules" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/leaked_credential_check_rules cloudflare_leaked_credential_check_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

new dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules(scope: Construct, id: string, config: DataCloudflareLeakedCredentialCheckRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig">DataCloudflareLeakedCredentialCheckRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig">DataCloudflareLeakedCredentialCheckRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareLeakedCredentialCheckRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLeakedCredentialCheckRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLeakedCredentialCheckRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/leaked_credential_check_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLeakedCredentialCheckRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList">DataCloudflareLeakedCredentialCheckRulesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.result"></a>

```typescript
public readonly result: DataCloudflareLeakedCredentialCheckRulesResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList">DataCloudflareLeakedCredentialCheckRulesResultList</a>

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLeakedCredentialCheckRulesConfig <a name="DataCloudflareLeakedCredentialCheckRulesConfig" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

const dataCloudflareLeakedCredentialCheckRulesConfig: dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/leaked_credential_check_rules#zone_id DataCloudflareLeakedCredentialCheckRules#zone_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/leaked_credential_check_rules#max_items DataCloudflareLeakedCredentialCheckRules#max_items}

---

### DataCloudflareLeakedCredentialCheckRulesResult <a name="DataCloudflareLeakedCredentialCheckRulesResult" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

const dataCloudflareLeakedCredentialCheckRulesResult: dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLeakedCredentialCheckRulesResultList <a name="DataCloudflareLeakedCredentialCheckRulesResultList" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

new dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareLeakedCredentialCheckRulesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLeakedCredentialCheckRulesResultOutputReference <a name="DataCloudflareLeakedCredentialCheckRulesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLeakedCredentialCheckRules } from '@cdktf/provider-cloudflare'

new dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult">DataCloudflareLeakedCredentialCheckRulesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLeakedCredentialCheckRulesResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLeakedCredentialCheckRules.DataCloudflareLeakedCredentialCheckRulesResult">DataCloudflareLeakedCredentialCheckRulesResult</a>

---



